-- CreateTable
CREATE TABLE "s10" (
    "id" SERIAL NOT NULL,
    "category" "Category" NOT NULL,
    "name" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imageUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "s10_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s11" (
    "id" SERIAL NOT NULL,
    "category" "Category" NOT NULL,
    "name" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imageUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "s11_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s12" (
    "id" SERIAL NOT NULL,
    "category" "Category" NOT NULL,
    "name" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imageUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "s12_pkey" PRIMARY KEY ("id")
);
