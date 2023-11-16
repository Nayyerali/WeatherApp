import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import AppContainer from './src/navigation/MainNavigator';
import configureStores from './src/redux/store';
import SplashLoader from './src/components/splash/SplashLoader';
import SplashScreen from 'react-native-splash-screen';

LogBox.ignoreAllLogs();

export default function App() {
  const {persistor, store} = configureStores();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<SplashLoader />} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </ReduxProvider>
  );
}
