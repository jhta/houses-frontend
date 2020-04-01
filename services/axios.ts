import axios from 'axios';
import cookies from 'js-cookie';
import { API_URL } from './constants';

export default function getInstance(options) {
  const token = cookies.get('token') || '';
  const instance = axios.create({
    baseURL: API_URL,
    timeout: 3000,
    headers: { Authorization: `Bearer ${token}` },
  });

  return instance(options);
}
