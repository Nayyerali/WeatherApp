import Home from '../../screens/home/Home';
import WeatherDetail from '../../screens/weather/WeatherDetail';

const headerOptions = {
  headerShown: false,
};

const NavigationScreens = {
  Home: {
    screen: Home,
    options: headerOptions,
  },
  WeatherDetail: {
    screen: WeatherDetail,
    options: headerOptions,
  },
};

export default NavigationScreens;
