import axios from "axios";

const url = "http://localhost:5000/api/v1/auth";

export const register = (formData) => {
  return axios.post(`${url}/register`, formData);
};

export const logIn = (formData) => {
  return axios.post(`${url}/login`, formData);
};
