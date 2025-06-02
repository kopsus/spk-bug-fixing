/*
  Warnings:

  - The primary key for the `bug` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `bug` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - A unique constraint covering the columns `[id]` on the table `Bug` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `bug` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Bug_id_key` ON `Bug`(`id`);
