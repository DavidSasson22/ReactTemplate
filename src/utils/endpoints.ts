import { AxiosInstance } from 'axios';

const endpoints = (apiClient: AxiosInstance) => {
  return {
    getSomeData: () => apiClient.get(`company/connections/ids`),
  };
};

export default endpoints;
