/*
  Warnings:

  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payment_Sale` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Payment_Sale" DROP CONSTRAINT "Payment_Sale_payment_id_fkey";

-- DropForeignKey
ALTER TABLE "Payment_Sale" DROP CONSTRAINT "Payment_Sale_sale_id_fkey";

-- DropTable
DROP TABLE "Payment";

-- DropTable
DROP TABLE "Payment_Sale";
