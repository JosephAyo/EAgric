import Axios from 'axios';
import {BASE_URL} from '../services/uri';

const fetchNews = async () => {
  const res = await Axios.get(`${BASE_URL.NEWS}`);
  return res.data;
};

export {fetchNews};
