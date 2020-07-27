import axios from "axios";

export const fetchAllProducts = () => {
  return axios.get("http://localhost:5000/api/v1/products");
};

export const fetchProductById = (id) => {
  return axios.get(`http://localhost:5000/api/v1/products/${id}`);
};