/*
  Warnings:

  - Added the required column `jobId` to the `CvSkills` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CvSkills" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "skill" TEXT NOT NULL,
    "cvId" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    CONSTRAINT "CvSkills_cvId_fkey" FOREIGN KEY ("cvId") REFERENCES "Cv" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CvSkills_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CvSkills" ("cvId", "id", "skill") SELECT "cvId", "id", "skill" FROM "CvSkills";
DROP TABLE "CvSkills";
ALTER TABLE "new_CvSkills" RENAME TO "CvSkills";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
