import { baseURLAPI } from "@/constants/variables";
import axios from "axios";

const fetchBug = async () => {
  const res = await axios.get(`${baseURLAPI}/bug`);
  return res.data;
};

export { fetchBug };
