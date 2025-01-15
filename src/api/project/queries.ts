import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { TypeProject } from "./types";
import { fetchProjectsById } from "./fetcher";

const useQueryProjectDetail = () => {
  const { id } = useParams() as { id: string };
  const query = useQuery<TypeProject>({
    queryKey: ["detail project", { id }],
    queryFn: () => fetchProjectsById(id),
    enabled: !!id,
  });

  return {
    detailProject: query.data,
    ...query,
  };
};

export { useQueryProjectDetail };
