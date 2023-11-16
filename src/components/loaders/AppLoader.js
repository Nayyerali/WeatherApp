import React from 'react';
import {View, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import AppColors from '../../helpers/AppColors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function AppLoader() {
  const {loading} = useSelector(state => state.WeatherReducer);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={50} color={AppColors.customBlue} />
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 0,
    position: 'absolute',
    top: 0,
    zIndex: 3,
    opacity: 1,
    height: windowHeight,
    width: windowWidth,
    backgroundColor: AppColors.loadingBg,
  },
});
