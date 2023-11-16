import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppColors from '../../helpers/AppColors';
import AppFontFamily from '../../helpers/AppFontFamily';
import AppFontSize from '../../helpers/AppFontSize';

const DynamicIcon = ({iconType = '', name = ''}) => {
  let IconComponent = null;
  try {
    switch (iconType) {
      case 'FontAwesome':
        IconComponent =
          require('react-native-vector-icons/FontAwesome').default;
        break;
      case 'MaterialCommunityIcons':
        IconComponent =
          require('react-native-vector-icons/MaterialCommunityIcons').default;
        break;
      case 'Ionicons':
        IconComponent = require('react-native-vector-icons/Ionicons').default;
        break;
      case 'Entypo':
        IconComponent = require('react-native-vector-icons/Entypo').default;
        break;
      case 'FontAwesome6':
        IconComponent =
          require('react-native-vector-icons/FontAwesome6').default;
        break;
      case 'Feather':
        IconComponent = require('react-native-vector-icons/Feather').default;
        break;
      case 'MaterialIcons':
        IconComponent =
          require('react-native-vector-icons/MaterialIcons').default;
        break;
      default:
        IconComponent =
          require('react-native-vector-icons/FontAwesome').default;
    }
  } catch (error) {
    console.error(`Error loading icon set "${iconType}":`, error);
  }
  return (
    <View>
      {IconComponent && (
        <IconComponent name={name} color={AppColors.white} size={25} />
      )}
    </View>
  );
};

export default function WeatherDetailCell({
  title = '',
  description = '',
  icon = '',
  iconType = 'IonIcons',
}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <DynamicIcon iconType={iconType} style={styles.rain} name={icon} />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  iconContainer: {
    height: 45,
    width: 45,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: AppColors.rgbaWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: AppColors.white,
    fontSize: AppFontSize.size12,
    fontFamily: AppFontFamily.regular,
    textTransform: 'uppercase',
  },
  description: {
    color: AppColors.white,
    fontFamily: AppFontFamily.bold,
  },
});
