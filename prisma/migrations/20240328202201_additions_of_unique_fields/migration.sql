/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Certificate` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Charity` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Cv` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `CvSkills` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Job` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Certificate_id_key" ON "Certificate"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Charity_id_key" ON "Charity"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Cv_id_key" ON "Cv"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CvSkills_id_key" ON "CvSkills"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Job_id_key" ON "Job"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Student_id_key" ON "Student"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
