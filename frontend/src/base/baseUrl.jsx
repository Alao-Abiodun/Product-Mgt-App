import axios from 'axios';

export const url = 'https://eazy-rent.herokuapp.com/api/v1';
// export const url =
//   process.env.NODE_ENV === 'development'
//     ? 'https://eazy-rent.herokuapp.com/api/v1'
//     : 'api.eazy-rent.com/api/v1';

export const baseUrl = axios.create({
  baseURL: `${url}`,
});

baseUrl.interceptors.request.use((request) => {
  request.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return request;
});
