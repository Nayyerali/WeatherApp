import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppColors from '../../helpers/AppColors';
import AppFontSize from '../../helpers/AppFontSize';
import AppFontFamily from './../../helpers/AppFontFamily';

export const PrimaryButton = ({
  title = '',
  onPress = () => {},
  addConStyles = {},
  addTitleStyles = {},
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, addConStyles]}
      onPress={onPress}>
      <Text style={[styles.title, addTitleStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

export const UnitTypeButton = ({
  icon = '',
  isSelected = false,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={isSelected ? styles.selectedUnitContainer : styles.unitContainer}>
      <Icon
        name={icon}
        size={25}
        color={isSelected ? AppColors.white : AppColors.black}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.white,
  },
  title: {
    color: AppColors.primaryBlue,
    fontSize: AppFontSize.size16,
    fontFamily: AppFontFamily.semiBold,
  },
  unitContainer: {
    padding: 10,
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: AppColors.white,
  },
  selectedUnitContainer: {
    padding: 10,
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: AppColors.primaryBlue,
  },
  unitText: {
    color: AppColors.black,
    fontFamily: AppFontFamily.semiBold,
    fontSize: AppFontSize.size18,
  },
  selectedUnitText: {
    color: AppColors.white,
    fontFamily: AppFontFamily.semiBold,
    fontSize: AppFontSize.size18,
  },
});
