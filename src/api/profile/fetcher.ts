import { baseURLAPI } from "@/constants/variables";
import axios from "axios";

const getProfile = async () => {
  const res = await axios.get(`${baseURLAPI}/profile`);
  return res.data;
};

export { getProfile };
