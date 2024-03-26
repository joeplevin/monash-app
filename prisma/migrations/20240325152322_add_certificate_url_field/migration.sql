/*
  Warnings:

  - Added the required column `certificateUrl` to the `Certificate` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Certificate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "charityId" TEXT NOT NULL,
    "certificateUrl" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    CONSTRAINT "Certificate_charityId_fkey" FOREIGN KEY ("charityId") REFERENCES "Charity" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Certificate_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Certificate" ("charityId", "description", "id", "studentId", "title") SELECT "charityId", "description", "id", "studentId", "title" FROM "Certificate";
DROP TABLE "Certificate";
ALTER TABLE "new_Certificate" RENAME TO "Certificate";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
