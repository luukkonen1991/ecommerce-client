import axios from "axios";

const url = "http://localhost:5000/api/v1/auth";

export const register = (formData) => {
  return axios.post(`${url}/register`, formData);
};

export const logIn = (formData) => {
  return axios.post(`${url}/login`, formData);
};

export const logout = () => {
  return axios.get(`${url}/logout`);
};

export const getUser = () => {
  return axios.get(`${url}/me`);
};
