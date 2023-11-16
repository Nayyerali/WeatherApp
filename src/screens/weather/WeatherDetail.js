import React, {useRef, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Animated,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {unwrapResult} from '@reduxjs/toolkit';
import {get} from 'lodash';
import {H1, H2} from '../../components/texts/Headings';
import {getCityWeatherDetails} from '../../redux/reducers/WeatherReducer';
import Icon from 'react-native-vector-icons/Entypo';
import AppIcons from '../../helpers/AppIcons';
import AppColors from '../../helpers/AppColors';
import Applogger from '../../helpers/AppLogger';
import AppToasts from './../../helpers/AppToasts';
import AppFontSize from '../../helpers/AppFontSize';
import AppConstants from '../../helpers/AppConstants';
import APIConstants from '../../helpers/APIConstants';
import AppUtilities from '../../helpers/AppUtilities';
import AppFontFamily from '../../helpers/AppFontFamily';
import AppLoader from '../../components/loaders/AppLoader';
import WeatherDetailCell from '../../components/cells/WeatherDetailCell';

export default function WeatherDetail({navigation, route}) {
  // Dispatcher
  const dispatch = useDispatch();

  // Route State
  const city = get(route, 'params.city', '');

  // Reference
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  // Reducer States
  const {cityWheatherDetails, loading} = useSelector(
    state => state.WeatherReducer,
  );

  // Constants
  const iconUrl = `${get(cityWheatherDetails, 'weather[0].icon', '04n')}.png`;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimation]);

  useEffect(() => {
    handleGetCityWeatherDetails();
  }, [city]);

  const handleGetCityWeatherDetails = () => {
    dispatch(
      getCityWeatherDetails({city, unitType: AppConstants.unitTypes.celsius}),
    )
      .then(unwrapResult)
      .then(res => {
        Applogger('Response at getCityWeatherDetails', res);
      })
      .catch(err => {
        AppToasts.showError('Error', `Failed to get ${city} details`);
        Applogger('Error at getCityWeatherDetails', err);
      });
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: fadeAnimation,
          },
          {
            transform: [
              {
                translateY: fadeAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [150, 0],
                }),
              },
            ],
          },
        ]}>
        {loading && <AppLoader />}
        <ImageBackground
          resizeMode="cover"
          style={styles.bgImage}
          source={AppUtilities.getBackgroundImage(
            get(cityWheatherDetails, 'weather[0].icon', '04n'),
          )}>
          <ScrollView>
            <H1
              title={get(route, 'params.city', '')}
              addConStyles={{marginTop: 20}}
            />
            <View style={styles.tempContainer}>
              <Image
                source={{
                  uri: APIConstants.iconUrl + iconUrl,
                }}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.temrature}>
                {parseInt(get(cityWheatherDetails, 'main.temp', 0))}
              </Text>
              <View>
                <Text style={styles.unit}>{'F'}</Text>
                <Text style={styles.unit}>{'C'}</Text>
              </View>
            </View>
            <H2
              title={get(cityWheatherDetails, 'weather[0].description', '')}
              addTitleStyles={{
                textTransform: 'capitalize',
              }}
            />
            <View style={styles.descContainer}>
              <Text style={styles.description}>
                {'The low will be ' +
                  parseInt(get(cityWheatherDetails, 'main.temp_min', 0))}
              </Text>
              <View style={styles.feelContainer}>
                <Text style={styles.description}>
                  {'Feels like ' +
                    parseInt(get(cityWheatherDetails, 'main.feels_like', 0))}
                </Text>
                <Icon
                  style={styles.rain}
                  name={AppIcons.rain}
                  color={AppColors.white}
                  size={15}
                />
                <Text style={styles.description}>
                  {parseInt(get(cityWheatherDetails, 'main.humidity', 0)) + '%'}
                </Text>
              </View>
            </View>
            <View style={styles.detailsContainer}>
              <H2 title="Today's Detail" addConStyles={{marginHorizontal: 0}} />
              <View style={styles.detailIntCon}>
                <WeatherDetailCell
                  title="Feels Like"
                  description={parseInt(
                    get(cityWheatherDetails, 'main.feels_like', 0),
                  )}
                  icon={AppIcons.feel}
                  iconType={AppConstants.iconTypes.FontAwesome6}
                />
                <WeatherDetailCell
                  title="Wind"
                  description={get(cityWheatherDetails, 'wind.speed', 0)}
                  icon={AppIcons.wind}
                  iconType={AppConstants.iconTypes.Feather}
                />
              </View>
              <View style={styles.detailIntCon}>
                <WeatherDetailCell
                  title="Percipitation"
                  description={parseInt(
                    get(cityWheatherDetails, 'main.humidity', 0),
                  )}
                  icon={AppIcons.perciption}
                  iconType={AppConstants.iconTypes.IonIcons}
                />
                <WeatherDetailCell
                  title="Air Pressure"
                  description={parseInt(
                    get(cityWheatherDetails, 'main.pressure', 0),
                  )}
                  icon={AppIcons.airPressure}
                  iconType={AppConstants.iconTypes.MaterialCommunityIcons}
                />
              </View>
              <View style={styles.detailIntCon}>
                <WeatherDetailCell
                  title="Max UV Index"
                  description={'N/A'}
                  icon={AppIcons.maxUV}
                  iconType={AppConstants.iconTypes.IonIcons}
                />
                <WeatherDetailCell
                  title="Air Quality"
                  description={'N/A'}
                  icon={AppIcons.airQuality}
                  iconType={AppConstants.iconTypes.MaterialCommunityIcons}
                />
              </View>
              <View style={styles.detailIntCon}>
                <WeatherDetailCell
                  title="Dew Point"
                  description={'N/A'}
                  icon={AppIcons.dewPoint}
                  iconType={AppConstants.iconTypes.MaterialIcons}
                />
                <WeatherDetailCell
                  title="Visibility"
                  description={parseInt(
                    get(cityWheatherDetails, 'visibility', 0),
                  )}
                  icon={AppIcons.visibility}
                  iconType={AppConstants.iconTypes.MaterialIcons}
                />
              </View>
              <View style={styles.detailIntCon}>
                <WeatherDetailCell
                  title="Barometer"
                  description={'N/A'}
                  icon={AppIcons.barometer}
                  iconType={AppConstants.iconTypes.IonIcons}
                />
                <WeatherDetailCell
                  title="Allergy"
                  description={'N/A'}
                  icon={AppIcons.allergy}
                  iconType={AppConstants.iconTypes.MaterialCommunityIcons}
                />
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.gray,
  },
  bgImage: {
    flex: 1,
  },
  tempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginTop: 24,
  },
  detailsContainer: {
    margin: 10,
  },
  feelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descContainer: {
    margin: 10,
  },
  rain: {
    marginLeft: 10,
  },
  city: {
    color: AppColors.white,
    fontSize: AppFontSize.size16,
    fontFamily: AppFontFamily.semiBold,
    margin: 10,
  },
  unit: {
    color: AppColors.white,
    fontSize: AppFontSize.size16,
    fontFamily: AppFontFamily.semiBold,
    marginHorizontal: 10,
  },
  icon: {
    height: 75,
    width: 75,
  },
  temrature: {
    color: AppColors.white,
    fontSize: AppFontSize.size40,
    fontFamily: AppFontFamily.regular,
  },
  status: {
    color: AppColors.white,
    fontSize: AppFontSize.size20,
    fontFamily: AppFontFamily.semiBold,
  },
  description: {
    color: AppColors.white,
    fontFamily: AppFontFamily.regular,
    marginVertical: 5,
  },
  detailIntCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
