import axios from 'axios';
import cookies from 'js-cookie';
import { API_URL } from './constants';

const getCookieToken = () => {
  return cookies.get('token');
};

export default function getInstance(options) {
  console.log('why it doesnt work here');
  const token = getCookieToken();
  console.log('this is the token', token);
  const instance = axios.create({
    baseURL: API_URL,
    timeout: 6000,
    headers: { Authorization: `Bearer ${token}`, test: 'test' },
  });

  return instance(options);
}
