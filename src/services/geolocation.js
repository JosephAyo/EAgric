import Geolocation from '@react-native-community/geolocation';
import {checkPermissions, requestPermissions} from './permissions';
import {setDefaultCity} from '../helpers/weather_city';

const getCurrentPosition = async () => {
  const isPermitted = await checkPermissions();
  if (!isPermitted) {
    await requestPermissions();
  }
  Geolocation.getCurrentPosition(
    async (info) => {
      const coordinates = {
        lon: info.coords.longitude,
        lat: info.coords.latitude,
      };
      await setDefaultCity('', coordinates);
    },
    (error) => console.log('error', error),
    {enableHighAccuracy: true},
  );
};

export {getCurrentPosition};
