import apiClient from '../apiClient';

export const getAllTravelProduct = () => {
  return apiClient({
    method: 'get',
  });
};
