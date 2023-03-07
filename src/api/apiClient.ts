import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'mock/mock_data.json',
});

export default apiClient;
