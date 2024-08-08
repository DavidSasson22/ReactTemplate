import axios from 'axios';
import axiosRetry from 'axios-retry';

interface RetryOptions {
  enabled?: boolean;
  retries?: number;
  retryDelay?: (retryCount: number) => number;
  retryCondition?: (error: any) => boolean;
}

interface createApiClientParams {
  endpoints: any;
  retryOpts: RetryOptions;
}

const createApiClient = async ({ endpoints, retryOpts = {} }: createApiClientParams) => {
  const { enabled = false } = retryOpts;

  const client = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  client.interceptors.response.use(
    response => response,
    error => {
      console.error('API call failed:', error);
      return Promise.reject(error);
    },
  );

  axiosRetry(client, {
    retries: 3,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: (error) => {
      return enabled && error?.response?.status === 503;
    },
    ...retryOpts,
  });
};
export default createApiClient;
