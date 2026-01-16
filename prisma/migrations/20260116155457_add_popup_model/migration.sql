-- AlterTable
ALTER TABLE "Notice" ALTER COLUMN "date" DROP DEFAULT,
ALTER COLUMN "mediaType" DROP NOT NULL,
ALTER COLUMN "mediaType" DROP DEFAULT,
ALTER COLUMN "accent" DROP NOT NULL,
ALTER COLUMN "accent" DROP DEFAULT,
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Popup" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT,
    "buttonText" TEXT NOT NULL,
    "buttonLink" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Popup_pkey" PRIMARY KEY ("id")
);
