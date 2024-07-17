import {
  getAllTokenUrl,
  updateTokenStatusUrl,
} from "../constants/urlConstants";
import axios from "../utils/axios";

export const getAllTokens = async () => {
  const { data } = await axios.get(getAllTokenUrl);
  return data.data;
};

export const updateTokenStatus = async (id, status) => {
  const { data } = await axios.get(`${updateTokenStatusUrl}/${status}/${id}`);
  return data.response;
};
