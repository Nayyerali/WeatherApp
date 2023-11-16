import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIcons from '../../helpers/AppIcons';
import AppColors from '../../helpers/AppColors';
import AppFontSize from '../../helpers/AppFontSize';
import AppFontFamily from '../../helpers/AppFontFamily';

export const PrimaryHeader = ({
  backButton = false,
  closeButton = false,
  onBackPress = () => {},
  onClosePress = () => {},
  title = '',
}) => {
  return (
    <View style={styles.container}>
      {backButton && (
        <TouchableOpacity
          onPress={onBackPress}
          style={[styles.buttonsContainer, styles.left]}>
          <Icon name={AppIcons.back} color={AppColors.primaryBlue} size={30} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {closeButton && (
        <TouchableOpacity
          onPress={onClosePress}
          style={[styles.buttonsContainer, styles.right]}>
          <Icon name={AppIcons.close} color={AppColors.primaryBlue} size={30} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonsContainer: {
    position: 'absolute',
    paddingVertical: 10,
  },
  left: {
    left: 10,
  },
  right: {
    right: 10,
  },
  title: {
    width: '75%',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: AppFontFamily.semiBold,
    fontSize: AppFontSize.size18,
    color: AppColors.white,
  },
});
