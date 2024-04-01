/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Certificate` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Charity` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Cv` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Applications" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "jobId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "applicationStatus" TEXT NOT NULL,
    CONSTRAINT "Applications_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Applications_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Job" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "completed" BOOLEAN DEFAULT false,
    "progress" TEXT,
    "charityId" TEXT NOT NULL,
    "studentId" TEXT,
    CONSTRAINT "Job_charityId_fkey" FOREIGN KEY ("charityId") REFERENCES "Charity" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Job_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("userId") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Job" ("charityId", "completed", "description", "id", "location", "progress", "studentId", "title") SELECT "charityId", "completed", "description", "id", "location", "progress", "studentId", "title" FROM "Job";
DROP TABLE "Job";
ALTER TABLE "new_Job" RENAME TO "Job";
CREATE UNIQUE INDEX "Job_id_key" ON "Job"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Applications_id_key" ON "Applications"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_id_key" ON "Certificate"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Charity_id_key" ON "Charity"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Cv_id_key" ON "Cv"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Student_id_key" ON "Student"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
