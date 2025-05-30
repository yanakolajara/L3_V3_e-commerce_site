import axios from 'axios';

// axios.defaults.withCredentials = true;

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
// const isLocalDev = window.location.hostname === 'localhost';

export const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 15000, // Increased timeout for potentially slow connections
  headers: {
    // 'Content-Type': 'application/json',
    // Accept: 'application/json',
  },
  // withCredentials: true,
});

// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem('accessToken');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     // Handle common errors like 401, 403, etc.
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.error(
//         'Response error:',
//         error.response.status,
//         error.response.data
//       );

//       // Handle specific error codes
//       if (error.response.status === 401) {
//         // Handle unauthorized
//         console.log('User is unauthorized');
//       }
//     } else if (error.request) {
//       // The request was made but no response was received
//       console.error('Request error:', error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.error('Error:', error.message);
//     }
//     return Promise.reject(error);
//   }
// );
