/*
  Warnings:

  - You are about to drop the column `studentId` on the `Cv` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Student" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "cvId" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "Student_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Student_cvId_fkey" FOREIGN KEY ("cvId") REFERENCES "Cv" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Student" ("id", "userId") SELECT "id", "userId" FROM "Student";
DROP TABLE "Student";
ALTER TABLE "new_Student" RENAME TO "Student";
CREATE UNIQUE INDEX "Student_userId_key" ON "Student"("userId");
CREATE UNIQUE INDEX "Student_cvId_key" ON "Student"("cvId");
CREATE TABLE "new_Cv" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cvUrl" TEXT NOT NULL
);
INSERT INTO "new_Cv" ("cvUrl", "id") SELECT "cvUrl", "id" FROM "Cv";
DROP TABLE "Cv";
ALTER TABLE "new_Cv" RENAME TO "Cv";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
