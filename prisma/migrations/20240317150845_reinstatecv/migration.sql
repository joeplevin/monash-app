-- CreateTable
CREATE TABLE "Cv" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cvUrl" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    CONSTRAINT "Cv_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Cv_studentId_key" ON "Cv"("studentId");
