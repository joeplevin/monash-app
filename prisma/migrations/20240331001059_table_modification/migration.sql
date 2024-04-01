-- RedefineTables
PRAGMA foreign_keys=OFF;
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
CREATE UNIQUE INDEX "Cv_id_key" ON "Cv"("id");
CREATE UNIQUE INDEX "Cv_studentId_key" ON "Cv"("studentId");
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
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
