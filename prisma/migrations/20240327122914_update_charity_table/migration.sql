-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Charity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "location" TEXT NOT NULL DEFAULT '',
    "userId" TEXT NOT NULL,
    CONSTRAINT "Charity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Charity" ("id", "userId") SELECT "id", "userId" FROM "Charity";
DROP TABLE "Charity";
ALTER TABLE "new_Charity" RENAME TO "Charity";
CREATE UNIQUE INDEX "Charity_userId_key" ON "Charity"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
