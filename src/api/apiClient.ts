import axios from 'axios';

const host = '/data/mock_data.json';

const apiClient = axios.create({
  baseURL: host,
});

export default apiClient;
