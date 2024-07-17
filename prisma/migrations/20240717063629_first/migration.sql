-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "role" TEXT NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "News" (
    "id" TEXT NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "slug" TEXT NOT NULL DEFAULT 'news-slug',
    "status" TEXT NOT NULL DEFAULT 'published',
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "gameBackgroundUrl" TEXT NOT NULL,
    "gameGifUrl" TEXT NOT NULL,
    "gameType" TEXT NOT NULL,
    "RTP" DOUBLE PRECISION NOT NULL,
    "genre" TEXT NOT NULL,
    "volatility" TEXT NOT NULL,
    "maxWin" DOUBLE PRECISION NOT NULL,
    "placeHolderUrl" TEXT NOT NULL,
    "popularRank" INTEGER NOT NULL,
    "releaseDate" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'published',
    "slug" TEXT NOT NULL DEFAULT 'game-slug',

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LanguageInfo" (
    "id" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "trailerLink" TEXT NOT NULL,
    "demoLink" TEXT NOT NULL,

    CONSTRAINT "LanguageInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TargetMarket" (
    "id" TEXT NOT NULL,
    "market" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,

    CONSTRAINT "TargetMarket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TargetCountryByIP" (
    "id" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,

    CONSTRAINT "TargetCountryByIP_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Account_userId_idx" ON "Account"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "News_slug_key" ON "News"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Game_slug_key" ON "Game"("slug");

-- CreateIndex
CREATE INDEX "Tag_gameId_idx" ON "Tag"("gameId");

-- CreateIndex
CREATE INDEX "LanguageInfo_gameId_idx" ON "LanguageInfo"("gameId");

-- CreateIndex
CREATE INDEX "TargetMarket_gameId_idx" ON "TargetMarket"("gameId");

-- CreateIndex
CREATE INDEX "TargetCountryByIP_gameId_idx" ON "TargetCountryByIP"("gameId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageInfo" ADD CONSTRAINT "LanguageInfo_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TargetMarket" ADD CONSTRAINT "TargetMarket_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TargetCountryByIP" ADD CONSTRAINT "TargetCountryByIP_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
