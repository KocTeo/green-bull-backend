/*
  Warnings:

  - Added the required column `address_id` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment_type` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sale_date` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_price` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Sale` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sale" ADD COLUMN     "address_id" INTEGER NOT NULL,
ADD COLUMN     "payment_type" TEXT NOT NULL,
ADD COLUMN     "sale_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'pending',
ADD COLUMN     "total_price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
