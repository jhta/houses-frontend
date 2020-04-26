import axios from 'axios';
import cookies from 'js-cookie';
import { API_URL } from './constants';

const getCookieToken = () => {
  return cookies.get('token');
};

export default function getInstance(options, noHeaders = false) {
  const token = getCookieToken();
  const instance = axios.create({
    baseURL: API_URL,
    timeout: 6000,
    headers: noHeaders ? {} : { Authorization: `Bearer ${token}`, test: 'test' },
  });

  return instance(options);
}
