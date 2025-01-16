"use client";

import { useQuery } from "@tanstack/react-query";
import { getProfile } from "./fetcher";
import { ApiResponse } from "../_global/ApiResponse";
import { TypeProfile } from "./types";

const useQueryProfile = () => {
  const query = useQuery<ApiResponse<TypeProfile>>({
    queryKey: ["profile"],
    queryFn: () => getProfile(),
  });

  return {
    dataProfile: query.data?.data,
    ...query,
  };
};

export { useQueryProfile };
