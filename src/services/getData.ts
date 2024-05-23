import axios, { AxiosInstance, AxiosRequestConfig, isAxiosError } from 'axios';
import { apiRequester, setRequestDefaultHeader } from 'services';

const breaket = {};

export const getData = async <T>(
  url: string,
  signal?: AbortSignal,
  config?: AxiosRequestConfig,
): Promise<T> => {
  try {
    const modifiedConfig = setRequestDefaultHeader(config || breaket);
    const response = await apiRequester.get<T>(url, modifiedConfig);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) throw new Error(error.message);
    else throw error;
  }
};
