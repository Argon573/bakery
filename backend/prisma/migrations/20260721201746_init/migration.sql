-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "Price" DOUBLE PRECISION NOT NULL,
    "about" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
