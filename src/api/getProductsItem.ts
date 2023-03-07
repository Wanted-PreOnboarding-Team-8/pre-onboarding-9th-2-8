import apiClient from '@/api/apiClient';

export const getProductsItem = async () => {
  return await apiClient({
    method: `get`,
  });
};
