import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import {get} from 'lodash';
import moment from 'moment';
import AxiosEvent from '../../api/AxiosEvent';
import AppColors from '../../helpers/AppColors';
import AppConfig from '../../helpers/AppConfig';
import Applogger from '../../helpers/AppLogger';
import AppFontSize from '../../helpers/AppFontSize';
import APIConstants from '../../helpers/APIConstants';
import AppConstants from '../../helpers/AppConstants';
import AppFontFamily from '../../helpers/AppFontFamily';
import AppUtilities from './../../helpers/AppUtilities';

const WeatherListCell = ({
  onPress = () => {},
  city = '',
  unitType = AppConstants.unitTypes.celsius,
}) => {
  const cityName = get(city, 'key', '');
  const [weatherDetails, setWeatherDetails] = useState(null);
  const temrature = get(weatherDetails, 'data.main.temp', '');
  const iconUrl = `${get(weatherDetails, 'data.weather[0].icon', '04n')}.png`;
  const time = moment
    .unix(get(weatherDetails, 'data.dt', moment().unix()))
    .utcOffset(moment(get(weatherDetails, 'data.timezone', 3600)) / 60)
    .format(AppConstants.dateFormats.time);

  useEffect(() => {
    fetchWeather();
  }, [city, unitType]);

  const fetchWeather = async () => {
    try {
      const urlPath = `weather?q=${cityName}&appid=${AppConfig.weatherApiKey}&units=${unitType}`;
      const response = await AxiosEvent.get(urlPath);
      Applogger('Response at fetchWeather', response);
      setWeatherDetails(response);
    } catch (error) {
      Applogger('Error fetching weather data:', error.message);
    }
  };

  if (weatherDetails) {
    return (
      <ImageBackground
        imageStyle={{borderRadius: 10}}
        resizeMode="cover"
        style={styles.bgImage}
        source={AppUtilities.getBackgroundImage(
          get(weatherDetails, 'data.weather[0].icon', '04n'),
        )}>
        <TouchableOpacity
          style={styles.container}
          onPress={() => onPress(get(weatherDetails, 'data', null))}>
          <View>
            <Text style={styles.city}>{cityName}</Text>
            <Text style={styles.time}>{time}</Text>
          </View>
          <View style={styles.tempContainer}>
            <Image
              source={{
                uri: APIConstants.iconUrl + iconUrl,
              }}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.temrature}>{parseInt(temrature)}</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  bgImage: {
    margin: 10,
  },
  container: {
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  selectedBg: {
    backgroundColor: AppColors.secondaryBlue,
  },
  tempContainer: {
    flexDirection: 'row',
  },
  icon: {
    height: 50,
    width: 50,
  },
  city: {
    color: AppColors.white,
    fontSize: AppFontSize.size14,
    fontFamily: AppFontFamily.semiBold,
  },
  temrature: {
    color: AppColors.white,
    fontSize: AppFontSize.size30,
    fontFamily: AppFontFamily.regular,
  },
  time: {
    color: AppColors.white,
    fontSize: AppFontSize.size12,
    fontFamily: AppFontFamily.regular,
  },
});

export default WeatherListCell;
