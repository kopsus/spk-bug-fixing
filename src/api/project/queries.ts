"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { fetchProjects, fetchProjectsById } from "./fetcher";
import { ApiResponse } from "../_global/ApiResponse";
import { TypeProject } from "./types";

const useQueryProject = () => {
  const query = useQuery<ApiResponse<TypeProject[]>>({
    queryKey: ["project"],
    queryFn: () => fetchProjects(),
  });

  return {
    dataProjects: query.data?.data,
    ...query,
  };
};

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

export { useQueryProject, useQueryProjectDetail };
