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
CREATE TABLE "new_CvSkills" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "skill" TEXT NOT NULL,
    "cvId" TEXT NOT NULL,
    "jobId" TEXT NOT NULL
);
INSERT INTO "new_CvSkills" ("cvId", "id", "jobId", "skill") SELECT "cvId", "id", "jobId", "skill" FROM "CvSkills";
DROP TABLE "CvSkills";
ALTER TABLE "new_CvSkills" RENAME TO "CvSkills";
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
