/*
  Warnings:

  - Added the required column `file` to the `document` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_document" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "file" TEXT NOT NULL,
    "signatureX" INTEGER NOT NULL,
    "signatureY" INTEGER NOT NULL,
    "is_disabled" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_document" ("id", "is_disabled", "signatureX", "signatureY", "title") SELECT "id", "is_disabled", "signatureX", "signatureY", "title" FROM "document";
DROP TABLE "document";
ALTER TABLE "new_document" RENAME TO "document";
CREATE UNIQUE INDEX "document_file_key" ON "document"("file");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
