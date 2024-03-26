-- CreateTable
CREATE TABLE "Charity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Charity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Admin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,
    "progress" TEXT NOT NULL,
    "charityId" TEXT NOT NULL,
    "studentId" TEXT,
    CONSTRAINT "Job_charityId_fkey" FOREIGN KEY ("charityId") REFERENCES "Charity" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Job_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("userId") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Certificate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "charityId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    CONSTRAINT "Certificate_charityId_fkey" FOREIGN KEY ("charityId") REFERENCES "Charity" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Certificate_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CvSkills" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "skill" TEXT NOT NULL,
    "cvId" TEXT NOT NULL,
    CONSTRAINT "CvSkills_cvId_fkey" FOREIGN KEY ("cvId") REFERENCES "Cv" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Charity_userId_key" ON "Charity"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_userId_key" ON "Admin"("userId");
