/*
  Warnings:

  - You are about to drop the column `foundingFather` on the `Quote` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Quote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "classPeriod" INTEGER NOT NULL,
    "foundingFatherID" INTEGER,
    "postedById" INTEGER,
    FOREIGN KEY ("foundingFatherID") REFERENCES "FoundingFather" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY ("postedById") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Quote" ("id", "createdAt", "content", "year", "url", "classPeriod", "postedById") SELECT "id", "createdAt", "content", "year", "url", "classPeriod", "postedById" FROM "Quote";
DROP TABLE "Quote";
ALTER TABLE "new_Quote" RENAME TO "Quote";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
