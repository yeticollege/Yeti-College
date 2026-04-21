-- CreateTable
CREATE TABLE "CharacterCertificate" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "parentName" TEXT NOT NULL,
    "municipality" TEXT NOT NULL,
    "wardNo" INTEGER NOT NULL,
    "district" TEXT NOT NULL,
    "faculty" TEXT NOT NULL,
    "program" TEXT NOT NULL,
    "cgpa" DOUBLE PRECISION NOT NULL,
    "outOfCgpa" DOUBLE PRECISION NOT NULL,
    "dobBS" TEXT NOT NULL,
    "dobAD" TIMESTAMP(3) NOT NULL,
    "photoUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CharacterCertificate_pkey" PRIMARY KEY ("id")
);
