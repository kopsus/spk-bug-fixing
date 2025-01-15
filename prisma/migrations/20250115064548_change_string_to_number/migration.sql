/*
  Warnings:

  - You are about to alter the column `severity` on the `bug` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `waktu_perbaikan` on the `bug` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `risiko_perbaikan` on the `bug` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `prioritas_stakeholder` on the `bug` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `usia_bug` on the `bug` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `ketersediaan_sdm` on the `bug` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `skor` on the `bug` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `bug` MODIFY `severity` INTEGER NOT NULL,
    MODIFY `waktu_perbaikan` INTEGER NOT NULL,
    MODIFY `risiko_perbaikan` INTEGER NOT NULL,
    MODIFY `prioritas_stakeholder` INTEGER NOT NULL,
    MODIFY `usia_bug` INTEGER NOT NULL,
    MODIFY `ketersediaan_sdm` INTEGER NOT NULL,
    MODIFY `skor` INTEGER NOT NULL;
