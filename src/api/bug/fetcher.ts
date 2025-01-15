import { baseURLAPI } from "@/constants/variables";
import axios from "axios";
import { TypeBug } from "./types";

const fetchBug = async () => {
  const res = await axios.get(`${baseURLAPI}/bug`);
  return res.data;
};

const createBug = async (body: TypeBug) => {
  const res = await axios.post(`${baseURLAPI}/bug/`, body);
  return res.data;
};

const updateBug = async ({ body, id }: { body: TypeBug; id: string }) => {
  const res = await axios.patch(`${baseURLAPI}/bug/${id}`, body);
  return res.data;
};

const deleteBug = async (id: string) => {
  const res = await axios.delete(`${baseURLAPI}/bug/${id}`);
  return res.data;
};

export { fetchBug, deleteBug, createBug, updateBug };
