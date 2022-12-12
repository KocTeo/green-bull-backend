-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment_Sale" (
    "sale_id" INTEGER NOT NULL,
    "payment_id" INTEGER NOT NULL,

    CONSTRAINT "Payment_Sale_pkey" PRIMARY KEY ("sale_id","payment_id")
);

-- CreateTable
CREATE TABLE "Sale" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Payment_Sale" ADD CONSTRAINT "Payment_Sale_sale_id_fkey" FOREIGN KEY ("sale_id") REFERENCES "Sale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment_Sale" ADD CONSTRAINT "Payment_Sale_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "Payment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
