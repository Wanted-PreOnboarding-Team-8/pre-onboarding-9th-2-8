import apiClient from './apiClient';

export const getMockDatas = () => {
  return apiClient({
    method: 'get',
  });
};
