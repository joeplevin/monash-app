/*
  Warnings:

  - A unique constraint covering the columns `[skill]` on the table `CvSkills` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CvSkills_skill_key" ON "CvSkills"("skill");
