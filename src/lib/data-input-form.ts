import { projects } from "./data-projects";

interface IInput {
  name: string;
  label: string;
  options: {
    title: string;
    value: string | number;
  }[];
}

export const inputs: IInput[] = [
  {
    name: "projectId",
    label: "Projects",
    options: projects.map((item) => ({
      title: item.name,
      value: item.id,
    })),
  },
  {
    name: "severity",
    label: "Tingkat keparahan",
    options: [
      {
        title: "Kritis",
        value: 100,
      },
      {
        title: "Tinggi",
        value: 80,
      },
      {
        title: "Sedang",
        value: 60,
      },
      {
        title: "Rendah",
        value: 40,
      },
      {
        title: "Sangat rendah",
        value: 20,
      },
    ],
  },
  {
    name: "waktu",
    label: "Waktu perbaikan",
    options: [
      {
        title: "< 1 hari",
        value: 100,
      },
      {
        title: "1 - 2 hari",
        value: 80,
      },
      {
        title: "2 - 3 hari",
        value: 60,
      },
      {
        title: "3 - 5 hari",
        value: 40,
      },
      {
        title: "> 5 hari",
        value: 20,
      },
    ],
  },
  {
    name: "resiko",
    label: "Resiko perbaikan",
    options: [
      {
        title: "Sangat rendah",
        value: 100,
      },
      {
        title: "Rendah",
        value: 80,
      },
      {
        title: "Sedang",
        value: 60,
      },
      {
        title: "Tinggi",
        value: 40,
      },
      {
        title: "Sangat tinggi",
        value: 20,
      },
    ],
  },
  {
    name: "stakeholder",
    label: "Prioritas stakeholder",
    options: [
      {
        title: "Kritis",
        value: 100,
      },
      {
        title: "Tinggi",
        value: 80,
      },
      {
        title: "Sedang",
        value: 60,
      },
      {
        title: "Rendah",
        value: 40,
      },
      {
        title: "Sangat rendah",
        value: 20,
      },
    ],
  },
  {
    name: "usiaBug",
    label: "Usia bug",
    options: [
      {
        title: "> 3 bulan",
        value: 100,
      },
      {
        title: "2 - 3 bulan",
        value: 80,
      },
      {
        title: "1 - 2 bulan",
        value: 60,
      },
      {
        title: "1 - 4 minggu",
        value: 40,
      },
      {
        title: "< 1 minggu",
        value: 20,
      },
    ],
  },
  {
    name: "sdm",
    label: "Ketersediaan SDM",
    options: [
      {
        title: "> 3 developer",
        value: 100,
      },
      {
        title: "2 - 3 developer",
        value: 80,
      },
      {
        title: "1 developer",
        value: 60,
      },
      {
        title: "Perlu training",
        value: 40,
      },
      {
        title: "Tidak tersedia",
        value: 20,
      },
    ],
  },
  {
    name: "status",
    label: "Status",
    options: [
      {
        title: "Process",
        value: "Process",
      },
      {
        title: "Fixed",
        value: "Fixed",
      },
    ],
  },
];
