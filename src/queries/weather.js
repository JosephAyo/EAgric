import Axios from 'axios';
import {getDefaultCity} from '../helpers/weather_city';
import {BASE_URL} from '../services/uri';
const fetchWeatherByCityName = (city) => {
  return Axios.get(`${BASE_URL.WEATHER}&q=${city}`);
};
const cities = [
  'owo',
  'akure',
  'ore',
  'owena',
  'idanre',
  'ilesha',
  'osogbo',
  'ibadan',
  'abeokuta',
  'lagos',
];

const fetchAllWeather = async () => {
  const defaultCity = await getDefaultCity();
  const defaultCityName = await getAccurateCityName(defaultCity.coordinates);
  let subsequentRequests = cities
    .filter((city) => city !== defaultCityName.toLowerCase())
    .map((city) => fetchWeatherByCityName(city));
  let firstRequest = [fetchWeatherByCityName(defaultCityName)];
  const requests = firstRequest.concat(subsequentRequests);
  const res = await Promise.all(requests);
  const responses = res.map((el) => el.data);
  return responses;
};

const fetchWeatherByCoordinates = async (coordinates) => {
  const {lat, lon} = coordinates;
  const truncatedLat = Math.trunc(lat * 10000) / 10000;
  const truncatedLon = Math.trunc(lon * 10000) / 10000;
  return Axios.get(
    `${BASE_URL.WEATHER}&lat=${truncatedLat}&lon=${truncatedLon}`,
  );
};

const isCityAvailable = async (city) => {
  try {
    const res = await fetchWeatherByCityName(city);
    if (res.data) {
      return {
        message: 'city found',
        hasError: false,
      };
    }
  } catch (error) {
    return {
      message: error.response.data?.message,
      hasError: true,
    };
  }
};

const getAccurateCityName = async (coordinates) => {
  const {lat, lon} = coordinates;
  const res = await Axios.get(`${BASE_URL.OPEN_MAP}&lat=${lat}&lon=${lon}`);
  return res.data.address.city;
};

export {fetchAllWeather, fetchWeatherByCoordinates, isCityAvailable};
