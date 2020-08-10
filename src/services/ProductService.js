import axios from "axios";

export const fetchAllProducts = (config) => {
  return axios.get("http://localhost:5000/api/v1/products", config);
};

export const fetchProductById = (id) => {
  return axios.get(`http://localhost:5000/api/v1/products/${id}`);
};