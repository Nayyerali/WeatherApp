import AppImages from './AppImages';

const AppUtilities = {
  getBackgroundImage: weatherIcon => {
    switch (weatherIcon) {
      case '01d':
        return AppImages.sunny;
      case '02d':
      case '03d':
      case '04d':
      case '02n':
      case '03n':
      case '04n':
        return AppImages.cloudy;
      case '09d':
      case '09n':
      case '10n':
      case '10d':
        return AppImages.rainy;
      case '11d':
      case '11n':
        return AppImages.thunderstorm;

      case '01n':
      case '13d':
      case '13n':
      case '50d':
      case '50n':
        return AppImages.haze;
      default:
        return AppImages.default;
    }
  },
};

export default AppUtilities;
