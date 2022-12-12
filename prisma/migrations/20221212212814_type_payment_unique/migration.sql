/*
  Warnings:

  - A unique constraint covering the columns `[type]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Payment_type_key" ON "Payment"("type");
