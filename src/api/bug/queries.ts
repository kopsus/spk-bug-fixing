import { useQuery } from "@tanstack/react-query";
import { ApiResponse } from "../_global/ApiResponse";
import { TypeBug } from "./types";
import { fetchBug } from "./fetcher";

const useQuerBugs = () => {
  const query = useQuery<ApiResponse<TypeBug[]>>({
    queryKey: ["all bug"],
    queryFn: () => fetchBug(),
  });

  return {
    dataBugs: query.data?.data,
    ...query,
  };
};

export { useQuerBugs };
