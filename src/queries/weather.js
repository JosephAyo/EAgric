import Axios from 'axios';
import {BASE_URL} from '../services/uri';

const fetchWeatherByCityName = (city) => {
  return Axios.get(`${BASE_URL.WEATHER}&q=${city}`);
};

const fetchAllWeather = async () => {
  const res = await Promise.all([
    fetchWeatherByCityName('Akure'),
    fetchWeatherByCityName('Owo'),
    fetchWeatherByCityName('Ore'),
    fetchWeatherByCityName('Owena'),
    fetchWeatherByCityName('Idanre'),
    fetchWeatherByCityName('Ilesha'),
  ]);
  const responses = res.map((el) => el.data);
  return responses;
};

const fetchWeatherByCoordinates = async (coordinates) => {
  const {lat, lon} = coordinates;
  const res = await Axios.get(`${BASE_URL.WEATHER}&lat=${lat}&lon=${lon}`);
  return res.data;
};

export {fetchAllWeather, fetchWeatherByCoordinates};
