import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {get} from 'lodash';
import {citiesList} from '../Constants';
import {PrimaryHeader} from '../../components/headers/Headers';
import {UnitTypeButton} from '../../components/buttons/AppButtons';
import {PrimaryDropDown} from '../../components/dropdowns/PrimaryDropDown';
import WeatherListCell from '../../components/cells/WeatherListCell';
import AppColors from '../../helpers/AppColors';
import AppRoutes from '../../helpers/AppRoutes';
import AppConstants from '../../helpers/AppConstants';
import AppIcons from '../../helpers/AppIcons';

export default function Home({navigation}) {
  // Local States
  const [unitType, setUnitType] = useState(AppConstants.unitTypes.celsius);

  const onSelectCity = weatherDetails => {
    navigation.navigate(AppRoutes.WeatherDetail, {
      city: get(weatherDetails, 'name', ''),
    });
  };

  return (
    <View style={styles.container}>
      <PrimaryHeader title="My Places" />
      <PrimaryDropDown
        options={citiesList}
        setSelected={city => {
          navigation.navigate(AppRoutes.WeatherDetail, {
            city: city,
          });
        }}
      />
      <ScrollView>
        {citiesList.map((city, index) => {
          return (
            <WeatherListCell
              key={index}
              city={city}
              unitType={unitType}
              onPress={weatherDetails => {
                onSelectCity(weatherDetails);
              }}
            />
          );
        })}
      </ScrollView>
      <View style={styles.unitsContainer}>
        <UnitTypeButton
          onPress={() => setUnitType(AppConstants.unitTypes.celsius)}
          isSelected={unitType == AppConstants.unitTypes.celsius}
          icon={AppIcons.celsius}
        />
        <UnitTypeButton
          onPress={() => setUnitType(AppConstants.unitTypes.fahrenheit)}
          isSelected={unitType == AppConstants.unitTypes.fahrenheit}
          icon={AppIcons.fahrenheit}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.gray,
  },
  unitsContainer: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: AppColors.white,
    alignSelf: 'flex-start',
    borderRadius: 6,
  },
});
