-- CreateTable
CREATE TABLE "sa_languageInfo" (
    "id" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "trailerLink" TEXT NOT NULL,
    "demoLink" TEXT NOT NULL,

    CONSTRAINT "sa_languageInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "sa_languageInfo_gameId_idx" ON "sa_languageInfo"("gameId");

-- AddForeignKey
ALTER TABLE "sa_languageInfo" ADD CONSTRAINT "sa_languageInfo_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
