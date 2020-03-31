import axios from 'axios';
import cookies from 'js-cookie';
import { API_URL } from './constants';

export default function getInstance() {
  const token = cookies.get('token') || '';
  console.log('this is the token', token);
  return axios.create({
    baseURL: API_URL,
    timeout: 1000,
    headers: { Authorization: `Bearer ${token}` },
  });
}
