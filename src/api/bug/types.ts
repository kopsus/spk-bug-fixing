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
  cretedAt?: string;
  updatedAt?: string;
};
