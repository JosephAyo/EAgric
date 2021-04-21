import AsyncStorage from '@react-native-async-storage/async-storage';

const setDefaultCity = async (cityName, coordinates) => {
  try {
    const city = {
      name: cityName,
      coordinates,
    };
    await AsyncStorage.setItem('eagric_city_1', JSON.stringify(city));
  } catch (error) {
    console.log('setDefaultCity error', error);
  }
};

const getDefaultCity = async () => {
  try {
    const value = await AsyncStorage.getItem('eagric_city_1');
    if (value) {
      return JSON.parse(value);
    } else {
      return {name: 'Akure'};
    }
  } catch (error) {
    console.log('getDefaultCity error', error);
    return null;
  }
};

export {getDefaultCity, setDefaultCity};
