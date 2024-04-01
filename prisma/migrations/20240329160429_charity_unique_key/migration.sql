/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Charity` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Charity_id_key" ON "Charity"("id");
