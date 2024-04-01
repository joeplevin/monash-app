/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `CvSkills` will be added. If there are existing duplicate values, this will fail.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Job" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "completed" BOOLEAN,
    "progress" TEXT,
    "charityId" TEXT NOT NULL,
    "studentId" TEXT,
    CONSTRAINT "Job_charityId_fkey" FOREIGN KEY ("charityId") REFERENCES "Charity" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Job_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("userId") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Job" ("charityId", "completed", "description", "id", "location", "progress", "studentId", "title") SELECT "charityId", "completed", "description", "id", "location", "progress", "studentId", "title" FROM "Job";
DROP TABLE "Job";
ALTER TABLE "new_Job" RENAME TO "Job";
CREATE UNIQUE INDEX "Job_id_key" ON "Job"("id");
CREATE TABLE "new_Charity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "location" TEXT NOT NULL DEFAULT '',
    "userId" TEXT NOT NULL
);
INSERT INTO "new_Charity" ("description", "id", "location", "name", "userId") SELECT "description", "id", "location", "name", "userId" FROM "Charity";
DROP TABLE "Charity";
ALTER TABLE "new_Charity" RENAME TO "Charity";
CREATE UNIQUE INDEX "Charity_id_key" ON "Charity"("id");
CREATE UNIQUE INDEX "Charity_userId_key" ON "Charity"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "CvSkills_id_key" ON "CvSkills"("id");
