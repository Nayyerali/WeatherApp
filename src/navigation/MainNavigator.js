import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import {stopLoaderAndError} from '../redux/reducers/WeatherReducer';
import Toast, {
  ErrorToast,
  InfoToast,
  SuccessToast,
} from 'react-native-toast-message';
import NavigationScreens from './screens/NavigationScreens';
import AppRoutes from '../helpers/AppRoutes';
import AppFontFamily from '../helpers/AppFontFamily';
import AppFontSize from '../helpers/AppFontSize';

const StackNavigator = createStackNavigator();

const AppContainer = () => {
  const dispatch = useDispatch();

  var initialRoute = AppRoutes.Home;

  useEffect(() => {
    dispatch(stopLoaderAndError());
  }, []);

  const toastConfig = {
    success: props => (
      <SuccessToast
        {...props}
        text1NumberOfLines={2}
        text2NumberOfLines={2}
        text1Style={styles.text1Style}
        text2Style={styles.text2Style}
      />
    ),
    error: props => (
      <ErrorToast
        {...props}
        text1NumberOfLines={2}
        text2NumberOfLines={2}
        text1Style={styles.text1Style}
        text2Style={styles.text2Style}
      />
    ),
    info: props => (
      <InfoToast
        {...props}
        text1NumberOfLines={2}
        text2NumberOfLines={2}
        text1Style={styles.text1Style}
        text2Style={styles.text2Style}
      />
    ),
  };

  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerTitle: true,
          headerTransparent: false,
        }}>
        {Object.keys(NavigationScreens).map((s, i) => (
          <StackNavigator.Screen
            name={s}
            component={NavigationScreens[s].screen}
            key={i}
            options={({}) => NavigationScreens[s].options}
          />
        ))}
      </StackNavigator.Navigator>
      <Toast ref={ref => Toast.setRef(ref)} config={toastConfig} />
    </NavigationContainer>
  );
};

export default AppContainer;

const styles = StyleSheet.create({
  text1Style: {
    fontFamily: AppFontFamily.bold,
  },
  text2Style: {
    fontSize: AppFontSize.size12,
    fontFamily: AppFontFamily.semiBold,
  },
});
