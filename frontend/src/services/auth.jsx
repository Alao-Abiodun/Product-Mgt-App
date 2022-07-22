import { baseUrl } from '../base/baseUrl';
import axios from 'axios';

export const registerUser = async (payload) => {
  const response = baseUrl.post('/registerUser', payload);
  return response;
};
export const loginUser = async (payload) => {
  const response = baseUrl.post('/loginUser', payload);
  return response;
};
// export const verifyuser = async (token) => {
//   const response = baseUrl.post(`/auth/user/verify?token=${token}`);
//   return response;
// };
export const forgetPassword = async (payload) => {
  const response = baseUrl.post(`/auth/user/password-reset-url/${payload}`);
  return response;
};
export const getUserName = async (payload) => {
  const response = baseUrl.post('/getUserName', payload);
  return response;
};
export const updatePassword = async (payload, email) => {
  const response = baseUrl.patch('/auth/user/update-password', payload);
  return response;
};
export const updateProfile = async (payload, _id) => {
  const response = baseUrl.patch('/auth/user/update-password', payload);
  return response;
};
