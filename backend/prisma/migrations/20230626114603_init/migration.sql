-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "is_disabled" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "document" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "signatureX" INTEGER NOT NULL,
    "signatureY" INTEGER NOT NULL,
    "is_disabled" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "user_name_key" ON "user"("name");

-- CreateIndex
CREATE UNIQUE INDEX "document_title_key" ON "document"("title");
