import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import AppColors from '../../helpers/AppColors';
import AppImages from '../../helpers/AppImages';

export default function SplashLoader() {
  return (
    <View style={styles.container}>
      <Image
        source={AppImages.splash}
        style={styles.splash}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splash: {
    width: '100%',
    height: '100%',
  },
});
