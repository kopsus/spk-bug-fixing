import { EnumStatus, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcryptjs";

async function main() {
  // users
  await Promise.all(
    [{ email: "gibran@gmail.com", fullName: "Gibran Widodo" }].map(
      async (user) => {
        const password = await bcrypt.hash("user123", 10);
        return prisma.user.create({
          data: {
            ...user,
            password,
          },
        });
      }
    )
  );

  // project
  const proeject = await Promise.all(
    [
      {
        name: "Project A",
        description: "Description of project",
      },
      {
        name: "Project B",
        description: "Description of project",
      },
      {
        name: "Project C",
        description: "Description of project",
      },
      {
        name: "Project D",
        description: "Description of project",
      },
    ].map((project) => prisma.project.create({ data: project }))
  );

  //   bug
  await Promise.all(
    [
      {
        title: "Mobile Layout Breaking",
        severity: 3,
        waktu_perbaikan: 5,
        risiko_perbaikan: 2,
        prioritas_stakeholder: 3,
        usia_bug: 2,
        ketersediaan_sdm: 4,
        skor: 7,
        status: EnumStatus.Process,
        projectId: proeject[0].id,
        id: "BUG-001",
      },
      {
        title: "UI Layout Break",
        severity: 2,
        waktu_perbaikan: 3,
        risiko_perbaikan: 1,
        prioritas_stakeholder: 2,
        usia_bug: 1,
        ketersediaan_sdm: 5,
        skor: 5,
        status: EnumStatus.Process,
        projectId: proeject[1].id,
        id: "BUG-002",
      },
      {
        title: "API Timeout Error",
        severity: 5,
        waktu_perbaikan: 10,
        risiko_perbaikan: 4,
        prioritas_stakeholder: 5,
        usia_bug: 4,
        ketersediaan_sdm: 3,
        skor: 8,
        status: EnumStatus.Fixed,
        projectId: proeject[2].id,
        id: "BUG-003",
      },
      {
        title: "Payment Gateway Not Working",
        severity: 4,
        waktu_perbaikan: 7,
        risiko_perbaikan: 3,
        prioritas_stakeholder: 4,
        usia_bug: 3,
        ketersediaan_sdm: 2,
        skor: 9,
        status: EnumStatus.Process,
        projectId: proeject[3].id,
        id: "BUG-004",
      },
      {
        title: "Image Upload Error",
        severity: 3,
        waktu_perbaikan: 4,
        risiko_perbaikan: 2,
        prioritas_stakeholder: 3,
        usia_bug: 2,
        ketersediaan_sdm: 4,
        skor: 6,
        status: EnumStatus.Fixed,
        projectId: proeject[0].id,
        id: "BUG-005",
      },
    ].map((bug) => prisma.bug.create({ data: bug }))
  );
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
