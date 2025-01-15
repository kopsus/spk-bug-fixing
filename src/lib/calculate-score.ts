export const calculateScore = (bug: {
  severity: number;
  waktu_perbaikan: number;
  risiko_perbaikan: number;
  prioritas_stakeholder: number;
  usia_bug: number;
  ketersediaan_sdm: number;
}) => {
  const {
    severity,
    waktu_perbaikan,
    risiko_perbaikan,
    prioritas_stakeholder,
    usia_bug,
    ketersediaan_sdm,
  } = bug;

  // Hitung skor berdasarkan rumus
  const skor =
    severity * 0.3 +
    waktu_perbaikan * 0.2 +
    risiko_perbaikan * 0.15 +
    prioritas_stakeholder * 0.15 +
    usia_bug * 0.1 +
    ketersediaan_sdm * 0.1;

  return Math.round(skor); // membulatkan nilai skor ke integer = decimal
};
