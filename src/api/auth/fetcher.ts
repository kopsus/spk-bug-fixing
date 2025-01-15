import { baseURLAPI } from "@/constants/variables";
import axios from "axios";
import { TypeRegister } from "./types";

const mutationAuth = async ({
  body,
  params,
}: {
  body: TypeRegister;
  params: string;
}) => {
  try {
    const res = await axios.post(`${baseURLAPI}/auth/${params}`, body);
    return res.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Terjadi kesalahan, coba lagi nanti.");
  }
};

const fetchLogout = async () => {
  const res = await axios.delete(`${baseURLAPI}/auth/logout`);
  return res.data;
};

export { mutationAuth, fetchLogout };
