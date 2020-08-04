import axios from "axios";

export const fetchAllTargetGroups = () => {
  return axios.get("http://localhost:5000/api/v1/target-groups");
};