import AxiosEvent from '../../api/AxiosEvent';
import Applogger from '../../helpers/AppLogger';
import AppConfig from '../../helpers/AppConfig';
import APIConstants from '../../helpers/APIConstants';

async function apiGetCityWeatherDetails(payload) {
  Applogger('Payload at apiGetCityWeatherDetails', payload);
  const {city, unitType} = payload;
  var path = `weather?q=${city}&appid=${AppConfig.weatherApiKey}&units=${unitType}`;
  // AxiosEvent.defaults.baseURL = APIConstants.baseUrlDetails;
  return AxiosEvent.get(path);
}

export const WeatherApiServices = {
  apiGetCityWeatherDetails,
};
