/*
  Warnings:

  - Added the required column `jobId` to the `CvSkills` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "_CvToCvSkills" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CvToCvSkills_A_fkey" FOREIGN KEY ("A") REFERENCES "Cv" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CvToCvSkills_B_fkey" FOREIGN KEY ("B") REFERENCES "CvSkills" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CvSkillsToJob" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CvSkillsToJob_A_fkey" FOREIGN KEY ("A") REFERENCES "CvSkills" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CvSkillsToJob_B_fkey" FOREIGN KEY ("B") REFERENCES "Job" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Charity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Charity Name',
    "description" TEXT NOT NULL DEFAULT 'Charity Description',
    "location" TEXT NOT NULL DEFAULT 'Charity Location'
);
INSERT INTO "new_Charity" ("id", "userId") SELECT "id", "userId" FROM "Charity";
DROP TABLE "Charity";
ALTER TABLE "new_Charity" RENAME TO "Charity";
CREATE UNIQUE INDEX "Charity_userId_key" ON "Charity"("userId");
CREATE TABLE "new_CvSkills" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "skill" TEXT NOT NULL,
    "cvId" TEXT NOT NULL,
    "jobId" TEXT NOT NULL
);
INSERT INTO "new_CvSkills" ("cvId", "id", "skill") SELECT "cvId", "id", "skill" FROM "CvSkills";
DROP TABLE "CvSkills";
ALTER TABLE "new_CvSkills" RENAME TO "CvSkills";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "emailVerified" DATETIME,
    "phone" TEXT NOT NULL,
    "image" TEXT,
    "charityId" TEXT,
    CONSTRAINT "User_charityId_fkey" FOREIGN KEY ("charityId") REFERENCES "Charity" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("email", "emailVerified", "firstName", "id", "image", "lastName", "password", "phone", "role") SELECT "email", "emailVerified", "firstName", "id", "image", "lastName", "password", "phone", "role" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_CvToCvSkills_AB_unique" ON "_CvToCvSkills"("A", "B");

-- CreateIndex
CREATE INDEX "_CvToCvSkills_B_index" ON "_CvToCvSkills"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CvSkillsToJob_AB_unique" ON "_CvSkillsToJob"("A", "B");

-- CreateIndex
CREATE INDEX "_CvSkillsToJob_B_index" ON "_CvSkillsToJob"("B");
