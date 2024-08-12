import axios, { type InternalAxiosRequestConfig } from 'axios';
import { BASE_URL } from 'src/config';

const api = axios.create({
  baseURL: BASE_URL,
});

const authInterceptor = <T extends InternalAxiosRequestConfig>(config: T) => {
  config.headers.Authorization = `Bearer ${
    JSON.parse(`${localStorage.getItem('token')}`).state.token
  }`;
  return config;
};

api.interceptors.request.use(authInterceptor);

export { api };
