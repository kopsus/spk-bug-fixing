import { TypeProject } from "../project/types";

export type TypeBug = {
  id: string;
  title: string;
  severity: number;
  waktu_perbaikan: number;
  risiko_perbaikan: number;
  prioritas_stakeholder: number;
  usia_bug: number;
  ketersediaan_sdm: number;
  skor: number;
  status: "Process" | "Fixed";
  projectId: string;
  createdAt?: string;
  updatedAt?: string;
  project?: TypeProject;
};
