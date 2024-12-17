import axios from 'axios';

// Base URL for the NestJS backend
const apiClient = axios.create({
  baseURL: 'http://localhost:3000/url',
  timeout: 1000,
});

export default apiClient;
