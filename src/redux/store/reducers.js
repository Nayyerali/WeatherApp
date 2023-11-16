import {createReducer, combineReducers} from '@reduxjs/toolkit';
import WeatherReducer from '../reducers/WeatherReducer';

const appState = {
  name: 'WeatherApp',
  url: '',
  version: '1.0.0',
};

const AppReducer = createReducer(appState, _ => {
  return appState;
});

const rootReducer = combineReducers({
  AppReducer: AppReducer,
  WeatherReducer: WeatherReducer,
});

export default rootReducer;
