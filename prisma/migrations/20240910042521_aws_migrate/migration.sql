-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "assetUrl" TEXT NOT NULL DEFAULT 'asset-url',
ADD COLUMN     "weight" TEXT NOT NULL DEFAULT '1',
ALTER COLUMN "RTP" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "TargetCountryByIP" ADD COLUMN     "demoLinkByCountry" TEXT NOT NULL DEFAULT 'demo-link-by-country';

-- AlterTable
ALTER TABLE "TargetMarket" ADD COLUMN     "demoLinkByMarket" TEXT NOT NULL DEFAULT 'demo-link-by-market';

-- CreateTable
CREATE TABLE "GameEditHistory" (
    "id" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "details" TEXT NOT NULL,

    CONSTRAINT "GameEditHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "GameEditHistory_gameId_idx" ON "GameEditHistory"("gameId");

-- CreateIndex
CREATE INDEX "GameEditHistory_editorId_idx" ON "GameEditHistory"("editorId");

-- AddForeignKey
ALTER TABLE "GameEditHistory" ADD CONSTRAINT "GameEditHistory_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameEditHistory" ADD CONSTRAINT "GameEditHistory_editorId_fkey" FOREIGN KEY ("editorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
