// src/api/https.js
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const http = axios.create({
  baseURL: '/api',            // 프록시 타도록
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' }
});

export default http;
