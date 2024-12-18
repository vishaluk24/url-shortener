import axios from 'axios';

// Dynamically use the base URL from environment variables
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 1000,
});

export default apiClient;
