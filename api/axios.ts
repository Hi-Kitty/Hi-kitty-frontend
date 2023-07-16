import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { getAccessTokenFromLocalStorage } from '../utils/accessTokenHandler';
import { getRefreshTokenFromLocalStorage } from '../utils/refreshTokenHandler';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
const SERVER_URL_ROOT = process.env.NEXT_PUBLIC_SERVER_URL_ROOT;

const instance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const custom_instance = axios.create({
  baseURL: SERVER_URL_ROOT,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const customInstance = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  const source = axios.CancelToken.source();
  const promise = custom_instance({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled');
  };

  return promise;
};

export default instance;

custom_instance.interceptors.request.use(
  async config => {
    const copyConfig = { ...config };

    const accessToken = getAccessTokenFromLocalStorage();

    if (accessToken) {
      copyConfig.headers = {
        ...copyConfig.headers,
        Authorization: `Bearer ${accessToken}`,
      } as AxiosRequestHeaders;
    }

    if (config.url?.includes('renew')) {
      const refreshToken = getRefreshTokenFromLocalStorage();

      if (refreshToken) {
        copyConfig.headers = {
          ...copyConfig.headers,
          Authorization: `Bearer ${refreshToken}`,
        } as AxiosRequestHeaders;
      }
    }

    return copyConfig;
  },
  error => {
    return Promise.reject(error);
  }
);
