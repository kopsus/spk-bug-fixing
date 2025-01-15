import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { fetchProjectsById } from "./fetcher";
import { ApiResponse } from "../_global/ApiResponse";
import { TypeProject } from "./types";

const useQueryProjectDetail = () => {
  const { id } = useParams() as { id: string };
  const query = useQuery<ApiResponse<TypeProject>>({
    queryKey: ["detail project", { id }],
    queryFn: () => fetchProjectsById(id),
    enabled: !!id,
  });

  return {
    detailProject: query.data?.data,
    ...query,
  };
};

export { useQueryProjectDetail };
