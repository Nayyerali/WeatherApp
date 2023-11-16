import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppColors from '../../helpers/AppColors';
import AppFontSize from '../../helpers/AppFontSize';
import AppFontFamily from '../../helpers/AppFontFamily';

export const H1 = ({title = '', addConStyles = {}, addTitleStyles = {}}) => {
  return (
    <View style={[styles.container, addConStyles]}>
      <Text style={[styles.h1Title, addTitleStyles]}>{title}</Text>
    </View>
  );
};

export const H2 = ({title = '', addConStyles = {}, addTitleStyles = {}}) => {
  return (
    <View style={[styles.container, addConStyles]}>
      <Text style={[styles.h2Title, addTitleStyles]}>{title}</Text>
    </View>
  );
};

export const H3 = ({title = '', addConStyles = {}, addTitleStyles = {}}) => {
  return (
    <View style={[styles.container, addConStyles]}>
      <Text style={[styles.h3Title, addTitleStyles]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  h1Title: {
    fontFamily: AppFontFamily.bold,
    fontSize: AppFontSize.size24,
    color: AppColors.white,
  },
  h2Title: {
    fontFamily: AppFontFamily.semiBold,
    fontSize: AppFontSize.size20,
    color: AppColors.white,
  },
  h3Title: {
    fontFamily: AppFontFamily.semiBold,
    fontSize: AppFontSize.size16,
    color: AppColors.white,
  },
});
