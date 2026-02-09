-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,
    "gpa" DOUBLE PRECISION NOT NULL,
    "prevInstitute" TEXT NOT NULL,
    "board" TEXT NOT NULL,
    "marksheet" TEXT NOT NULL,
    "character" TEXT NOT NULL,
    "citizenship" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);
