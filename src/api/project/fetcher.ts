import { baseURLAPI } from "@/constants/variables";
import axios from "axios";

const fetchProjects = async () => {
  const res = await axios.get(`${baseURLAPI}/project`);
  return res.data.data;
};

const fetchProjectsById = async (id: string) => {
  const res = await axios.get(`${baseURLAPI}/project/${id}`);
  return res.data.data;
};

export { fetchProjects, fetchProjectsById };
