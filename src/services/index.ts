import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export const apiRequester: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL as string,
  timeout: 5000,
});

export const setRequestDefaultHeader = (requestConfig: AxiosRequestConfig) => {
  const config = requestConfig;
  config.headers = {
    ...config.headers,
    'Content-Type': 'application/json;charset=utf-8',
  };
  return config;
};
