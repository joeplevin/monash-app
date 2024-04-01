-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cv" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fileName" TEXT NOT NULL DEFAULT 'CV',
    "cvUrl" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    CONSTRAINT "Cv_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Cv" ("cvUrl", "id", "studentId") SELECT "cvUrl", "id", "studentId" FROM "Cv";
DROP TABLE "Cv";
ALTER TABLE "new_Cv" RENAME TO "Cv";
CREATE UNIQUE INDEX "Cv_studentId_key" ON "Cv"("studentId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
