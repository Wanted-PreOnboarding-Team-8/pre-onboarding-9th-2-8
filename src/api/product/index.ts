import { axiosInstance } from '@/api/client';
import { IProduct } from '@/interface/product';

const productApi = {
  getProducts: async () => {
    const { data } = await axiosInstance.get('/mock/mock_data.json');
    return data as IProduct[];
  },
};

export default productApi;
