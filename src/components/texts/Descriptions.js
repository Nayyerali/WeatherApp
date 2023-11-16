import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppColors from '../../helpers/AppColors';
import AppFontSize from '../../helpers/AppFontSize';
import AppFontFamily from '../../helpers/AppFontFamily';

export const PrimaryDescription = ({
  title = '',
  addConStyles = {},
  addTitleStyles = {},
}) => {
  return (
    <View style={[styles.container, addConStyles]}>
      <Text style={[styles.primaryDesc, addTitleStyles]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  primaryDesc: {
    fontFamily: AppFontFamily.regular,
    fontSize: AppFontSize.size16,
    color: AppColors.white,
  },
});
