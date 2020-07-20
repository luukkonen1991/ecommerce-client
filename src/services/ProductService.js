import axios from "axios";

export const fetchAllProducts = () => {
  return axios.get("http://localhost:5000/api/v1/products");
};
