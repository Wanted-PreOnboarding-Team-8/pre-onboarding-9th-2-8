import apiClient from '../apiClient';

const getProducts = async () =>
  apiClient({
    method: 'get',
  });

export { getProducts };
