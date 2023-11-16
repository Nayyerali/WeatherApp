import {createAsyncThunk, createReducer} from '@reduxjs/toolkit';
import {WeatherApiServices} from '../actions/WeatherApiServices';

export const stopLoaderAndError = createAsyncThunk(
  'WeatherReducer/stopLoaderAndError',
  async () => {
    return true;
  },
);

export const clearStore = createAsyncThunk(
  'WeatherReducer/clearStore',
  async () => {
    return true;
  },
);

export const getCityWeatherDetails = createAsyncThunk(
  'WeatherReducer/getCityWeatherDetails',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await WeatherApiServices.apiGetCityWeatherDetails(
        payload,
      );
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  },
);

const initialState = {
  loading: false,
  error: null,
  cityWheatherDetails: null,
};

const WeatherReducer = createReducer(initialState, {
  [getCityWeatherDetails.pending]: (state, action) => {
    return {
      ...state,
      loading: true,
      error: null,
      cityWheatherDetails: null,
    };
  },
  [getCityWeatherDetails.fulfilled]: (state, action) => {
    return {
      ...state,
      loading: false,
      error: null,
      cityWheatherDetails: action.payload,
    };
  },
  [getCityWeatherDetails.rejected]: (state, action) => {
    return {...state, loading: false, error: action.payload};
  },

  [stopLoaderAndError.fulfilled]: (state, action) => {
    return {...state, loading: false, error: null};
  },

  [clearStore.fulfilled]: (state, action) => {
    return initialState;
  },
});

export default WeatherReducer;
