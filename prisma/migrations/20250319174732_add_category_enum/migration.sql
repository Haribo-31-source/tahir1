-- CreateEnum
CREATE TYPE "Category" AS ENUM ('PDF', 'NOTE');

-- CreateTable
CREATE TABLE "s9" (
    "id" SERIAL NOT NULL,
    "category" "Category" NOT NULL,
    "name" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imageUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "s9_pkey" PRIMARY KEY ("id")
);
