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
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
