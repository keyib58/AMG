import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  try {
    // Seed Users
    await prisma.user.create({
      data: {
        id: "clypi67bv0000pt14r8vz2wbw",
        email: "e92m3@gmail.com",
        password:
          "$2a$10$qi.TtyTBrIwKDIjq0cHuG.2EaOHPCZ.wOYY6PpSUG8dr1XNZT5oci",
        name: null,
        emailVerified: null,
        image: null,
        role: "USER",
      },
    });
    await prisma.user.create({
      data: {
        id: "clywdverx0000pt8w1f6y89qp",
        email: "keyi.dai@dynamitegames.io",
        password:
          "$2a$10$WDzQorWS20V.lQyYDip27OdxIvSF2h4FjQivRjtutjR6ko4Gng5Ya",
        name: null,
        emailVerified: null,
        image: null,
        role: "USER",
      },
    });

    // Seed Accounts

    // Seed Sessions

    // Seed Verification Tokens

    // Seed News

    // Seed Games
    await prisma.game.create({
      data: {
        id: "clzi4aoeg009dl309jmyhzp89",
        name: "KM POK DENG",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/km-pok-deng_500x500_en.jpg",
        description:
          "Discover the fun of Kingmaker Pok Deng, the renowned Thai card game brought to life by a deck of 52 cards. Challenge the banker, achieve the best hand ranks and aim for a remarkable 5x payout. Enhance the excitement with a unique side bet against the banker's Pok 8/9 pursuit, potentially boosting your winnings by 1.2x!",
        gameBackgroundUrl: "NA",
        gameGifUrl: "NA",
        gameType: "CLASSIC",
        RTP: "98.90",
        genre: "CLASSIC",
        volatility: "LOW",
        maxWin: 5,
        placeHolderUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/placeholder_screenshot_image/km-pokdeng_maingame_en.jpg",
        popularRank: 1,
        releaseDate: "17/03/2021",
        assetUrl: "NA",
        status: "published",
        slug: "king-pok-deng",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi4jume00a0l309dk4mjmo8",
        name: "7 UP 7 DOWN",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/7-up-7-down_500x500_en.jpg",
        description:
          "Feel the excitement with 7 Up 7 Down, a thrilling dice game! Bet on over 7, under 7 or exact 7 with two dice. Win 1x for nailing over or under 7 and a heart-pounding 4x for hitting exact 7. Watch out for lightning bonuses to amplify your wins up to 6x. ",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/7-up-7-down.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "MEDIUM",
        maxWin: 4,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "05/01/2021",
        assetUrl: "NA",
        status: "published",
        slug: "seven-up-down",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi8fnyi0040jt091cjo8mmr",
        name: "BOLA GOLEK",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/bola-golek_500x500_en.jpg",
        description:
          "Prepare to be swept into the world of Bola Golek, the beloved street game adored in Malaysia and Indonesia. Watch in anticipation as the rubber ball is released onto the 6x6 playing board, spins unpredictably before settling on a symbol that unveils the triumphant icon and colour. ",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/bola-golek.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "MEDIUM",
        maxWin: 10,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "17/03/2021",
        assetUrl: "NA",
        status: "published",
        slug: "bola-golek",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzhu8loo0000l509pxo5tn0f",
        name: "POKER ROULETTE ",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/poker-roulette_500x500_en.jpg",
        description:
          "Discover Poker Roulette, the enchanting 'card wheel' game. With inner and outer wheels adorned with picture cards and suits, make strategic bets and spin the wheel to unveil the path to victory!",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/poker-roulette.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "MEDIUM",
        maxWin: 10,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "2020",
        assetUrl: "NA",
        status: "published",
        slug: "poker-roulette",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi41rjd008pl30952zdf3hp",
        name: "PAI KANG",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/pai-kang_500x500_en.jpg",
        description:
          "A thrilling Thai card game with a 52-card deck. 5 players, 5 cards each. Draw, discard, and unleash the strategic Lai move when ranks align. Ready for action? Use Kang to conclude the round! It’s all about strategy and in quest for the lowest hand. ",
        gameBackgroundUrl: "NA",
        gameGifUrl: "NA",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "LOW",
        maxWin: 8,
        placeHolderUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/placeholder_screenshot_image/pai-kang_maingame_en.jpg",
        popularRank: 1,
        releaseDate: "24/03/2021",
        assetUrl: "NA",
        status: "published",
        slug: "pai-kang",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzjglj520000l109djgmfuf2",
        name: "COIN PUSHER",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/coin-pusher_500x500_en.jpg",
        description:
          "Coin Pusher offers an exhilarating arcade experience that can lead you to ultimate wealth! Drop coins, nudge them toward prizes, and fill the Bonus Meter to unlock surprise events that yield rewards from the Special Slots.",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/coin-pusher.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "HIGH",
        maxWin: 1000,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "26/3/2024",
        assetUrl: "NA",
        status: "published",
        slug: "coin-dozer",
      },
    });
    await prisma.game.create({
      data: {
        id: "clz6f9mr80004ptagxa9419n1",
        name: "A test",
        thumbnailUrl:
          "https://res.cloudinary.com/detatjujs/image/upload/v1713516700/jackpot-jump_500x500_en_xrbsuy.jpg",
        description:
          "https://res.cloudinary.com/detatjujs/image/upload/v1713516700/jackpot-jump_500x500_en_xrbsuy.jpg",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://res.cloudinary.com/detatjujs/image/upload/v1713516700/jackpot-jump_500x500_en_xrbsuy.jpg",
        gameType: "A",
        RTP: "95.1122",
        genre: "NEXT-GEN",
        volatility: "HIGH",
        maxWin: 200,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "2024-09-01",
        assetUrl: "NA",
        status: "archived",
        slug: "1",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzhvdyxm0000l809xdwa343s",
        name: "BLACKJACK",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/blackjack_500x500_en.jpg",
        description:
          "Blackjack, also known as 21, is a highly popular casino card game played with 8 standard 52-card decks. Beat the dealer's hand by obtaining cards that total 21 or closer without exceeding that value. Each table seats up to 5 players across multiple rooms. Achieving a hand value of 21 with the first two cards results in a Blackjack! Can you dominate and outsmart the house? ",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/blackjack.webp",
        gameType: "CLASSIC",
        RTP: "99.28",
        genre: "CLASSIC",
        volatility: "HIGH",
        maxWin: 100,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "2020",
        assetUrl: "NA",
        status: "published",
        slug: "blackjack",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi2brts0000l309ww62ry9m",
        name: "EUROPEAN ROULETTE",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/european-roulette_500x500_en.jpg",
        description:
          "European Roulette is a classic casino game with 37 numbers on the wheel, including the zero. Watch as the ball lands on the numbers and colors to create winning combinations. Look out for the lightning bonus feature that can electrify 1-5 lucky numbers with multipliers, ranging from 50x to 500x, and increase your winnings. ",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/european-roulette_1440x900.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/european-roulette.webp",
        gameType: "CLASSIC",
        RTP: "97.30",
        genre: "CLASSIC",
        volatility: "HIGH",
        maxWin: 29,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "2021",
        assetUrl: "NA",
        status: "published",
        slug: "european-roulette",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi2lt5d000el309yjvcccck",
        name: "MAX KENO",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/max-keno_500x500_en.jpg",
        description:
          "Dive headfirst into the world of Max Keno, a riveting lottery-style game. Marvel as 20 unique numbers emerge from an 80-number pool, summoned by the capricious whims of a random number generator (RNG). Place bets, anticipate the total of these chosen numbers, and surrender to the thrilling embrace of the enigmatic!",
        gameBackgroundUrl: "NA",
        gameGifUrl: "NA",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "LOW",
        maxWin: 9.2,
        placeHolderUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/placeholder_screenshot_image/max-keno_maingame_en.jpg",
        popularRank: 1,
        releaseDate: "2021",
        assetUrl: "NA",
        status: "published",
        slug: "max-keno",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi2o2eo000zl309mwz2yq8t",
        name: "FAN TAN CLASSIC",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/fan-tan-3_500x500_en.jpg",
        description:
          "Fan Tan Classic invites players to a game of white buttons, a cup, and a small stick. Watch the buttons dance under the dome, wager stakes, from one to four, and unveil the cup to reveal the final set of buttons remained!",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/fan-tan-classic.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "MEDIUM",
        maxWin: 2.85,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "2021",
        assetUrl: "NA",
        status: "published",
        slug: "fan-tan-3",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi2u1pz0022l3099889lr8y",
        name: "THAI HI LO",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/thai-hi-lo-3_500x500_en.jpg",
        description:
          "Discover the excitement of Thai Hi Lo 2, where dice meet Thai zest in the classic high or low (hi-lo) format. With three dice and a rich array of betting options, luck predicts the dice's fate. Keep an eye out for the exhilarating 2x bonus, elevating winnings up to a remarkable 10x!",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/thai-hi-lo-2_1440x900.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/thai-hi-lo-2.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "MEDIUM",
        maxWin: 5,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "2021",
        assetUrl: "NA",
        status: "published",
        slug: "thai-hi-lo-2",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi3l75g007bl309owee93o7",
        name: "DRAGON TIGER 2",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/dragon-tiger-3_500x500_en.jpg",
        description:
          "Dragon Tiger 2 introduces a thrilling twist to the classic card game. Watch as the dealer reveals two cards, one for the dragon and one for the tiger. Predict which one will reign supreme or explore a range of other betting options on the individual cards. Keep an eye out for the lightning 2x bonus, which could multiply winnings by an astounding 20x! ",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/dragon-tiger-2.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "MEDIUM",
        maxWin: 10,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "2021",
        assetUrl: "NA",
        status: "published",
        slug: "dragon-tiger-2",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi2tyl1001nl309j3xn65ee",
        name: "ALMIGHTY GREEK",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/almighty-greek_500x500_en.jpg",
        description:
          "Almighty Greek is a 5x3 slot game with 10 paylines. The game showcases a base game with 7 regular symbols, alongside a Wild symbol for engaging Wild re-spin mechanics. During the wild re-spin feature, the Wild symbol appears exclusively on reels 2, 3, and 4, expanding across the reel to initiate subsequent re-spins.",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/almighty-greek_1440x900_en.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/placeholder_screenshot_image/almighty-greek_maingame_en.png",
        gameType: "SLOTS",
        RTP: "96.07",
        genre: "SLOTS",
        volatility: "HIGH",
        maxWin: 433.5,
        placeHolderUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/placeholder_screenshot_image/almighty-greek_maingame_en.png",
        popularRank: 1,
        releaseDate: "2024",
        assetUrl: "NA",
        status: "published",
        slug: "almighty-greek",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi1nawh0000kz094cc5xgan",
        name: "BACCARAT",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/baccarat_500x500_en.jpg",
        description:
          'Baccarat, also known as "Punto Banco," is a prestigious card game enjoyed in casinos worldwide. In this game, you\'ll be tasked with comparing hand values between two sides: the player and the banker. Place your bets and side bets on either the player or the banker, and watch as the action unfolds. Each side is dealt 2-3 cards, aiming for the highest possible hand value of nine. The hand with the highest score wins!',
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/baccarat_1440x900.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/baccarat-blitz.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "HIGH",
        maxWin: 75,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "24/03/2021",
        assetUrl: "NA",
        status: "published",
        slug: "baccarat",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi2zje00036l309wl7hsivh",
        name: "BELANGKAI 2",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/belangkai-2_500x500_en.jpg",
        description:
          'Known as “Belangkai" in the Malay language, it is a simple game based on a spinner with four sides. Along with a variety of betting options, the player simply bets on which symbol will appear after a spin.',
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/belangkai-2.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "MEDIUM",
        maxWin: 2.5,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "2021",
        assetUrl: "NA",
        status: "published",
        slug: "belangkai-2",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi340m8003xl3099ec5vv61",
        name: "COCKFIGHTING ARENA",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/cockfighting-arena_500x500_en.jpg",
        description:
          "Enter the electrifying world of Cockfighting Arena, where virtual roosters clash in an ethical battle royale! In this daring reimagining of a classic sport, you'll choose a feathered champion and place your bets on the ultimate victor. Will it be a decisive Meron or Wala? Or will a Time Out leave you on the edge of your seat? Once the bets are locked, brace yourself for the chance to activate the 2x Bonus Feature. Place your bets and let the feathers fly!",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/cockfighting-arena_1440x900_en.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/cockfighting-arena.webp",
        gameType: "CLASSIC",
        RTP: "96.79",
        genre: "CLASSIC",
        volatility: "LOW",
        maxWin: 7,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "26/3/2024",
        assetUrl: "NA",
        status: "published",
        slug: "cock-fighting",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi3q4l2007ol309im0ph4ze",
        name: "FISH PRAWN CRAB",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/fish-prawn-crab-2_500x500_en.jpg",
        description:
          "Rediscover the charm of Fish Prawn Crab, a classic Asian dice game. Distinguished by unique symbols instead of conventional numbers. Players can explore a range of betting options to predict symbol combinations, creating an exciting fusion of tradition and innovation!",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/fish-prawn-crab-2_1440x900.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/fish-prawn-crab-2.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "HIGH",
        maxWin: 150,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "2021",
        assetUrl: "NA",
        status: "published",
        slug: "fish-prawn-crab-2",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi3t0q70000l709ce1swlua",
        name: "TRIPLE CHANCE ",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/triple-chance_500x500_en.jpg",
        description:
          "Experience the excitement of Triple Chance Roulette as players pick numbers from 0 to 999 across 3 spinning wheels. Bet on single or 3-digit numbers for epic payouts and watch your winnings soar as you play the numbers game! ",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/triple-chance_1440x900.jpg",
        gameGifUrl: "NA",
        gameType: "CLASSIC",
        RTP: "97.30",
        genre: "CLASSIC",
        volatility: "HIGH",
        maxWin: 950,
        placeHolderUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/placeholder_screenshot_image/triple-chance_maingame_en.jpg",
        popularRank: 1,
        releaseDate: "2021",
        assetUrl: "NA",
        status: "published",
        slug: "triple-chance",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi3wqh00081l309cffd3r02",
        name: "JACKPOT JUMP",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/jackpot-jump_500x500_en.jpg",
        description:
          "Jackpot Jump delivers heart-racing excitement in every round! In this round-based game of chance, you must carefully select a planned route and make it till the end. Place bets on all six glass tiles in a bid to outlast the competition and claim your portion of the prize pool!",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/jackpot-jump_1440x900_en.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/jackpot-jump.webp",
        gameType: "NEXT-GEN",
        RTP: "97.00",
        genre: "NEXT-GEN",
        volatility: "HIGH",
        maxWin: 200,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "02/07/2024",
        assetUrl: "NA",
        status: "published",
        slug: "jackpot-jump",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi418zl008dl309q910vu3q",
        name: "CLEOPATRA'S TREASURE",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/cleopatras-treasure_500x500_en.jpg",
        description:
          "Unearth the riches of ancient Egypt with Cleopatra's Treasure! Navigate the 4x5 reels where mystery multipliers lie in wait, ready to amplify your winnings. Scatter symbols unlock the gate to free spins, granting you endless opportunities to claim Cleopatra's coveted treasures. Feeling bold? Buy your way into the free spins bonus and let the sands of time rain down riches upon you. Spin the reels and embrace your destiny as the next ruler of the Nile!",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/cleopatras-treasure_1440x900_en.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/cleopatras-treasure.webp",
        gameType: "SLOTS",
        RTP: "97.00",
        genre: "SLOTS",
        volatility: "HIGH",
        maxWin: 5000,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "18/06/2024",
        assetUrl: "NA",
        status: "published",
        slug: "cleopatras-treasure",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi46dg70091l30991cynedx",
        name: "ROOSTER BLITZ",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/rooster-blitz_500x500_en.jpg",
        description:
          "Rooster Blitz is a match-3 slot reel-style game where you aim to eliminate symbols and create winning combinations. The more match-3 combos you achieve, the greater your winnings!",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/rooster-blitz.webp",
        gameType: "SLOTS",
        RTP: "97.00",
        genre: "SLOTS",
        volatility: "HIGH",
        maxWin: 5000,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "18/06/2024",
        assetUrl: "NA",
        status: "published",
        slug: "rooster-blitz",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi4b56r000cl709ef4btv0j",
        name: "PENGUIN PANIC",
        thumbnailUrl:
          "https://publiccdn.kingdomhall729.com/500x500images/KingMidas/penguin-panic_500x500_en.jpg",
        description:
          "Penguin Panic is a social multiplayer game that puts a fun twist on the classic minesweeper-style gameplay. Place your bets on an ice tile and outlive your opponents for a chance to become the ultimate Penguin Ace! As more players join the fray, the competition escalates, with everyone vying for a share of the prize pool. Will you be the last penguin standing?",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/penguin-panic_1440x900_en.jpg",
        gameGifUrl:
          "https://publiccdn.kingdomhall729.com/Gameplay_Shorts/penguin-panic.webp",
        gameType: "NEXT-GEN",
        RTP: "97.00",
        genre: "NEXT-GEN",
        volatility: "MEDIUM",
        maxWin: 200,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "09/07/2024",
        assetUrl: "NA",
        status: "published",
        slug: "penguin-panic",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi2x11s002sl309kkbki7i7",
        name: "MONKEY KING ROULETTE",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/monkey-king-roulette_500x500_en.jpg",
        description:
          "Monkey King Roulette transforms the roulette into an experience inspired by Journey to the West. Select iconic symbols and win by matching their chosen symbol with the winning symbol. Watch exciting fights between iconic characters when bonus rounds are activated!",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/monkey-king-roulette_1440x900.jpg",
        gameGifUrl: "NA",
        gameType: "NEXT-GEN",
        RTP: "97.00",
        genre: "NEXT-GEN",
        volatility: "HIGH",
        maxWin: 44,
        placeHolderUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/placeholder_screenshot_image/monkey-king-roulette_maingame_en.jpg",
        popularRank: 1,
        releaseDate: "26/01/2022",
        assetUrl: "NA",
        status: "published",
        slug: "monkey-king-roulette",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi4ptnx000ul709zx3uo4ud",
        name: "ELITE AVIATOR CLUB",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/elite-aviator-club_500x500_en.jpg",
        description:
          "Elite Aviator Club is a crash game that will take you through the skies! Set your bet limit before the plane takes off into the horizon. The further the plane flies, the higher the multiplier climbs, promising bigger rewards for the fearless. Stay sharp and choose your moment to cash out before the plane vanishes from sight. ",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/elite-aviator-club_1440x900_en.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/elite-aviator-club.webp",
        gameType: "NEXT-GEN",
        RTP: "97.00",
        genre: "NEXT-GEN",
        volatility: "HIGH",
        maxWin: 125,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "18/06/2024",
        assetUrl: "NA",
        status: "published",
        slug: "elite-aviator-club",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi4tahh0016l709ky8k7vlk",
        name: "OLYMPUS GLORY",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/olympus-glory_500x500_en.jpg",
        description:
          "KingMidas presents Olympus Glory, a plinko-style game that transports you to the majestic realm of Olympus, the home of Greek Gods! Release balls to align symbols and lay claim to bountiful rewards. Achieve even more with our special bingo feature, where completing horizontal matches unlocks exclusive rewards. Play now and aim for glory!",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/olympus-glory_1440x900_en.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/olympus-glory.webp",
        gameType: "NEXT-GEN",
        RTP: "96.61",
        genre: "NEXT-GEN",
        volatility: "MEDIUM",
        maxWin: 12,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "18/06/2024",
        assetUrl: "NA",
        status: "published",
        slug: "olympus-glory",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi4tc7e001il709krg071k0",
        name: "JHANDI MUNDA",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/jhandi-munda_500x500_en.jpg",
        description:
          "Experience the thrill of Jhandi Munda, a classic Indian dice game (known as Langur Burja in Nepal) with six-sided dice bearing unique symbols. Bet on your chosen symbol, and if it reigns supreme in rolls, you could win big with the 2x bonus, multiplying your rewards up to 12x!",
        gameBackgroundUrl: "NA",
        gameGifUrl: "NA",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "MEDIUM",
        maxWin: 6,
        placeHolderUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/placeholder_screenshot_image/Jhandi_munda_maingame_en.jpg",
        popularRank: 1,
        releaseDate: "05/01/2021",
        assetUrl: "NA",
        status: "published",
        slug: "jhandi-munda",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi4yor9001tl709jspmbgwa",
        name: "WARRIORS TEMPLE",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/warriors-temple_500x500_en.jpg",
        description:
          "Warriors Temple is a thrilling 6x5 reel slot game featuring the Cascade Feature to amplify your wins! Trigger Scatter payouts and unlock 10 Free Games by matching 4 or more Scatter symbols. With 9 regular symbols and 1 Scatter symbol, the game offers a variety of winning combinations. Explore the Buy Free Game Feature, and Double Chance Feature for even more excitement. During Free Games, watch out for the Special Multiplier symbol, which can land anywhere on the screen to multiply your winnings!",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/warriors-temple_1440x900_en.jpg",
        gameGifUrl: "NA",
        gameType: "SLOTS",
        RTP: "96.18",
        genre: "SLOTS",
        volatility: "HIGH",
        maxWin: 5000,
        placeHolderUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/placeholder_screenshot_image/warriors-temple_maingame_en.jpg",
        popularRank: 1,
        releaseDate: "Coming Soon",
        assetUrl: "NA",
        status: "published",
        slug: "warriors-temple",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi5mitg00aol309dxr7ewmh",
        name: "TONGITS",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/tongits_500x500_en.jpg",
        description:
          "Embark into the exhilarating game of Tongits, a high-stakes card game hailing from the Philippines. Players can test their skills, strategize moves, and seize every opportunity to win! With its rapid pace and competitive edge, Tongits is a must-play for card game enthusiasts. Join the Tongits adventure now!",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/placeholder_screenshot_image/tongits_maingame_en.jpg",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "MEDIUM",
        maxWin: 28,
        placeHolderUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/placeholder_screenshot_image/tongits_maingame_en.jpg",
        popularRank: 1,
        releaseDate: "21/11/2023",
        assetUrl: "NA",
        status: "published",
        slug: "tongits",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi5v6z200bjl30986ygd942",
        name: "PERYA DROP BALL CARD",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/perya-drop-ball-card_500x500_en.jpg",
        description:
          "Perya Drop Ball Card brings the excitement of the Philippines carnival game to your screen with a poker twist! The game features 3 balls and 6 poker card bet options. Bet on which poker card the balls will land on to win. Each round, there's a chance for one of the balls to turn Golden, doubling the payouts of the connected bet option, up to 11x! Can you predict where the balls will land and hit the jackpot? Win big with Perya Drop Ball Card!",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/perya-drop-ball-card_1440x900_en.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/perya-drop-ball-card.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "MEDIUM",
        maxWin: 6,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "Coming Soon",
        assetUrl: "NA",
        status: "draft",
        slug: "perya-drop-ball-card",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi61pvs00bvl30939vbtdnv",
        name: "PERYA ROLETA",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/perya-roleta_500x500_en.jpg",
        description:
          "Perya Roleta captures the lively spirit of a carnival with a twist! The game features an outer colored-numbered wheel and an exciting inner multiplier wheel. Predict which number or color the flapper will stop on to win. Each spin offers a chance to boost your winnings with the inner wheel's reward multiplier, up to a maximum of x6! When bets are locked in, interact by clicking on your chosen numbers and calling out your desired outcome. Will you hit the jackpot with the perfect prediction? Get ready to spin and win big with Perya Roleta!",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/perya-roleta_1440x900_en.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/perya-roleta.webp",
        gameType: "CLASSIC",
        RTP: "96.97",
        genre: "CLASSIC",
        volatility: "LOW",
        maxWin: 4,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "Coming Soon",
        assetUrl: "NA",
        status: "published",
        slug: "perya-roleta",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi6cur900ctl3092letcchk",
        name: "KM POWER BALL",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/km-power-ball_500x500_en.jpg",
        description:
          "KM Power Ball is a game of chance offering 3x5 or 5x5 game modes. Aim to match top patterns or lines on bingo cards to win. Watch as your purchased bingo cards may turn into special gold, diamond, or rainbow bonus cards after the betting round ends.",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/km-power-ball.webp",
        gameType: "CLASSIC",
        RTP: "97.20",
        genre: "CLASSIC",
        volatility: "HIGH",
        maxWin: 1500,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "13/09/2022",
        assetUrl: "NA",
        status: "published",
        slug: "bingo",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi8avvj003njt09frblqa9v",
        name: "SIC BO",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/sicbo_500x500_en.jpg",
        description:
          'Sic Bo, translating to "dice pair," is an ancient Chinese gambling game steeped in tradition. Played with three dice and a table offering diverse betting options, players wager on the combination that will emerge, adding an element of chance to this classic game.',
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/sicbo_1440x900.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/sicbo.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "HIGH",
        maxWin: 100,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "2021",
        assetUrl: "NA",
        status: "published",
        slug: "sicbo",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi6utmz000mjt09ytt8t6b4",
        name: "PERYA 4 BALLS",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/perya-4-balls_500x500_en.jpg",
        description:
          "Perya 4 Balls brings the excitement of a Philippine carnival game to your screen. Players bet on which of the six color options the big ball and the three small balls will land on. Each round, there is a chance for a bonus big ball to drop, maximizing payouts if both big balls land on the same color. Predict the colors and win big in this engaging and interactive game!",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/perya-4-balls_1440x900_en.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/perya-4-balls.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "MEDIUM",
        maxWin: 7,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "Coming Soon",
        assetUrl: "NA",
        status: "published",
        slug: "perya-4-balls",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi6w49d000yjt09rhdqmkdj",
        name: "KM MARBLE KNOCKOUT",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/km-marble-knockout_500x500_en.jpg",
        description:
          "Marble Knockout is a fast-paced elimination race game featuring 4 teams of 16 marbles. Navigate through a challenging obstacle course that can slow you down or eliminate you from the race. Choose your favourite team and predict who will survive and win the thrilling race to the finish line.",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/marble-racing_1440x900.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/km-marble-knockout.webp",
        gameType: "NEXT-GEN",
        RTP: "97.00",
        genre: "NEXT-GEN",
        volatility: "LOW",
        maxWin: 5,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "11/10/2022",
        assetUrl: "NA",
        status: "published",
        slug: "marble-knockout",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi6z65f0000l809ds642na4",
        name: "PERYA DROP BALL COLOR",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/perya-drop-ball-color_500x500_en.jpg",
        description:
          "Inspired by the carnival games in the Phillippines, Perya Drop Ball Color is a funfair-style game that is both easy and fun to play. The round starts with 3 balls being dropped 1 by 1 from a chute to the play area. The balls land on 1 of the 36 grids. and players will receive payout according to the result of the balls. ",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/perya-drop-ball-color_1440x900_en.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/perya-drop-ball-color.webp",
        gameType: "CLASSIC",
        RTP: "97.05",
        genre: "CLASSIC",
        volatility: "MEDIUM",
        maxWin: 7,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "Coming Soon",
        assetUrl: "NA",
        status: "published",
        slug: "perya-drop-ball-color",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi7a33r000cl809et0alt9d",
        name: "LADDER GAME",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/ladder-game_500x500_en.jpg",
        description: "COMING SOON",
        gameBackgroundUrl: "NA",
        gameGifUrl: "NA",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "LOW",
        maxWin: 2,
        placeHolderUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/placeholder_screenshot_image/ladder-game_maingame_en.jpg",
        popularRank: 1,
        releaseDate: "Coming Soon",
        assetUrl: "NA",
        status: "draft",
        slug: "ladder-game",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi7agse000rl809szlo8exi",
        name: "SUGAR BLAST",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/sugar-blast_500x500_en.jpg",
        description:
          "Sugar Blast is a slot reel-style game with a delightful twist. Create winning combos by eliminating candy symbols. Fire up to three cannon bombs onto a 3x3 grid. Match 5 or more identical candies to activate special bombs and smash candies into colorful bits. ",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/sugar-blast_1440x900.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/sugar-blast.webp",
        gameType: "SLOTS",
        RTP: "96.98",
        genre: "SLOTS",
        volatility: "HIGH",
        maxWin: 3000,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "23/12/2022",
        assetUrl: "NA",
        status: "published",
        slug: "sugar-blast",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi7emke001ljt09mhufwjv5",
        name: "TOON CRASH",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/toon-crash_500x500_en.jpg",
        description:
          'Toon Crash is an exciting social multiplayer game where players place bets and decide when to cash out before the rocket explodes. Use the "Cash Out" button to withdraw your bet and winnings, or set up Auto Play for automatic bets and cashouts. Remember, if the rocket explodes before cashing out, your bet is lost. Bet wisely and aim for big multipliers in this intense game of chance!',
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/toon-crash_1440x900_en.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/toon-crash.webp",
        gameType: "NEXT-GEN",
        RTP: "97.00",
        genre: "NEXT-GEN",
        volatility: "HIGH",
        maxWin: 125,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "Coming Soon",
        assetUrl: "NA",
        status: "draft",
        slug: "toon-crash",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi7i0o5001xjt097vt4105p",
        name: "IRON DOME",
        thumbnailUrl:
          "https://publiccdn.kingdomhall729.com/500x500images/KingMidas/iron-dome_500x500_en.jpg",
        description:
          "Iron Dome is an innovative social multiplayer crash game that combines strategy and excitement. In this game, three rockets launch simultaneously, and players must bet on one of the rockets. The multiplier increases as the rockets ascend, and players must cash out before their chosen rocket is destroyed to win. Can you time your exit perfectly to maximize your winnings? Join the action and find out in Iron Dome!",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/iron-dome_1440x900_en.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/iron-dome.webp",
        gameType: "NEXT-GEN",
        RTP: "97.00",
        genre: "NEXT-GEN",
        volatility: "High",
        maxWin: 125,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "Coming Soon",
        assetUrl: "NA",
        status: "draft",
        slug: "iron-dome",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi7inum0029jt09nsd59m6b",
        name: "KM VIRTUAL GREYHOUND RACING",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/km-virtual-greyhound-racing_500x500_en.jpg",
        description:
          "KM Virtual Greyhound Racing is no ordinary race - it's an adrenaline-fueled adventure that offers a simulation of real-life hound racing. Picture six sleek greyhounds tearing down the track, each vying for the lead as you root for your favourite and place your bets. With 20 betting options at your fingertips, you'll have the chance to activate the Lucky Greyhound Bonus, where any bet on the randomly chosen hound could score you 2x to 5x payout! Place your bets and let the race begin!",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/hound-racing_1440x900.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/placeholder_screenshot_image/km-virtual-greyhound-racing_maingame_en.jpg",
        gameType: "CLASSIC",
        RTP: "95.78",
        genre: "CLASSIC",
        volatility: "HIGH",
        maxWin: 320,
        placeHolderUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/placeholder_screenshot_image/km-virtual-greyhound-racing_maingame_en.jpg",
        popularRank: 1,
        releaseDate: "29/11/2022",
        assetUrl: "NA",
        status: "published",
        slug: "hound-racing",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi85kt60030jt09m8lqenru",
        name: "VIETNAMESE FISH PRAWN CRAB",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/viet-fish-prawn-crab_500x500_en.jpg",
        description:
          "Vietnam Fish Prawn Crab offers an enticing Vietnamese twist on the classic Fish Prawn Crab. The dice feature unique symbols instead of numbers, adding a touch of local flavour. With three dice and a versatile betting table, players can wager on their predictions of symbol combinations, adding excitement to tradition.",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/viet-fish-prawn-crab.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "MEDIUM",
        maxWin: 6,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "2021",
        assetUrl: "NA",
        status: "published",
        slug: "viet-fish-prawn-crab",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi88obm003cjt09wd6waghn",
        name: "ANDAR BAHAR",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/andar-bahar_500x500_en.jpg",
        description:
          "Dive into Andar Bahar, a captivating card game hailing from Southern India. The dealer unveils the middle card, igniting the players’ choice between Andar or Bahar. Elevate the excitement further with 9 side wagers, predicting card counts and aim for extraordinary wins! ",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/andar-bahar_1440x900.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/andar-bahar.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "HIGH",
        maxWin: 120,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "17/03/2021",
        assetUrl: "NA",
        status: "published",
        slug: "andar-bahar",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi8gxdq004ajt097uf000pr",
        name: "TAI XIU",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/tai-xiu_500x500_en.jpg",
        description:
          "Tai Xiu, also known as big and small or hi-lo, features three dice and a rich variety of betting options, injecting an element of chance into every wager.",
        gameBackgroundUrl: "NA",
        gameGifUrl: "NA",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "HIGH",
        maxWin: 100,
        placeHolderUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/placeholder_screenshot_image/tai-xiu_maingame_en.jpg",
        popularRank: 1,
        releaseDate: "2021",
        assetUrl: "NA",
        status: "published",
        slug: "tai-xiu",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi8qshv004yjt09fk1xbjst",
        name: "KM VIRTUAL TREADMILL RACING",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/km-virtual-treadmill-racing_500x500_en.jpg",
        description:
          "KM Virtual Treadmill Racing features 8 karts in a thrilling elimination race on an accelerating treadmill. Players may stand a chance to activate the Double Lightning Bonus for bigger rewards! Choose a kart and aim for victory!",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/treadmill-racing_1440x900.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/km-virtual-treadmill-racing.webp",
        gameType: "NEXT-GEN",
        RTP: "97.36",
        genre: "NEXT-GEN",
        volatility: "MEDIUM",
        maxWin: 7.5,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "11/04/2023",
        assetUrl: "NA",
        status: "published",
        slug: "treadmill-racing",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi8xf540000mk09uc48mo4v",
        name: "KM VIRTUAL ANIMAL RACE",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/km-virtual-animal-race_500x500_en.jpg",
        description:
          "Introducing KM Virtual Animal Race, where adorable animals tumble and dart towards the finish line. Place bets on your favourite animal and unlock a chance to trigger a Lucky Animal 2-5x bonus. Experience the thrilling race track, where obstacles challenge the animals on their path to victory!",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/km-virtual-animal-race.webp",
        gameType: "NEXT-GEN",
        RTP: "97.00",
        genre: "NEXT-GEN",
        volatility: "LOW",
        maxWin: 4.25,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "5/9/2023",
        assetUrl: "NA",
        status: "published",
        slug: "animal-racing",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzj7zjek0000l709mlwt8eds",
        name: "BAI CAO",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/bai-cao_500x500_en.jpg",
        description:
          "Bài Cào, a traditional Vietnamese card game, often called the three-card game, offers simplicity and speed in card play. With 2-6 players contending for luck's favour, each receives three cards, striving for the highest score in this purely chance-driven game. Remember, the higher the card rank, the stronger the hand!",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/bai-cao.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "LOW",
        maxWin: 1,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "11/03/2021",
        assetUrl: "NA",
        status: "published",
        slug: "bai-cao",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzj8au0t0000jz092twsbpul",
        name: "THAI FISH PRAWN CRAB",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/thai-fish-prawn-crab_500x500_en.jpg",
        description:
          "Thai Fish Prawn Crab brings a Thai twist to the classic game. Instead of conventional numbers, the dice feature unique symbols to infuse with local flavour. With three dice and a betting table offering various options, players wager on the symbols they predict will appear in exciting combinations.",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/thai-fish-prawn-crab_1440x900.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/thai-fish-prawn-crab.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "MEDIUM",
        maxWin: 5,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "2021",
        assetUrl: "NA",
        status: "published",
        slug: "thai-fish-prawn-crab",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzj8p3on0000l109524dvvns",
        name: "XOC DIA 2",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/xoc-dia-2_500x500_en.jpg",
        description:
          "Xoc Dia 2 introduces an exciting twist to the classic Shake The Plate game. It's an even-odds game featuring four chips, each with red and white sides, positioned beneath a bowl. Give the plate a shake, bet on colours and numbers, and encounter the exhilarating lightning feature, capable of multiplying wins by up to 20x!",
        gameBackgroundUrl: "NA",
        gameGifUrl: "NA",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "HIGH",
        maxWin: 13.5,
        placeHolderUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/placeholder_screenshot_image/xoc-dia-2_maingame_en.jpg",
        popularRank: 1,
        releaseDate: "2021",
        assetUrl: "NA",
        status: "published",
        slug: "xoc-dia-2",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzj9c6wp0000mc09c0bbchtm",
        name: "COIN TOSS",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/coin-toss_500x500_en.jpg",
        description:
          "Get ready for the thrill of Coin Toss where players make guesses and bet on Head or Tail, vying for their shot at Victory. Experience an electrifying lightning bonus, supercharge your winnings and explore the 4-coin version with a higher payout!  ",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/coin-toss_1440x900.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/coin-toss.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "LOW",
        maxWin: 13.5,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "2021",
        assetUrl: "NA",
        status: "published",
        slug: "coin-toss",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzj9ow01000dmc09nb7wqh4t",
        name: "CARDS HI LO",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/cards-hi-lo_500x500_en.jpg",
        description:
          "Cards Hi Lo, a card guessing extravaganza! Armed with a standard deck of 52 cards, players are on a heart-pounding mission: predict whether the next card will rise to greatness or tumble into obscurity compared to the one on the table. Will you push your luck for even greater rewards, or cash out and bask in your triumph?",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/cards-hi-lo.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "HIGH",
        maxWin: 42.68,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "2021",
        assetUrl: "NA",
        status: "published",
        slug: "card-hi-lo",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi8ncro004mjt096oiwm1t3",
        name: "DOTA HI-LO",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/dota-hi-lo_500x500_en.jpg",
        description:
          "Dota Hi-Lo is a unique high or low (hi-lo) dice game derived from our popular Thai Hi-Lo game. Defeated enemies turn into dice rolls, and players win if they bet on the predicted results correctly.",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/dota-hi-lo_1440x900.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/dota-hi-lo.webp",
        gameType: "NEXT-GEN",
        RTP: "96.00",
        genre: "NEXT-GEN",
        volatility: "HIGH",
        maxWin: 100,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "2021",
        assetUrl: "NA",
        status: "published",
        slug: "dota-hi-lo",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzi8ubwh005cjt097du63xn8",
        name: "BONUS DICE",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/bonus-dice_500x500_en.jpg",
        description:
          "Prepare for a dice adventure like never before with Bonus Dice! Watch as 3 standard dice cascade through the Lightning Tower’s twisting maze. Choose from 16 options between 3 and 18. Keep the excitement electrified with bonus symbols that might randomly double winnings when they hit on the players winning bets! ",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/bonus-dice_1440x900.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/bonus-dice.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "HIGH",
        maxWin: 150,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "2021",
        assetUrl: "NA",
        status: "published",
        slug: "bonus-dice",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzj9tlmu000omc09s6fadm7t",
        name: "FRUIT ROULETTE",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/fruit-roulette_500x500_en.jpg",
        description:
          "Fruit Roulette bursts with excitement! Witness the light dancing, stopping on vibrant symbols. Discover bonuses like Multipliers, Sunshine, Caterpillar, and Rainbow for big wins! With 6 fruity symbols, 4 vibrant colors, and endless combinations, pick a winning mix and taste victory!",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/fruit-roulette.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "HIGH",
        maxWin: 7.2,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "11/03/2021",
        assetUrl: "NA",
        status: "published",
        slug: "fruit-roulette",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzj9vr4w0012mc09ibo1qnd2",
        name: "PLINKO",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/plinko_500x500_en.jpg",
        description:
          "Welcome to Plinko, the game of chance where players can bet on three vibrant colours - green, blue, or yellow - or take a chance with the random option. Watch as the coloured ball is released from the top of the triangular board, bouncing and ricocheting off the pegs. Will it hit the jackpot and deliver a massive payout? It's all up to chance!",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/plinko_1440x900.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/plinko.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "HIGH",
        maxWin: 555,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "2021",
        assetUrl: "NA",
        status: "published",
        slug: "plinko",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzj9zk93001emc09s68l3dtp",
        name: "BÀI BỬU",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/bai-buu_500x500_en.jpg",
        description:
          "Bài Bửu, a classic Vietnamese card game, also referred to as the four-card game, employs a standard 52-card deck. Delve into the thrill as players and bankers square off with their 4-card hands, in a battle where fortunes are made and destinies are decided.",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/bai-buu.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "LOW",
        maxWin: 1,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "2021",
        assetUrl: "NA",
        status: "published",
        slug: "bai-buu",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzjal5nm0000lc09hm8qjhco",
        name: "32 CARDS",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/32-cards_500x500_en.jpg",
        description:
          "Get in on the action with 32 Cards, an Andar Bahar-inspired game of chance. Bet on 4 options with cards from 6 to 13, strive for the highest total and win big. Keep an eye for lightning bonuses on the table to boost your payout.   ",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/32-cards.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "MEDIUM",
        maxWin: 11,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "2021",
        assetUrl: "NA",
        status: "published",
        slug: "thirty-two-cards",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzjas0q7000dlc0951njhlv2",
        name: "MINESWEEPER",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/mine-sweeper_500x500_en.jpg",
        description:
          "In Minesweeper, navigate a 5x5 field filled with treasure chests and bombs. Uncover treasure tiles while avoiding explosives. Choose to continue for bigger winnings or cash out after successful guesses. Earn treasure boosts with each opened tile, up to 5 stacks. Increase your winnings with more tiles uncovered!",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/mine-sweeper_1440x900.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/minesweeper.webp",
        gameType: "NEXT-GEN",
        RTP: "96.00",
        genre: "NEXT-GEN",
        volatility: "HIGH",
        maxWin: 2330,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "18/01/2022",
        assetUrl: "NA",
        status: "published",
        slug: "mine-sweeper",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzjazd43000plc09bkwx7lfp",
        name: "TEEN PATTI",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/teen-patti_500x500_en.jpg",
        description:
          "Teen Patti, or Three Cards, is a popular Indian card game similar to Poker. The game is played in groups of 3 to 6 players with a 52-card deck. The objective of the game is to have the best three-hand card and beat the banker's hand. At the start of the game, each player is first dealt three cards facing down, following which, all cards values will then be compared to the banker's in order to determine the winner. The player with the highest hand value and/or ranks wins.",
        gameBackgroundUrl: "NA",
        gameGifUrl: "NA",
        gameType: "CLASSIC",
        RTP: "93.99",
        genre: "CLASSIC",
        volatility: "HIGH",
        maxWin: 1000,
        placeHolderUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/placeholder_screenshot_image/teen-patti_maingame_en.jpg",
        popularRank: 1,
        releaseDate: "15/02/2022",
        assetUrl: "NA",
        status: "published",
        slug: "teen-patti",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzjb5eew0010lc09tf2drbkt",
        name: "HEIST",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/heist_500x500_en.jpg",
        description:
          "Enter Heist, where every move is a game of chance. Advance to the highest floor by guessing the correct windows without triggering the dreaded police window. The choice is yours - continue playing to increase your winnings, or cash out and collect your current rewards after each successful guess, all the way to the top floor. Each opened window also unlocks the chance to earn a treasure boost! Watch your winnings multiply as these boosts stack up (up to 5 stacks).",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/heist_1440x900.jpg",
        gameGifUrl: "NA",
        gameType: "NEXT-GEN",
        RTP: "97.00",
        genre: "NEXT-GEN",
        volatility: "MEDIUM",
        maxWin: 62.31,
        placeHolderUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/placeholder_screenshot_image/heist_maingame_en.jpg",
        popularRank: 1,
        releaseDate: "22/02/2022",
        assetUrl: "NA",
        status: "published",
        slug: "heist",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzjbe4pa001elc09inb35bf5",
        name: "5 CARD POKER",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/5-card-poker_500x500_en.jpg",
        description:
          "In 5 Card Poker, players face off against the banker in a high-stakes game of skill and strategy. Compete with up to 5 players using a 52-card deck to build the best hand and outplay the banker. Place your Ante wager, receive 5 cards, and decide whether to double down, fold, or swap cards to improve your hand.",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/5-card-poker.webp",
        gameType: "CLASSIC",
        RTP: "94.78",
        genre: "CLASSIC",
        volatility: "HIGH",
        maxWin: 100,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "12/04/2022",
        assetUrl: "NA",
        status: "published",
        slug: "five-card-poker",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzjfj2l60000l9096s7q89l9",
        name: "KM VIRTUAL HORSE RACING",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/km-virtual-horse-racing_500x500_en.jpg",
        description:
          "Forget the grandstands! KM Virtual Horse Racing puts you in the saddle of a virtual spectacle. Immerse yourself in the thunderous hoofbeats as 8 majestic steeds and their fearless jockeys vie for glory on the track. Choose your champion, place your bets, and let the race begin! Will your pick blaze past the competition? Or will Lady Luck smile upon you with the coveted Lucky Horse Bonus? Saddle up and join the race!",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/km-virtual-horse-racing.webp",
        gameType: "CLASSIC",
        RTP: "96.60",
        genre: "CLASSIC",
        volatility: "HIGH",
        maxWin: 680,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "26/04/2022",
        assetUrl: "NA",
        status: "published",
        slug: "horse-racing",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzja2705001qmc099r0dcxc2",
        name: "CASH ROCKET",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/cash-rocket_500x500_en.jpg",
        description:
          "Cash Rocket offers a thrilling multiplayer experience where participants predict the distance a rocket will travel. Prior to liftoff, players place their bets and strategically eject before explosion to secure their earnings.",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/cash-rocket_1440x900.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/cash-rocket.webp",
        gameType: "NEXT-GEN",
        RTP: "96.55",
        genre: "NEXT-GEN",
        volatility: "HIGH",
        maxWin: 200,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "14/09/2022",
        assetUrl: "NA",
        status: "published",
        slug: "cash-rocket",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzjg0bd6000el909er7miyw7",
        name: "BOLA TANGKAS",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/bola-tangkas_500x500_en.jpg",
        description:
          "Bola Tangkas, or Indonesian-style poker, is an exciting game using 7 cards to create the highest card combination. Unlike traditional poker, the game is a variation of the five-card draw poker game that involves tossing out 2 other cards. In each game, a player can bet up to four times (4 bets), with each bet receiving one to two cards and a higher payout. A player can only win the game and receive corresponding prizes if they have 5 cards out of the 7 that constitute a poker hand.",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/bola-tangkas.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "HIGH",
        maxWin: 500,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "13/09/2022",
        assetUrl: "NA",
        status: "published",
        slug: "bola-tangkas",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzjg75es000rl909qbelnhud",
        name: "COLOUR GAME",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/colour-game_500x500_en.jpg",
        description:
          "Roll the dice in this vibrant game, where colours determine your fortune. Set in a rustic wooden board with various betting options, three colourful dice land to reveal potential winnings. Bet on the hues on the board's base for excitement, plus a 2x bonus to double your delight if luck is on your side. Winnings could even multiply up to 10 times! Embrace the kaleidoscope of fortunes waiting for you in this charming and colourful game.",
        gameBackgroundUrl: "NA",
        gameGifUrl: "NA",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "MEDIUM",
        maxWin: 6,
        placeHolderUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/placeholder_screenshot_image/colour-game_maingame_en.jpg",
        popularRank: 1,
        releaseDate: "13/09/2022",
        assetUrl: "NA",
        status: "published",
        slug: "color-game",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzjgyan6000dl109yh1sgjpi",
        name: "LUDO",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/ludo_500x500_en.jpg",
        description:
          "Ludo, derived from the Indian game, Pachisi, is a strategic board game for 2-4 players. Roll the dice and set your tokens in motion as you race against opponents to reach the finish line. Can you make smart moves and win at Ludo? ",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/ludo.webp",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "LOW",
        maxWin: 1,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "1/8/2023",
        assetUrl: "NA",
        status: "published",
        slug: "ludo",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzjkgjzi0000jh09wuhqldcz",
        name: "SUGAR BLAST FRENZY",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/sugar-blast-frenzy_500x500_en.jpg",
        description:
          "Get ready for a sugar rush like no other. Sugar Blast is a slot reel-style game with a delightful twist. Eliminate candy symbols to create the most tantalising winning combination. The more combos you create, the sweeter the rewards! Match 5 or more identical candies in a row and be rewarded with a special bomb activation, which you can use to smash candies into colourful bits.",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/sugar-blast-frenzy.webp",
        gameType: "SLOTS",
        RTP: "96.98",
        genre: "SLOTS",
        volatility: "HIGH",
        maxWin: 3000,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "27/5/2024",
        assetUrl: "NA",
        status: "published",
        slug: "sugar-blast-2",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzjkqwfp0000ms0948b6zqst",
        name: "PUSOY",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/pusoy_500x500_en.jpg",
        description:
          "Welcome to Pusoy, the ultimate showcase of skill, strategy, and the art of bluffing. From its roots in the Phillippines, this beloved card game plays up to 4 players with a standard 52-card deck. Organise your cards into 3 sets: The Front with 3 cards, The Middle with 5 cards, and The Back with 5 cards. If you win all hands against all players, that's Pusoy!",
        gameBackgroundUrl: "NA",
        gameGifUrl: "NA",
        gameType: "CLASSIC",
        RTP: "97.00",
        genre: "CLASSIC",
        volatility: "MEDIUM",
        maxWin: 132,
        placeHolderUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/placeholder_screenshot_image/pusoy_maingame_en.jpg",
        popularRank: 1,
        releaseDate: "27/2/2024",
        assetUrl: "NA",
        status: "published",
        slug: "pusoy",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzjkxyra000ejh09cyxovbqo",
        name: "GEMS OF VALHALLA",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/gems-of-valhalla_500x500_en.jpg",
        description:
          "Step into the sacred chambers of Valhalla, where a treasure trove of gems awaits your discovery. Match 4 or more symbols to unlock exciting rewards. Look out for scatter symbols to trigger bonus spins that reveal random gem types. Want to boost your earnings? Buy the free spin feature and increase your chances of winning big. ",
        gameBackgroundUrl: "NA",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/gems-of-valhalla.webp",
        gameType: "SLOTS",
        RTP: "97.00",
        genre: "SLOTS",
        volatility: "HIGH",
        maxWin: 5000,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "23/04/2024",
        assetUrl: "NA",
        status: "published",
        slug: "viking-blast",
      },
    });
    await prisma.game.create({
      data: {
        id: "clzjl63ii000rjh09zsf1gw57",
        name: "GOLD MINE",
        thumbnailUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/500x500images/KingMidas/gold-mine_500x500_en.jpg",
        description:
          "Gold Mine is a 5x3 slot game with 243 win-ways. Played with 9 standard symbols, complemented by 1 Scatter and 1 Wild symbol which substitutes for all others symbol. Every win, you can experience the exhilarating Cascade feature, offering multipliers of up to 1024x. Trigger up to 20 rounds of Free Spins by landing 3 or more Scatter symbols. Aim high as the maximum win reaches an impressive 10,000x of the total bet!",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/gold-mine_1440x900_en.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/placeholder_screenshot_image/gold-mine_maingame_en.jpg",
        gameType: "SLOTS",
        RTP: "96.00",
        genre: "SLOTS",
        volatility: "MEDIUM",
        maxWin: 10000,
        placeHolderUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/placeholder_screenshot_image/gold-mine_maingame_en.jpg",
        popularRank: 1,
        releaseDate: "30/7/2024",
        assetUrl: "NA",
        status: "published",
        slug: "gold-mines",
      },
    });
    await prisma.game.create({
      data: {
        id: "cm0693uvj0024l503sugpyy6u",
        name: "INTERSTELLAR RUN",
        thumbnailUrl:
          "https://publiccdn.kingdomhall729.com/500x500images/KingMidas/interstellar-run_500x500_en.jpg",
        description:
          "Join the space race in Interstellar Run, a high-speed multiplayer game that launches three rockets into the cosmos, challenging you to predict how far they will fly before crashing. As soon as the round kicks off, the multiplier scale begins its upward climb. Be sure to cash out before the rockets explode to secure your winnings!",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/interstellar-run_1440x900_en.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/interstellar-run.webp",
        gameType: "NEXT-GEN",
        RTP: "97.00",
        genre: "NEXT-GEN",
        volatility: "HIGH",
        maxWin: 125,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "18/06/2024",
        assetUrl:
          "https://publiccdn.kingdomhall729.com/Zip_masterGames/KingMidas/interstellar-run_assets.zip",
        status: "published",
        slug: "interstellar-run",
      },
    });
    await prisma.game.create({
      data: {
        id: "cm0epsimc000bl903oss6sz9s",
        name: "VIDEO POKER",
        thumbnailUrl:
          "https://publiccdn.kingdomhall729.com/500x500images/KingMidas/video-poker_500x500_en.jpg",
        description:
          "Experience the thrill of Video Poker, blending Five-card draw strategy with multi-hand play. Strategically choose your cards to swap and aim for the highest hand. Play with three or five hands simultaneously to boost your chances of winning big. Video Poker offers a captivating and rewarding gaming adventure, perfect for both poker enthusiasts and newcomers!",
        gameBackgroundUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/1440x900images/video-poker_1440x900_en.jpg",
        gameGifUrl:
          "https://kingmakergames-public.s3.ap-southeast-1.amazonaws.com/Gameplay_Shorts/video-poker.webp",
        gameType: "CLASSIC",
        RTP: "96.80",
        genre: "CLASSIC",
        volatility: "MEDIUM",
        maxWin: 250,
        placeHolderUrl: "NA",
        popularRank: 1,
        releaseDate: "09/07/2024",
        assetUrl: "NA",
        status: "published",
        slug: "video-poker",
      },
    });

    // Seed Tags
    await prisma.tag.create({
      data: {
        id: "clzi4tc7e001pl709aszwhqwh",
        name: "table",
        gameId: "clzi4tc7e001il709krg071k0",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi4tc7e001ql709uu5x55fu",
        name: "dice",
        gameId: "clzi4tc7e001il709krg071k0",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi5tte800bfl309fedfw5ln",
        name: "table",
        gameId: "clzi5mitg00aol309dxr7ewmh",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi5tte800bgl3097l0y9biw",
        name: "card",
        gameId: "clzi5mitg00aol309dxr7ewmh",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi6w49d0015jt09rkelafa0",
        name: "virtual",
        gameId: "clzi6w49d000yjt09rhdqmkdj",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi6w49d0016jt09bz7pnbkx",
        name: "sports",
        gameId: "clzi6w49d000yjt09rhdqmkdj",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi7agse000zl809779okec5",
        name: "match-3",
        gameId: "clzi7agse000rl809szlo8exi",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi7agse0010l8097yrbvapq",
        name: "cascade",
        gameId: "clzi7agse000rl809szlo8exi",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi7inum002ijt09qp0aqbsp",
        name: "virtual",
        gameId: "clzi7inum0029jt09nsd59m6b",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi2o2eo0017l309wdxlwvmr",
        name: "table",
        gameId: "clzi2o2eo000zl309mwz2yq8t",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi2o2eo0018l309x2p4mfpo",
        name: "others",
        gameId: "clzi2o2eo000zl309mwz2yq8t",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi2ow6g001jl3095uwpm1bx",
        name: "lottery",
        gameId: "clzi2lt5d000el309yjvcccck",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi7inum002jjt09i287f1n0",
        name: "sports",
        gameId: "clzi7inum0029jt09nsd59m6b",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi7kyfv002wjt0971059lse",
        name: "casual",
        gameId: "clzi6cur900ctl3092letcchk",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi85kt60038jt09qnsxnmry",
        name: "TABLE",
        gameId: "clzi85kt60030jt09m8lqenru",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi85kt60039jt097je7hs82",
        name: "dice",
        gameId: "clzi85kt60030jt09m8lqenru",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi2zje0003el309oama33vv",
        name: "table",
        gameId: "clzi2zje00036l309wl7hsivh",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi2zje0003fl309x36761c9",
        name: "dice",
        gameId: "clzi2zje00036l309wl7hsivh",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi88obm003jjt09su6w4qkt",
        name: "TABLE",
        gameId: "clzi88obm003cjt09wd6waghn",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi88obm003kjt09c5ct0d35",
        name: "card",
        gameId: "clzi88obm003cjt09wd6waghn",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi3q4l2007wl309yaayhwa7",
        name: "table",
        gameId: "clzi3q4l2007ol309im0ph4ze",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi3q4l2007xl309o9tmumhw",
        name: "dice",
        gameId: "clzi3q4l2007ol309im0ph4ze",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi3t0q70008l709noowrbk4",
        name: "table",
        gameId: "clzi3t0q70000l709ce1swlua",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi3t0q70009l709kvz87lgn",
        name: "roulette",
        gameId: "clzi3t0q70000l709ce1swlua",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi418zl008ll309pqs5lhru",
        name: "match-3",
        gameId: "clzi418zl008dl309q910vu3q",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi418zl008ml3091p1bxs8w",
        name: "cascade",
        gameId: "clzi418zl008dl309q910vu3q",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi46dg70099l3092h5yjnou",
        name: "match-3",
        gameId: "clzi46dg70091l30991cynedx",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi46dg7009al309w57nikmt",
        name: "cascade",
        gameId: "clzi46dg70091l30991cynedx",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi8avvk003vjt09nkkb46em",
        name: "TABLE",
        gameId: "clzi8avvj003njt09frblqa9v",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi8avvk003wjt09yu4z3lij",
        name: "DICE",
        gameId: "clzi8avvj003njt09frblqa9v",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi8gxdq004ijt0904p4rzow",
        name: "TABLE",
        gameId: "clzi8gxdq004ajt097uf000pr",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzi8gxdq004jjt091cd7kwk5",
        name: "DICE",
        gameId: "clzi8gxdq004ajt097uf000pr",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzj8au0t0008jz09l4840k99",
        name: "TABLE",
        gameId: "clzj8au0t0000jz092twsbpul",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzj8au0t0009jz09rozejanv",
        name: "DICE",
        gameId: "clzj8au0t0000jz092twsbpul",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzj9c6wp0008mc09ikb5wv21",
        name: "CASUAL",
        gameId: "clzj9c6wp0000mc09c0bbchtm",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzj9c6wp0009mc095llaqu4l",
        name: "OTHERS",
        gameId: "clzj9c6wp0000mc09c0bbchtm",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzj9ow01000jmc09141samqu",
        name: "TABLE",
        gameId: "clzj9ow01000dmc09nb7wqh4t",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzj9ow01000kmc09pusmgc26",
        name: "CARD",
        gameId: "clzj9ow01000dmc09nb7wqh4t",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzj9tlmu000xmc09b0zuyrcj",
        name: "CASUAL",
        gameId: "clzj9tlmu000omc09s6fadm7t",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzj9tlmu000ymc09if7wfz19",
        name: "ROULETTE",
        gameId: "clzj9tlmu000omc09s6fadm7t",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzj9vr4w0019mc09n2mlnf0y",
        name: "CASUAL",
        gameId: "clzj9vr4w0012mc09ibo1qnd2",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzj9vr4w001amc09vvj5xyt7",
        name: "PLINKO",
        gameId: "clzj9vr4w0012mc09ibo1qnd2",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzj9zk94001lmc09uw6fw8im",
        name: "TABLE",
        gameId: "clzj9zk93001emc09s68l3dtp",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzj9zk94001mmc09m1zogulb",
        name: "CARD",
        gameId: "clzj9zk93001emc09s68l3dtp",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzjas0q7000klc09odyikbom",
        name: "CASUAL",
        gameId: "clzjas0q7000dlc0951njhlv2",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzjas0q7000llc099qyc74ge",
        name: "MINES",
        gameId: "clzjas0q7000dlc0951njhlv2",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzjazd44000wlc09up3ffhzg",
        name: "TABLE",
        gameId: "clzjazd43000plc09bkwx7lfp",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzjazd44000xlc09okrjm7x0",
        name: "CARD",
        gameId: "clzjazd43000plc09bkwx7lfp",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzjb5eew0019lc0931149n72",
        name: "CASUAL",
        gameId: "clzjb5eew0010lc09tf2drbkt",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzjb5eew001alc09lzlk3hp0",
        name: "MINES",
        gameId: "clzjb5eew0010lc09tf2drbkt",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzjbe4pa001llc09s66hdnw1",
        name: "TABLE",
        gameId: "clzjbe4pa001elc09inb35bf5",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzjbe4pa001mlc09hxlaq1py",
        name: "CARD",
        gameId: "clzjbe4pa001elc09inb35bf5",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzjg0bd6000ml909bdduhbyx",
        name: "TABLE",
        gameId: "clzjg0bd6000el909er7miyw7",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzjg0bd6000nl909wq6rw4ah",
        name: "CARD",
        gameId: "clzjg0bd6000el909er7miyw7",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzjg75et000zl909rhha0cal",
        name: "CASUAL",
        gameId: "clzjg75es000rl909qbelnhud",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzjg75et0010l9099s8tsqis",
        name: "DICE",
        gameId: "clzjg75es000rl909qbelnhud",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzjglj520008l109lssyof4f",
        name: "VIRTUAL",
        gameId: "clzjglj520000l109djgmfuf2",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzjglj520009l1096e27dvtc",
        name: "OTHERS",
        gameId: "clzjglj520000l109djgmfuf2",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzjgyan7000kl109a8lbzm18",
        name: "TABLE",
        gameId: "clzjgyan6000dl109yh1sgjpi",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzjgyan7000ll1090unhwp62",
        name: "DICE",
        gameId: "clzjgyan6000dl109yh1sgjpi",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzjkqwfp0007ms09kgdc3sv7",
        name: "TABLE",
        gameId: "clzjkqwfp0000ms0948b6zqst",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzjkqwfp0008ms09ggorczai",
        name: "CARD",
        gameId: "clzjkqwfp0000ms0948b6zqst",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzjkxyra000mjh099oqgr2o0",
        name: "MATCH-3",
        gameId: "clzjkxyra000ejh09cyxovbqo",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzjkxyra000njh09gopa1a9w",
        name: "CASCADE",
        gameId: "clzjkxyra000ejh09cyxovbqo",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzl20m0n000lk009bn33j1by",
        name: "virtual",
        gameId: "clzi340m8003xl3099ec5vv61",
      },
    });
    await prisma.tag.create({
      data: {
        id: "clzl20m0n000mk009ajz65tfc",
        name: "sports",
        gameId: "clzi340m8003xl3099ec5vv61",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm06f9nzn0008mj03kgh7vhmi",
        name: "VIRTUAL",
        gameId: "clzjfj2l60000l9096s7q89l9",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm06f9nzn0009mj03ydjgb6yo",
        name: "SPORTS",
        gameId: "clzjfj2l60000l9096s7q89l9",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm06fbf0z000mmj035ytcxog6",
        name: "VIRTUAL",
        gameId: "clzi8xf540000mk09uc48mo4v",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm06fbf0z000nmj03ygwks94r",
        name: "SPORTS",
        gameId: "clzi8xf540000mk09uc48mo4v",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm06fd2cs0017mj03z3j1b2lr",
        name: "VIRTUAL",
        gameId: "clzi8qshv004yjt09fk1xbjst",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm06fd2cs0018mj032t2v63qb",
        name: "SPORTS",
        gameId: "clzi8qshv004yjt09fk1xbjst",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm06fdgeg001rmj03xqqb2gyo",
        name: "Casual",
        gameId: "clzi3wqh00081l309cffd3r02",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm06fdgeg001smj034hl53ks8",
        name: "Mines",
        gameId: "clzi3wqh00081l309cffd3r02",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm06fdpm4002bmj033km3z8ga",
        name: "casual",
        gameId: "clzi4b56r000cl709ef4btv0j",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm06fdpm4002cmj03k3hdf8qf",
        name: "mines",
        gameId: "clzi4b56r000cl709ef4btv0j",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm06fdygp002vmj03kky7adqp",
        name: "Casual",
        gameId: "cm0693uvj0024l503sugpyy6u",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm06fdygp002wmj03gk45fxnm",
        name: "Crash",
        gameId: "cm0693uvj0024l503sugpyy6u",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm06fe7jk003fmj03681f05jb",
        name: "Casual",
        gameId: "clzi4ptnx000ul709zx3uo4ud",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm06fe7jk003gmj03gqgirpgb",
        name: "Crash",
        gameId: "clzi4ptnx000ul709zx3uo4ud",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm06fegti003zmj03ekkwb744",
        name: "Casual",
        gameId: "clzi4tahh0016l709ky8k7vlk",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm06fegti0040mj03h2so5ynb",
        name: "Plinko",
        gameId: "clzi4tahh0016l709ky8k7vlk",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm06fenoh004jmj03xqj6q2eq",
        name: "Casual",
        gameId: "clzi7emke001ljt09mhufwjv5",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm06fenoh004kmj03lxqoixrc",
        name: "Crash",
        gameId: "clzi7emke001ljt09mhufwjv5",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm06fewaf0053mj033qz2wo8f",
        name: "Casual",
        gameId: "clzi7i0o5001xjt097vt4105p",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm06fewaf0054mj03q3qutyri",
        name: "Crash",
        gameId: "clzi7i0o5001xjt097vt4105p",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0c26pol000yl903zfuammk7",
        name: "Casual",
        gameId: "clzi6z65f0000l809ds642na4",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0c26pol000zl90377fvqe6t",
        name: "Lottery",
        gameId: "clzi6z65f0000l809ds642na4",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0c277e8001al903z72kyygr",
        name: "Casual",
        gameId: "clzi61pvs00bvl30939vbtdnv",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0c277e8001bl9031nam0lju",
        name: "Roulette",
        gameId: "clzi61pvs00bvl30939vbtdnv",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0c27ss30008jx03lqghowph",
        name: "Casual",
        gameId: "clzi6utmz000mjt09ytt8t6b4",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0c27ss30009jx032qjyzhsp",
        name: "Lottery",
        gameId: "clzi6utmz000mjt09ytt8t6b4",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0c29l8j001ml903z4uockoi",
        name: "Casual",
        gameId: "clzi5v6z200bjl30986ygd942",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0c29l8j001nl903tee6maeb",
        name: "Lottery",
        gameId: "clzi5v6z200bjl30986ygd942",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0dhtuz60008lb03ydx1ugeu",
        name: "MATCH-3",
        gameId: "clzjkgjzi0000jh09wuhqldcz",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0dhtuz60009lb03qtdwj50g",
        name: "CASCADE",
        gameId: "clzjkgjzi0000jh09wuhqldcz",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0eovfwa0007mn030e5t85ih",
        name: "TABLE",
        gameId: "clzj7zjek0000l709mlwt8eds",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0eovfwa0008mn03u00ms789",
        name: "CARD",
        gameId: "clzj7zjek0000l709mlwt8eds",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0epi7bk0007l903zuupmhhk",
        name: "TABLE",
        gameId: "clzj8p3on0000l109524dvvns",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0epi7bk0008l903gkchnwj2",
        name: "OTHERS",
        gameId: "clzj8p3on0000l109524dvvns",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0g7vnh70005l803iv8ckd3t",
        name: "virtual",
        gameId: "cm0epsimc000bl903oss6sz9s",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0g7vnh70006l803sh3ujk5q",
        name: "card",
        gameId: "cm0epsimc000bl903oss6sz9s",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0g7xt1w001el803c995z9ix",
        name: "table",
        gameId: "clzi2brts0000l309ww62ry9m",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0g7xt1w001fl803pfz10atq",
        name: "roulette",
        gameId: "clzi2brts0000l309ww62ry9m",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0gasddm0007l903pdfreylf",
        name: "table",
        gameId: "clzhvdyxm0000l809xdwa343s",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0gasddm0008l903srkowt32",
        name: "card",
        gameId: "clzhvdyxm0000l809xdwa343s",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0gd5snd0009k4033um29e4u",
        name: "match-3",
        gameId: "clzi4yor9001tl709jspmbgwa",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0gd5snd000ak4038n00yjxi",
        name: "cascade",
        gameId: "clzi4yor9001tl709jspmbgwa",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0ge5asd000rjo03wvtnqfcg",
        name: "REEL-SLOT",
        gameId: "clzjl63ii000rjh09zsf1gw57",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0ge5asd000sjo03bin1230k",
        name: "WINWAYS",
        gameId: "clzjl63ii000rjh09zsf1gw57",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0kivy50000mptkw2o37mkit",
        name: "table",
        gameId: "clzi2u1pz0022l3099889lr8y",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0kivy50000nptkwggp7nud7",
        name: "dice",
        gameId: "clzi2u1pz0022l3099889lr8y",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0m1y3yk0009ml0365qv6l9e",
        name: "Casual",
        gameId: "clzi7a33r000cl809et0alt9d",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0m1y3yk000aml03025rlg9z",
        name: "Others",
        gameId: "clzi7a33r000cl809et0alt9d",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0m4gqwo000vptj4n3q5kqwt",
        name: "TABLE",
        gameId: "clzjal5nm0000lc09hm8qjhco",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0m4gqwo000wptj4fy6arj1d",
        name: "CARD",
        gameId: "clzjal5nm0000lc09hm8qjhco",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0m5a2se0017ptj47bhen8us",
        name: "table",
        gameId: "clzi3l75g007bl309owee93o7",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0m5a2se0018ptj4ezizif5z",
        name: "card",
        gameId: "clzi3l75g007bl309owee93o7",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0m6x8lt000bptmktmmas44t",
        name: "",
        gameId: "clz6f9mr80004ptagxa9419n1",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0m7fpdd000nptmkk4cugyum",
        name: "reel-slot",
        gameId: "clzi2tyl1001nl309j3xn65ee",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0m7fpde000optmklzmzgrn8",
        name: "paylines",
        gameId: "clzi2tyl1001nl309j3xn65ee",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0na90q80006l703sdqcegdh",
        name: "table",
        gameId: "clzi41rjd008pl30952zdf3hp",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0na90q80007l703dzg5ohcp",
        name: "card",
        gameId: "clzi41rjd008pl30952zdf3hp",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0naafp4000gl7035i2xopl1",
        name: "table",
        gameId: "clzi4aoeg009dl309jmyhzp89",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0naafp4000hl703ode3861t",
        name: "card",
        gameId: "clzi4aoeg009dl309jmyhzp89",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0nb6nfk000jjx039k9k2ay1",
        name: "table",
        gameId: "clzi4jume00a0l309dk4mjmo8",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0nb6nfk000kjx033l79arzo",
        name: "dice",
        gameId: "clzi4jume00a0l309dk4mjmo8",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0nb8at30006jz036yip7v5c",
        name: "OTHERS",
        gameId: "clzi8fnyi0040jt091cjo8mmr",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0nb9hqx000fjz03okmgkn0s",
        name: "TABLE",
        gameId: "clzi8ncro004mjt096oiwm1t3",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0nb9hqx000gjz03clw7cgn6",
        name: "DICE",
        gameId: "clzi8ncro004mjt096oiwm1t3",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0nbfd2n000rjz03mfspn2y2",
        name: "CASUAL",
        gameId: "clzi8ubwh005cjt097du63xn8",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0nbfd2n000sjz03hrhercyt",
        name: "DICE",
        gameId: "clzi8ubwh005cjt097du63xn8",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0nbodo4000wjx03odbjr4sk",
        name: "CASUAL",
        gameId: "clzja2705001qmc099r0dcxc2",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0nbodo4000xjx03kl777x2b",
        name: "CRASH",
        gameId: "clzja2705001qmc099r0dcxc2",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0nbqmnz0008lb038wlbma3s",
        name: "casual",
        gameId: "clzi2x11s002sl309kkbki7i7",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0nbqmnz0009lb03jnaeyxo2",
        name: "roulette",
        gameId: "clzi2x11s002sl309kkbki7i7",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0nbxi8h000klb03smizoc3a",
        name: "table",
        gameId: "clzhu8loo0000l509pxo5tn0f",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0nbxi8h000llb03a479ndfn",
        name: "roulette",
        gameId: "clzhu8loo0000l509pxo5tn0f",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0nc4uic000kmd03vm0tkhfy",
        name: "table",
        gameId: "clzi1nawh0000kz094cc5xgan",
      },
    });
    await prisma.tag.create({
      data: {
        id: "cm0nc4uic000lmd03j5mra14u",
        name: "card",
        gameId: "clzi1nawh0000kz094cc5xgan",
      },
    });

    // Seed LanguageInfos
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbxi8h000dlb03qamguvps",
        gameId: "clzhu8loo0000l509pxo5tn0f",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/poker-roulette?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbxi8h000elb03hmj12q3h",
        gameId: "clzhu8loo0000l509pxo5tn0f",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/poker-roulette?lang=cn&currency=usd&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbxi8h000flb03mu4rt19z",
        gameId: "clzhu8loo0000l509pxo5tn0f",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/poker-roulette?lang=vn&currency=usd&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi6w49d0010jt09basm4gpq",
        gameId: "clzi6w49d000yjt09rhdqmkdj",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/marble-racing?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi2zje00038l309klj85d1j",
        gameId: "clzi2zje00036l309wl7hsivh",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/belangkai-2?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi418zl008fl3092jqwcpwx",
        gameId: "clzi418zl008dl309q910vu3q",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cleopatras-treasure?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi46dg70093l309xgr12aen",
        gameId: "clzi46dg70091l30991cynedx",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/rooster-blitz?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fbf0z000fmj03k53cauy5",
        gameId: "clzi8xf540000mk09uc48mo4v",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/animal-racing?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fd2cs0010mj03ytbe0tn2",
        gameId: "clzi8qshv004yjt09fk1xbjst",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/treadmill-racing?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7agse000tl809zp2wmk2p",
        gameId: "clzi7agse000rl809szlo8exi",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/sugar-blast?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbxi8h000glb03ur9uf1rk",
        gameId: "clzhu8loo0000l509pxo5tn0f",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/poker-roulette?lang=th&currency=usd&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbxi8h000hlb034kcco9ed",
        gameId: "clzhu8loo0000l509pxo5tn0f",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/poker-roulette?lang=id&currency=usd&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fdgeg001lmj0318b8ob0b",
        gameId: "clzi3wqh00081l309cffd3r02",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/jackpot-jump?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbxi8h000ilb0367toxxij",
        gameId: "clzhu8loo0000l509pxo5tn0f",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/poker-roulette?lang=kr&currency=usd&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c26pol000rl903zq718o1e",
        gameId: "clzi6z65f0000l809ds642na4",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-drop-ball-color?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fdpm40025mj03jngwoww7",
        gameId: "clzi4b56r000cl709ef4btv0j",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/penguin-panic?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbxi8h000jlb03ew8q1eqk",
        gameId: "clzhu8loo0000l509pxo5tn0f",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/poker-roulette?lang=my&currency=usd&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fdygp002pmj03zu0um9c7",
        gameId: "cm0693uvj0024l503sugpyy6u",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/interstellar-run?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi2zje00037l309qym1ottl",
        gameId: "clzi2zje00036l309wl7hsivh",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/belangkai-2?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi2zje00039l3098xlpwjtj",
        gameId: "clzi2zje00036l309wl7hsivh",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/belangkai-2?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi2zje0003al30958hp295h",
        gameId: "clzi2zje00036l309wl7hsivh",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/belangkai-2?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi2zje0003bl309scxdyney",
        gameId: "clzi2zje00036l309wl7hsivh",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/belangkai-2?currency=USD&test=1&lang=ID",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi2zje0003cl309ub25ym02",
        gameId: "clzi2zje00036l309wl7hsivh",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/belangkai-2?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi2zje0003dl309e7f546m1",
        gameId: "clzi2zje00036l309wl7hsivh",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/belangkai-2?currency=USD&test=1&lang=my",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0kivy50000fptkwtlk319ev",
        gameId: "clzi2u1pz0022l3099889lr8y",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/thai-hi-lo-2?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0kivy50000gptkwuqlbfedt",
        gameId: "clzi2u1pz0022l3099889lr8y",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/thai-hi-lo-2?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0kivy50000hptkw7qe88eio",
        gameId: "clzi2u1pz0022l3099889lr8y",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/thai-hi-lo-2?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0kivy50000iptkw2kpw8s3y",
        gameId: "clzi2u1pz0022l3099889lr8y",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/thai-hi-lo-2?currency=USD&test=1&lang=ID",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0kivy50000jptkwcnyhwekj",
        gameId: "clzi2u1pz0022l3099889lr8y",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/thai-hi-lo-2?currency=USD&test=1&lang=KR",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0kivy50000kptkwv83uwhoq",
        gameId: "clzi2u1pz0022l3099889lr8y",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/thai-hi-lo-2?currency=USD&test=1&lang=MY",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0kivy50000lptkwzcueeg9q",
        gameId: "clzi2u1pz0022l3099889lr8y",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/thai-hi-lo-2?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m1y3yk0000ml03n8x7naxy",
        gameId: "clzi7a33r000cl809et0alt9d",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink: "",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m1y3yk0001ml036ojvdb98",
        gameId: "clzi7a33r000cl809et0alt9d",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink: "",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m1y3yk0002ml0320dnlesb",
        gameId: "clzi7a33r000cl809et0alt9d",
        language: "ENGLISH",
        trailerLink: "",
        demoLink: "",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi6w49d000zjt09q0hah121",
        gameId: "clzi6w49d000yjt09rhdqmkdj",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/marble-racing?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi6w49d0011jt09ssnvmgaf",
        gameId: "clzi6w49d000yjt09rhdqmkdj",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/marble-racing?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m1y3yk0003ml031ngytlka",
        gameId: "clzi7a33r000cl809et0alt9d",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink: "",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m1y3yk0004ml03i8ukhxe9",
        gameId: "clzi7a33r000cl809et0alt9d",
        language: "THAI",
        trailerLink: "",
        demoLink: "",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m1y3yk0005ml038ispllgk",
        gameId: "clzi7a33r000cl809et0alt9d",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink: "",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m1y3yk0006ml03fj0qjn6a",
        gameId: "clzi7a33r000cl809et0alt9d",
        language: "KOREAN",
        trailerLink: "",
        demoLink: "",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m1y3yk0007ml03pld69vb0",
        gameId: "clzi7a33r000cl809et0alt9d",
        language: "BURMESE",
        trailerLink: "",
        demoLink: "",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m1y3yk0008ml036m900oml",
        gameId: "clzi7a33r000cl809et0alt9d",
        language: "SPANISH",
        trailerLink: "",
        demoLink: "",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06f9nzn0001mj03nchfg4lk",
        gameId: "clzjfj2l60000l9096s7q89l9",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/horse-racing?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi2ow6g001el309z331w2my",
        gameId: "clzi2lt5d000el309yjvcccck",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/max-keno?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi2o2eo0011l309xuqi14xn",
        gameId: "clzi2o2eo000zl309mwz2yq8t",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/fan-tan-3?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nc4uic000dmd03ks5ir82y",
        gameId: "clzi1nawh0000kz094cc5xgan",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/baccarat?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nc4uic000emd03rt6k21vn",
        gameId: "clzi1nawh0000kz094cc5xgan",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/baccarat?lang=cn&currency=usd&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nc4uic000fmd03il7imyy9",
        gameId: "clzi1nawh0000kz094cc5xgan",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/baccarat?lang=vn&currency=usd&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nc4uic000gmd03j22nrp55",
        gameId: "clzi1nawh0000kz094cc5xgan",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/baccarat?lang=th&currency=usd&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nc4uic000hmd03bg2b7tbt",
        gameId: "clzi1nawh0000kz094cc5xgan",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/baccarat?lang=id&currency=usd&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nc4uic000imd03z47ggiu0",
        gameId: "clzi1nawh0000kz094cc5xgan",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/baccarat?lang=kr&currency=usd&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nc4uic000jmd0356ppqrg2",
        gameId: "clzi1nawh0000kz094cc5xgan",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/baccarat?lang=ptbr&currency=usd&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbqmnz0000lb03gd2dumf9",
        gameId: "clzi2x11s002sl309kkbki7i7",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/monkey-king-roulette?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbqmnz0001lb03m2dcbebp",
        gameId: "clzi2x11s002sl309kkbki7i7",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/monkey-king-roulette?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbqmnz0002lb03hiembkir",
        gameId: "clzi2x11s002sl309kkbki7i7",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/monkey-king-roulette?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbqmnz0003lb03gl88ujk4",
        gameId: "clzi2x11s002sl309kkbki7i7",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/monkey-king-roulette?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbqmnz0004lb03qdw8cpaw",
        gameId: "clzi2x11s002sl309kkbki7i7",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/monkey-king-roulette?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbqmnz0005lb03aoj1dd2r",
        gameId: "clzi2x11s002sl309kkbki7i7",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/monkey-king-roulette?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbqmnz0006lb03kow2ghq1",
        gameId: "clzi2x11s002sl309kkbki7i7",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/monkey-king-roulette?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbqmnz0007lb03ketr23uk",
        gameId: "clzi2x11s002sl309kkbki7i7",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/monkey-king-roulette?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi6w49d0012jt09ivdreo69",
        gameId: "clzi6w49d000yjt09rhdqmkdj",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/marble-racing?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi6w49d0013jt09f8i254xs",
        gameId: "clzi6w49d000yjt09rhdqmkdj",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/marble-racing?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi6w49d0014jt09kc43zqvr",
        gameId: "clzi6w49d000yjt09rhdqmkdj",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/marble-racing?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi2o2eo0010l309p4utup04",
        gameId: "clzi2o2eo000zl309mwz2yq8t",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/fan-tan-3?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi2o2eo0012l309aw7sb1ir",
        gameId: "clzi2o2eo000zl309mwz2yq8t",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/fan-tan-3?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi2o2eo0013l30988iwryjc",
        gameId: "clzi2o2eo000zl309mwz2yq8t",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/fan-tan-3?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi2o2eo0014l3093dcw0054",
        gameId: "clzi2o2eo000zl309mwz2yq8t",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/fan-tan-3?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi2o2eo0015l30919eta2ig",
        gameId: "clzi2o2eo000zl309mwz2yq8t",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/fan-tan-3?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi2o2eo0016l309oucklja5",
        gameId: "clzi2o2eo000zl309mwz2yq8t",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/fan-tan-3?currency=USD&test=1&lang=my",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi2ow6g001dl3099wdyxt6y",
        gameId: "clzi2lt5d000el309yjvcccck",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/max-keno?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi2ow6g001fl309biybg8dd",
        gameId: "clzi2lt5d000el309yjvcccck",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/max-keno?currency=USD&test=1&lang=VN",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi2ow6g001gl309pr40g9jo",
        gameId: "clzi2lt5d000el309yjvcccck",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/max-keno?currency=USD&test=1&lang=THAI",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi2ow6g001hl30954zzp0p6",
        gameId: "clzi2lt5d000el309yjvcccck",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/max-keno?currency=USD&test=1&lang=ID",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi2ow6g001il3099ec4bwy4",
        gameId: "clzi2lt5d000el309yjvcccck",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/max-keno?currency=USD&test=1&lang=KR",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi3q4l2007ql309v8s1kfst",
        gameId: "clzi3q4l2007ol309im0ph4ze",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/fish-prawn-crab-2?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi3t0q70002l709vevv9lx8",
        gameId: "clzi3t0q70000l709ce1swlua",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/triple-chance?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0g7vnh70001l803g19x0u9f",
        gameId: "cm0epsimc000bl903oss6sz9s",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/video-poker?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0g7vnh70000l803zhhqayvj",
        gameId: "cm0epsimc000bl903oss6sz9s",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/video-poker?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0g7vnh70002l803nrmcmu2p",
        gameId: "cm0epsimc000bl903oss6sz9s",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/video-poker?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0g7vnh70003l8039tix01hl",
        gameId: "cm0epsimc000bl903oss6sz9s",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/video-poker?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0g7vnh70004l803cbcxt9ph",
        gameId: "cm0epsimc000bl903oss6sz9s",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/video-poker?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi3q4l2007pl309mo7qco5x",
        gameId: "clzi3q4l2007ol309im0ph4ze",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/fish-prawn-crab-2?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi3q4l2007rl309z68xmfbg",
        gameId: "clzi3q4l2007ol309im0ph4ze",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/fish-prawn-crab-2?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi3q4l2007sl309svrz9gyj",
        gameId: "clzi3q4l2007ol309im0ph4ze",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/fish-prawn-crab-2?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi3q4l2007tl3096xcgc3lj",
        gameId: "clzi3q4l2007ol309im0ph4ze",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/fish-prawn-crab-2?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi3q4l2007ul309kbltjhru",
        gameId: "clzi3q4l2007ol309im0ph4ze",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/fish-prawn-crab-2?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi3q4l2007vl309ze4yaary",
        gameId: "clzi3q4l2007ol309im0ph4ze",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/fish-prawn-crab-2?currency=USD&test=1&lang=my",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi3t0q70001l709ki6yafud",
        gameId: "clzi3t0q70000l709ce1swlua",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/triple-chance?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi3t0q70003l709ylzl4yvv",
        gameId: "clzi3t0q70000l709ce1swlua",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/triple-chance?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi3t0q70004l709nv7snpec",
        gameId: "clzi3t0q70000l709ce1swlua",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/triple-chance?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi3t0q70005l709f2tuef8g",
        gameId: "clzi3t0q70000l709ce1swlua",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/triple-chance?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi3t0q70006l709gl9vphng",
        gameId: "clzi3t0q70000l709ce1swlua",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/triple-chance?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi3t0q70007l709c316kcli",
        gameId: "clzi3t0q70000l709ce1swlua",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/triple-chance?currency=USD&test=1&lang=my",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06f9nzn0000mj03idlypxux",
        gameId: "clzjfj2l60000l9096s7q89l9",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/horse-racing?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06f9nzn0002mj03m9iaayy4",
        gameId: "clzjfj2l60000l9096s7q89l9",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/horse-racing?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06f9nzn0003mj03p70ohjzo",
        gameId: "clzjfj2l60000l9096s7q89l9",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/horse-racing?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi418zl008el309hcqwupke",
        gameId: "clzi418zl008dl309q910vu3q",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cleopatras-treasure?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi418zl008gl309bjyg9lke",
        gameId: "clzi418zl008dl309q910vu3q",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cleopatras-treasure?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi418zl008hl3094s7en0eh",
        gameId: "clzi418zl008dl309q910vu3q",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cleopatras-treasure?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi418zl008il3097oyzt3ob",
        gameId: "clzi418zl008dl309q910vu3q",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cleopatras-treasure?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi418zl008kl30973i21r66",
        gameId: "clzi418zl008dl309q910vu3q",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cleopatras-treasure?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi46dg70092l309tbgecbhb",
        gameId: "clzi46dg70091l30991cynedx",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/rooster-blitz?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi46dg70094l309ctt1uxwq",
        gameId: "clzi46dg70091l30991cynedx",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/rooster-blitz?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi46dg70095l3092mqcz1yn",
        gameId: "clzi46dg70091l30991cynedx",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/rooster-blitz?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi46dg70096l309j4n7izsw",
        gameId: "clzi46dg70091l30991cynedx",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/rooster-blitz?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi46dg70098l309kdteimre",
        gameId: "clzi46dg70091l30991cynedx",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/rooster-blitz?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06f9nzn0004mj03dsbcgyqs",
        gameId: "clzjfj2l60000l9096s7q89l9",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/horse-racing?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06f9nzn0005mj03pqmxax7y",
        gameId: "clzjfj2l60000l9096s7q89l9",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/horse-racing?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06f9nzn0007mj03q6pmfkpj",
        gameId: "clzjfj2l60000l9096s7q89l9",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/horse-racing?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fbf0z000emj03hdt2oxky",
        gameId: "clzi8xf540000mk09uc48mo4v",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/animal-racing?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fbf0z000gmj03ryuudwp0",
        gameId: "clzi8xf540000mk09uc48mo4v",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/animal-racing?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fbf0z000hmj03u4nbglue",
        gameId: "clzi8xf540000mk09uc48mo4v",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/animal-racing?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fbf0z000imj039rs4z0pd",
        gameId: "clzi8xf540000mk09uc48mo4v",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/animal-racing?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fbf0z000jmj037xq9hz5d",
        gameId: "clzi8xf540000mk09uc48mo4v",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/animal-racing?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fbf0z000lmj03irw658yv",
        gameId: "clzi8xf540000mk09uc48mo4v",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/animal-racing?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fd2cs000zmj03btdvabxt",
        gameId: "clzi8qshv004yjt09fk1xbjst",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/treadmill-racing?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fd2cs0011mj03aaajtrib",
        gameId: "clzi8qshv004yjt09fk1xbjst",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/treadmill-racing?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fd2cs0012mj03w37xn36a",
        gameId: "clzi8qshv004yjt09fk1xbjst",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/treadmill-racing?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fd2cs0013mj03hmyiv4md",
        gameId: "clzi8qshv004yjt09fk1xbjst",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/treadmill-racing?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fd2cs0014mj037m5b7ele",
        gameId: "clzi8qshv004yjt09fk1xbjst",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/treadmill-racing?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi418zl008jl309j25jjl1e",
        gameId: "clzi418zl008dl309q910vu3q",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cleopatras-treasure?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi46dg70097l309r8fi5en1",
        gameId: "clzi46dg70091l30991cynedx",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/rooster-blitz?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06f9nzn0006mj036e7jjfau",
        gameId: "clzjfj2l60000l9096s7q89l9",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/horse-racing?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7agse000sl809jw8vchbb",
        gameId: "clzi7agse000rl809szlo8exi",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/sugar-blast?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fbf0z000kmj03qp0vrdy4",
        gameId: "clzi8xf540000mk09uc48mo4v",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/animal-racing?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fd2cs0015mj03wscm1621",
        gameId: "clzi8qshv004yjt09fk1xbjst",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/treadmill-racing?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fd2cs0016mj034grdu5xm",
        gameId: "clzi8qshv004yjt09fk1xbjst",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/treadmill-racing?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7agse000ul8092dgkwd32",
        gameId: "clzi7agse000rl809szlo8exi",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/sugar-blast?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7agse000vl809qm16vwcz",
        gameId: "clzi7agse000rl809szlo8exi",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/sugar-blast?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7agse000wl809vo3kh9yr",
        gameId: "clzi7agse000rl809szlo8exi",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/sugar-blast?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7agse000xl809gokwzu86",
        gameId: "clzi7agse000rl809szlo8exi",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/sugar-blast?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7agse000yl809h80wxln9",
        gameId: "clzi7agse000rl809szlo8exi",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/sugar-blast?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fdgeg001kmj03t49z6gsi",
        gameId: "clzi3wqh00081l309cffd3r02",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/jackpot-jump?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fdgeg001mmj036nmmihxy",
        gameId: "clzi3wqh00081l309cffd3r02",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/jackpot-jump?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fdgeg001nmj03sr3pwaa5",
        gameId: "clzi3wqh00081l309cffd3r02",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/jackpot-jump?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fdgeg001omj03no2enkr8",
        gameId: "clzi3wqh00081l309cffd3r02",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/jackpot-jump?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fdgeg001qmj03fklhwr8p",
        gameId: "clzi3wqh00081l309cffd3r02",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/jackpot-jump?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fdpm40024mj03en5beke9",
        gameId: "clzi4b56r000cl709ef4btv0j",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/penguin-panic?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fdpm40026mj03hmiri7xy",
        gameId: "clzi4b56r000cl709ef4btv0j",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/penguin-panic?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fdpm40027mj03qur53hp7",
        gameId: "clzi4b56r000cl709ef4btv0j",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/penguin-panic?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fdpm40028mj03c5hwckbq",
        gameId: "clzi4b56r000cl709ef4btv0j",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/penguin-panic?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fdpm4002amj036xnh4gaq",
        gameId: "clzi4b56r000cl709ef4btv0j",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/penguin-panic?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fdygp002omj039pgzvcyp",
        gameId: "cm0693uvj0024l503sugpyy6u",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/interstellar-run?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fdygp002qmj031oo593t6",
        gameId: "cm0693uvj0024l503sugpyy6u",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/interstellar-run?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fdygp002rmj039hm4uj6x",
        gameId: "cm0693uvj0024l503sugpyy6u",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/interstellar-run?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fdygp002smj03dlx7jyob",
        gameId: "cm0693uvj0024l503sugpyy6u",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/interstellar-run?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fdgeg001pmj03okj9ytq2",
        gameId: "clzi3wqh00081l309cffd3r02",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/jackpot-jump?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fdpm40029mj03r2ogl8yj",
        gameId: "clzi4b56r000cl709ef4btv0j",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/penguin-panic?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fdygp002tmj03w00fz1f3",
        gameId: "cm0693uvj0024l503sugpyy6u",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/interstellar-run?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fdygp002umj03mmdoaoyz",
        gameId: "cm0693uvj0024l503sugpyy6u",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/interstellar-run?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fe7jj0038mj039ojd6wbb",
        gameId: "clzi4ptnx000ul709zx3uo4ud",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/elite-aviator-club?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fe7jj003amj03i2fj3pgs",
        gameId: "clzi4ptnx000ul709zx3uo4ud",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/elite-aviator-club?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fe7jj003bmj03d9wfjsqq",
        gameId: "clzi4ptnx000ul709zx3uo4ud",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/elite-aviator-club?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fe7jj003cmj0332hj0z1c",
        gameId: "clzi4ptnx000ul709zx3uo4ud",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/elite-aviator-club?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fe7jk003emj034pgkv9f9",
        gameId: "clzi4ptnx000ul709zx3uo4ud",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/elite-aviator-club?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fegti003smj03i41qyelv",
        gameId: "clzi4tahh0016l709ky8k7vlk",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/olympus-glory?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fegti003umj03w0miu5lk",
        gameId: "clzi4tahh0016l709ky8k7vlk",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/olympus-glory?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fegti003vmj03kwrv6j9n",
        gameId: "clzi4tahh0016l709ky8k7vlk",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/olympus-glory?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fegti003wmj03ld2fgjcs",
        gameId: "clzi4tahh0016l709ky8k7vlk",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/olympus-glory?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi4tc7e001jl709a9tqo78p",
        gameId: "clzi4tc7e001il709krg071k0",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/jhandi-munda?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi4tc7e001ll709dm5lesn3",
        gameId: "clzi4tc7e001il709krg071k0",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/jhandi-munda?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi4tc7e001ml7098zb1ophv",
        gameId: "clzi4tc7e001il709krg071k0",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/jhandi-munda?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi4tc7e001nl709bqu0252g",
        gameId: "clzi4tc7e001il709krg071k0",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/jhandi-munda?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi4tc7e001ol7098tdc2uz0",
        gameId: "clzi4tc7e001il709krg071k0",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/jhandi-munda?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fegti003tmj03ux5mzu63",
        gameId: "clzi4tahh0016l709ky8k7vlk",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/olympus-glory?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi4tc7e001kl709b8fjnpx2",
        gameId: "clzi4tc7e001il709krg071k0",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/jhandi-munda?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fe7jj0039mj03dr76vsdy",
        gameId: "clzi4ptnx000ul709zx3uo4ud",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/elite-aviator-club?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fe7jj003dmj03gkqf1rej",
        gameId: "clzi4ptnx000ul709zx3uo4ud",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/elite-aviator-club?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fegti003xmj03yaqk4evg",
        gameId: "clzi4tahh0016l709ky8k7vlk",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/olympus-glory?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m4gqwo000optj4mdrdlvmp",
        gameId: "clzjal5nm0000lc09hm8qjhco",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/thirty-two-cards?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m4gqwo000pptj4pkcw09ut",
        gameId: "clzjal5nm0000lc09hm8qjhco",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/thirty-two-cards?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m4gqwo000qptj4mp7rhtwe",
        gameId: "clzjal5nm0000lc09hm8qjhco",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/thirty-two-cards?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m4gqwo000rptj4ah7ty7e6",
        gameId: "clzjal5nm0000lc09hm8qjhco",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/thirty-two-cards?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m4gqwo000sptj4q9347w95",
        gameId: "clzjal5nm0000lc09hm8qjhco",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/thirty-two-cards?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m4gqwo000tptj4o3j5nqwq",
        gameId: "clzjal5nm0000lc09hm8qjhco",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/thirty-two-cards?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fenoh004dmj03fr50gjl3",
        gameId: "clzi7emke001ljt09mhufwjv5",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/toon-crash?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi5tte800bal309asqdl5a0",
        gameId: "clzi5mitg00aol309dxr7ewmh",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/tongits?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7kyfv002ojt09836rha57",
        gameId: "clzi6cur900ctl3092letcchk",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bingo?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi85kt60032jt09vqt6qgbq",
        gameId: "clzi85kt60030jt09m8lqenru",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/viet-fish-prawn-crab?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fegti003ymj03x5ep4ads",
        gameId: "clzi4tahh0016l709ky8k7vlk",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/olympus-glory?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fenoh004cmj03pzktztpg",
        gameId: "clzi7emke001ljt09mhufwjv5",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/toon-crash?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fenoh004emj03nvfqa7me",
        gameId: "clzi7emke001ljt09mhufwjv5",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/toon-crash?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fenoh004fmj03mm4jpqpy",
        gameId: "clzi7emke001ljt09mhufwjv5",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/toon-crash?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fenoh004gmj03br7oab25",
        gameId: "clzi7emke001ljt09mhufwjv5",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/toon-crash?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fenoh004imj03qpe2cxbf",
        gameId: "clzi7emke001ljt09mhufwjv5",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/toon-crash?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi88obm003ejt09ar1mywqb",
        gameId: "clzi88obm003cjt09wd6waghn",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/andar-bahar?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fenoh004hmj03d0gp8v7a",
        gameId: "clzi7emke001ljt09mhufwjv5",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/toon-crash?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7kyfv002ujt09kcmolkio",
        gameId: "clzi6cur900ctl3092letcchk",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bingo?currency=USD&test=1&lang=PTBR",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m4gqwo000uptj493qtyf42",
        gameId: "clzjal5nm0000lc09hm8qjhco",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/thirty-two-cards?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi5tte800b9l30947rrqska",
        gameId: "clzi5mitg00aol309dxr7ewmh",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/tongits?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi5tte800bbl30940n99eux",
        gameId: "clzi5mitg00aol309dxr7ewmh",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/tongits?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi5tte800bcl30922ppjg4c",
        gameId: "clzi5mitg00aol309dxr7ewmh",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/tongits?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi5tte800bdl309m31dbu1o",
        gameId: "clzi5mitg00aol309dxr7ewmh",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/tongits?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi5tte800bel309mfldm4i5",
        gameId: "clzi5mitg00aol309dxr7ewmh",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/tongits?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7kyfv002njt09meo4v87y",
        gameId: "clzi6cur900ctl3092letcchk",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bingo?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7kyfv002pjt09197dxw1b",
        gameId: "clzi6cur900ctl3092letcchk",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bingo?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7kyfv002qjt09hkoaljj7",
        gameId: "clzi6cur900ctl3092letcchk",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bingo?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7kyfv002rjt09zfdsdp60",
        gameId: "clzi6cur900ctl3092letcchk",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bingo?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7kyfv002sjt09z7nzv6zy",
        gameId: "clzi6cur900ctl3092letcchk",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bingo?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7kyfv002tjt09hdgda7g6",
        gameId: "clzi6cur900ctl3092letcchk",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bingo?currency=USD&test=1&lang=my",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7kyfv002vjt09a8hqjt06",
        gameId: "clzi6cur900ctl3092letcchk",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bingo?currency=USD&test=1&lang=ESLA",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi85kt60031jt0978d6wdeq",
        gameId: "clzi85kt60030jt09m8lqenru",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/viet-fish-prawn-crab?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi85kt60033jt092m4ew8du",
        gameId: "clzi85kt60030jt09m8lqenru",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/viet-fish-prawn-crab?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi85kt60034jt09esnbgwup",
        gameId: "clzi85kt60030jt09m8lqenru",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/viet-fish-prawn-crab?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi85kt60035jt09kbl74vms",
        gameId: "clzi85kt60030jt09m8lqenru",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/viet-fish-prawn-crab?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi85kt60036jt096kh8c7la",
        gameId: "clzi85kt60030jt09m8lqenru",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/viet-fish-prawn-crab?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi85kt60037jt09empqe2ti",
        gameId: "clzi85kt60030jt09m8lqenru",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/viet-fish-prawn-crab?currency=USD&test=1&lang=my",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi88obm003djt09ni5t9gcf",
        gameId: "clzi88obm003cjt09wd6waghn",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/andar-bahar?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7inum002ajt09fccn48b5",
        gameId: "clzi7inum0029jt09nsd59m6b",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/hound-racing?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fewaf004wmj031kv3mf1l",
        gameId: "clzi7i0o5001xjt097vt4105p",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/iron-dome?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fewaf004ymj03ns1eajq5",
        gameId: "clzi7i0o5001xjt097vt4105p",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/iron-dome?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fewaf004zmj03c2z8x5u5",
        gameId: "clzi7i0o5001xjt097vt4105p",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/iron-dome?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fewaf0050mj0375wrymxc",
        gameId: "clzi7i0o5001xjt097vt4105p",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/iron-dome?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fewaf0052mj036oh3mc4u",
        gameId: "clzi7i0o5001xjt097vt4105p",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/iron-dome?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi8avvk003pjt09ouot0zq1",
        gameId: "clzi8avvj003njt09frblqa9v",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/sicbo?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7inum002bjt09p3ayowhj",
        gameId: "clzi7inum0029jt09nsd59m6b",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/hound-racing?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fewaf004xmj03il56zxig",
        gameId: "clzi7i0o5001xjt097vt4105p",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/iron-dome?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0g7xt1w0017l803fsz4l755",
        gameId: "clzi2brts0000l309ww62ry9m",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/european-roulette?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0g7xt1w0016l803aglc0ve2",
        gameId: "clzi2brts0000l309ww62ry9m",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/european-roulette?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0g7xt1w0018l803yng86ohu",
        gameId: "clzi2brts0000l309ww62ry9m",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/european-roulette?currency=USD&test=1&lang=VN",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7inum002cjt0919dz72p4",
        gameId: "clzi7inum0029jt09nsd59m6b",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/hound-racing?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7inum002djt09a4690xmj",
        gameId: "clzi7inum0029jt09nsd59m6b",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/hound-racing?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7inum002ejt09ky0umv00",
        gameId: "clzi7inum0029jt09nsd59m6b",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/hound-racing?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7inum002fjt093psra5os",
        gameId: "clzi7inum0029jt09nsd59m6b",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/hound-racing?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7inum002hjt090eryhcbl",
        gameId: "clzi7inum0029jt09nsd59m6b",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/hound-racing?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi88obm003fjt098cjsyyti",
        gameId: "clzi88obm003cjt09wd6waghn",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/andar-bahar?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi88obm003gjt09rm5h2bvb",
        gameId: "clzi88obm003cjt09wd6waghn",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/andar-bahar?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi88obm003hjt09go142ti8",
        gameId: "clzi88obm003cjt09wd6waghn",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/andar-bahar?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi88obm003ijt09m3o1mhqw",
        gameId: "clzi88obm003cjt09wd6waghn",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/andar-bahar?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi8avvk003ojt096yc10kg3",
        gameId: "clzi8avvj003njt09frblqa9v",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/sicbo?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi8avvk003qjt09roaxgk56",
        gameId: "clzi8avvj003njt09frblqa9v",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/sicbo?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi8avvk003rjt09wg3kplbo",
        gameId: "clzi8avvj003njt09frblqa9v",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/sicbo?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi8avvk003sjt094laqgqmt",
        gameId: "clzi8avvj003njt09frblqa9v",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/sicbo?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi8avvk003tjt09e90i72zj",
        gameId: "clzi8avvj003njt09frblqa9v",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/sicbo?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi8avvk003ujt09p78q4yv5",
        gameId: "clzi8avvj003njt09frblqa9v",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/sicbo?currency=USD&test=1&lang=my",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi8gxdq004bjt09dnnpw2pl",
        gameId: "clzi8gxdq004ajt097uf000pr",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/tai-xiu?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi8gxdq004djt099x6jvlh0",
        gameId: "clzi8gxdq004ajt097uf000pr",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/tai-xiu?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi8gxdq004ejt09wdh7h2gg",
        gameId: "clzi8gxdq004ajt097uf000pr",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/tai-xiu?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi8gxdq004fjt09olbqjt9k",
        gameId: "clzi8gxdq004ajt097uf000pr",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/tai-xiu?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi8gxdq004gjt09x6p8uz1w",
        gameId: "clzi8gxdq004ajt097uf000pr",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/tai-xiu?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi8gxdq004hjt09q9sh0cky",
        gameId: "clzi8gxdq004ajt097uf000pr",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/tai-xiu?currency=USD&test=1&lang=my",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0g7xt1w0019l803dpckt1a7",
        gameId: "clzi2brts0000l309ww62ry9m",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/european-roulette?currency=USD&test=1&lang=TH",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi8gxdq004cjt09528qx640",
        gameId: "clzi8gxdq004ajt097uf000pr",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/tai-xiu?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm06fewaf0051mj03a6qbugyf",
        gameId: "clzi7i0o5001xjt097vt4105p",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/iron-dome?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzi7inum002gjt093dcdlrx2",
        gameId: "clzi7inum0029jt09nsd59m6b",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/hound-racing?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m5a2se0010ptj4okf3j5bk",
        gameId: "clzi3l75g007bl309owee93o7",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/dragon-tiger-2?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m5a2se0011ptj4kti6vdwn",
        gameId: "clzi3l75g007bl309owee93o7",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/dragon-tiger-2?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m5a2se0012ptj4dkjp0mwg",
        gameId: "clzi3l75g007bl309owee93o7",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/dragon-tiger-2?currency=USD&test=1&lang=VN",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m5a2se0013ptj4s6zaw58w",
        gameId: "clzi3l75g007bl309owee93o7",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/dragon-tiger-2?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m5a2se0014ptj493xtmeuf",
        gameId: "clzi3l75g007bl309owee93o7",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/dragon-tiger-2?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9tlmu000qmc09c8qs32uy",
        gameId: "clzj9tlmu000omc09s6fadm7t",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/fruit-roulette?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9ow01000fmc09lbzi4d37",
        gameId: "clzj9ow01000dmc09nb7wqh4t",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/card-hi-lo?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj8au0t0001jz09kz9r3pxy",
        gameId: "clzj8au0t0000jz092twsbpul",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/thai-fish-prawn-crab?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj8au0t0003jz09upizvy1x",
        gameId: "clzj8au0t0000jz092twsbpul",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/thai-fish-prawn-crab?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj8au0t0004jz09ugvtswqt",
        gameId: "clzj8au0t0000jz092twsbpul",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/thai-fish-prawn-crab?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj8au0t0005jz09jzl3mvqt",
        gameId: "clzj8au0t0000jz092twsbpul",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/thai-fish-prawn-crab?currency=USD&test=&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj8au0t0006jz092ev5qq1d",
        gameId: "clzj8au0t0000jz092twsbpul",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/thai-fish-prawn-crab?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj8au0t0007jz090tjk4xji",
        gameId: "clzj8au0t0000jz092twsbpul",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/thai-fish-prawn-crab?currency=USD&test=1&lang=my",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9zk94001gmc09hia0url4",
        gameId: "clzj9zk93001emc09s68l3dtp",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bai-buu?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9c6wp0002mc09jslaqgxl",
        gameId: "clzj9c6wp0000mc09c0bbchtm",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/coin-toss?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj8au0t0002jz094aewq9ru",
        gameId: "clzj8au0t0000jz092twsbpul",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/thai-fish-prawn-crab?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9vr4w0014mc09vku75npl",
        gameId: "clzj9vr4w0012mc09ibo1qnd2",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/plinko?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9tlmu000vmc09hkzdlzfi",
        gameId: "clzj9tlmu000omc09s6fadm7t",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/fruit-roulette?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m5a2se0015ptj4n4o8zq24",
        gameId: "clzi3l75g007bl309owee93o7",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/dragon-tiger-2?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m5a2se0016ptj4c2r4xibz",
        gameId: "clzi3l75g007bl309owee93o7",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/dragon-tiger-2?currency=USD&test=1&lang=my",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9c6wp0001mc095ik0fklr",
        gameId: "clzj9c6wp0000mc09c0bbchtm",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/coin-toss?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9c6wp0003mc09ty54mw9r",
        gameId: "clzj9c6wp0000mc09c0bbchtm",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/coin-toss?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9c6wp0004mc091vrmkj54",
        gameId: "clzj9c6wp0000mc09c0bbchtm",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/coin-toss?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9c6wp0005mc09cviidtlo",
        gameId: "clzj9c6wp0000mc09c0bbchtm",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/coin-toss?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9c6wp0006mc09kyhfzeic",
        gameId: "clzj9c6wp0000mc09c0bbchtm",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/coin-toss?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9c6wp0007mc09fos26fh6",
        gameId: "clzj9c6wp0000mc09c0bbchtm",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/coin-toss?currency=USD&test=1&lang=my",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9ow01000emc09llxi8gp9",
        gameId: "clzj9ow01000dmc09nb7wqh4t",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/card-hi-lo?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9ow01000gmc09mosscntc",
        gameId: "clzj9ow01000dmc09nb7wqh4t",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/card-hi-lo?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9ow01000hmc097lij14ze",
        gameId: "clzj9ow01000dmc09nb7wqh4t",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/card-hi-lo?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9ow01000imc091ofaagyq",
        gameId: "clzj9ow01000dmc09nb7wqh4t",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/card-hi-lo?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9tlmu000pmc09fx8jnm45",
        gameId: "clzj9tlmu000omc09s6fadm7t",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/fruit-roulette?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9tlmu000rmc0981ds0ryc",
        gameId: "clzj9tlmu000omc09s6fadm7t",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/fruit-roulette?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9tlmu000smc09q7hd041o",
        gameId: "clzj9tlmu000omc09s6fadm7t",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/fruit-roulette?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9tlmu000tmc09sece0jse",
        gameId: "clzj9tlmu000omc09s6fadm7t",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/fruit-roulette?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9tlmu000umc09a5tjpbqj",
        gameId: "clzj9tlmu000omc09s6fadm7t",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/fruit-roulette?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9tlmu000wmc09xpke864z",
        gameId: "clzj9tlmu000omc09s6fadm7t",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/fruit-roulette?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9vr4w0013mc09zwdoddp0",
        gameId: "clzj9vr4w0012mc09ibo1qnd2",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/plinko?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9vr4w0015mc09kikgbotd",
        gameId: "clzj9vr4w0012mc09ibo1qnd2",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/plinko?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9vr4w0016mc09leejcr1b",
        gameId: "clzj9vr4w0012mc09ibo1qnd2",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/plinko?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9vr4w0017mc092xt812g5",
        gameId: "clzj9vr4w0012mc09ibo1qnd2",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/plinko?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9vr4w0018mc0942h3w438",
        gameId: "clzj9vr4w0012mc09ibo1qnd2",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/plinko?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9zk93001fmc09ldmhskbs",
        gameId: "clzj9zk93001emc09s68l3dtp",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bai-buu?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9zk94001hmc09ryfplqdy",
        gameId: "clzj9zk93001emc09s68l3dtp",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bai-buu?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9zk94001imc09fg7i9mmj",
        gameId: "clzj9zk93001emc09s68l3dtp",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bai-buu?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9zk94001jmc09730irn4d",
        gameId: "clzj9zk93001emc09s68l3dtp",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bai-buu?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzj9zk94001kmc09ipz77yfm",
        gameId: "clzj9zk93001emc09s68l3dtp",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bai-buu?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjas0q7000elc09uoi2xgde",
        gameId: "clzjas0q7000dlc0951njhlv2",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/mine-sweeper?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjas0q7000glc09qu760iux",
        gameId: "clzjas0q7000dlc0951njhlv2",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/mine-sweeper?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjas0q7000hlc09ak9kcxt2",
        gameId: "clzjas0q7000dlc0951njhlv2",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/mine-sweeper?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjas0q7000ilc09l9przxc4",
        gameId: "clzjas0q7000dlc0951njhlv2",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/mine-sweeper?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjas0q7000jlc09crpjxm2c",
        gameId: "clzjas0q7000dlc0951njhlv2",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/mine-sweeper?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjazd44000qlc0903ql5j9x",
        gameId: "clzjazd43000plc09bkwx7lfp",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/teen-patti?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjazd44000slc099aapczmw",
        gameId: "clzjazd43000plc09bkwx7lfp",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/teen-patti?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjazd44000tlc09viepb2re",
        gameId: "clzjazd43000plc09bkwx7lfp",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/teen-patti?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjazd44000ulc09ci54uxc1",
        gameId: "clzjazd43000plc09bkwx7lfp",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/teen-patti?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjazd44000vlc09sy5tzvpv",
        gameId: "clzjazd43000plc09bkwx7lfp",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/teen-patti?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjb5eew0011lc09ndtnij8c",
        gameId: "clzjb5eew0010lc09tf2drbkt",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/heist?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjb5eew0013lc09sr2sz9kc",
        gameId: "clzjb5eew0010lc09tf2drbkt",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/heist?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjb5eew0014lc092tzjqpk6",
        gameId: "clzjb5eew0010lc09tf2drbkt",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/heist?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjb5eew0015lc09znapnlol",
        gameId: "clzjb5eew0010lc09tf2drbkt",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/heist?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjb5eew0016lc0964piul7r",
        gameId: "clzjb5eew0010lc09tf2drbkt",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/heist?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjb5eew0018lc09uwk53vco",
        gameId: "clzjb5eew0010lc09tf2drbkt",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/heist?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjbe4pa001flc09svkup7j7",
        gameId: "clzjbe4pa001elc09inb35bf5",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/five-card-poker?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjbe4pa001hlc09eerkdzzq",
        gameId: "clzjbe4pa001elc09inb35bf5",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/five-card-poker?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjbe4pa001ilc09mg4sbf3r",
        gameId: "clzjbe4pa001elc09inb35bf5",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/five-card-poker?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjbe4pa001jlc098r5byr16",
        gameId: "clzjbe4pa001elc09inb35bf5",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/five-card-poker?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjbe4pa001klc09p16x4ziv",
        gameId: "clzjbe4pa001elc09inb35bf5",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/five-card-poker?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjb5eew0012lc094xll9tbf",
        gameId: "clzjb5eew0010lc09tf2drbkt",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/heist?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjbe4pa001glc095fr458ho",
        gameId: "clzjbe4pa001elc09inb35bf5",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/five-card-poker?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjas0q7000flc09u2w2s1cx",
        gameId: "clzjas0q7000dlc0951njhlv2",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/mine-sweeper?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjazd44000rlc09zn3melqo",
        gameId: "clzjazd43000plc09bkwx7lfp",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/teen-patti?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m6x8lt000aptmk4g433lrp",
        gameId: "clz6f9mr80004ptagxa9419n1",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://res.cloudinary.com/detatjujs/image/upload/v1713516700/jackpot-jump_500x500_en_xrbsuy.jpg",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjb5eew0017lc09atyedtvh",
        gameId: "clzjb5eew0010lc09tf2drbkt",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/heist?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m7fpdd000eptmkm2oqfffj",
        gameId: "clzi2tyl1001nl309j3xn65ee",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/almighty-greek?currency=USD&lang=hans&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m7fpdd000fptmkvly9k8br",
        gameId: "clzi2tyl1001nl309j3xn65ee",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/almighty-greek?currency=USD&lang=ptbr&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m7fpdd000gptmk6qauwcjr",
        gameId: "clzi2tyl1001nl309j3xn65ee",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/almighty-greek?currency=USD&lang=en&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m7fpdd000hptmkd6ju7n1y",
        gameId: "clzi2tyl1001nl309j3xn65ee",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/almighty-greek?currency=USD&lang=vn&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m7fpdd000iptmklat3zo0y",
        gameId: "clzi2tyl1001nl309j3xn65ee",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/almighty-greek?currency=USD&lang=th&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m7fpdd000jptmkbdw8v2mx",
        gameId: "clzi2tyl1001nl309j3xn65ee",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/almighty-greek?currency=USD&lang=id&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m7fpdd000kptmk347ytbtd",
        gameId: "clzi2tyl1001nl309j3xn65ee",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/almighty-greek?currency=USD&lang=kr&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m7fpdd000lptmkq5psf5d9",
        gameId: "clzi2tyl1001nl309j3xn65ee",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/almighty-greek?currency=USD&lang=my&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjkxyra000gjh090tqg4uzh",
        gameId: "clzjkxyra000ejh09cyxovbqo",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/viking-blast?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjkqwfp0002ms09fyyl4a43",
        gameId: "clzjkqwfp0000ms0948b6zqst",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/pusoy?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjgyan7000fl109y4azscy1",
        gameId: "clzjgyan6000dl109yh1sgjpi",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/ludo?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjg0bd6000fl909ig2t7qjs",
        gameId: "clzjg0bd6000el909er7miyw7",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bola-tangkas?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjg0bd6000hl90958ran5lw",
        gameId: "clzjg0bd6000el909er7miyw7",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bola-tangkas?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjg0bd6000il909j2psd7q9",
        gameId: "clzjg0bd6000el909er7miyw7",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bola-tangkas?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjg0bd6000jl909y7ah1ox3",
        gameId: "clzjg0bd6000el909er7miyw7",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bola-tangkas?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjg0bd6000kl909w5trpbg8",
        gameId: "clzjg0bd6000el909er7miyw7",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bola-tangkas?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjg0bd6000ll909zvw6brlh",
        gameId: "clzjg0bd6000el909er7miyw7",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bola-tangkas?currency=USD&test=1&lang=my",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjg75et000sl909nq7rayk1",
        gameId: "clzjg75es000rl909qbelnhud",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/color-game?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjg75et000ul909n12t9v1s",
        gameId: "clzjg75es000rl909qbelnhud",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/color-game?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjg75et000vl909uuz4iq55",
        gameId: "clzjg75es000rl909qbelnhud",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/color-game?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjg75et000wl90993ejmcv4",
        gameId: "clzjg75es000rl909qbelnhud",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/color-game?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjg75et000xl909pyma2oos",
        gameId: "clzjg75es000rl909qbelnhud",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/color-game?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjg75et000yl909de2if0mw",
        gameId: "clzjg75es000rl909qbelnhud",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/color-game?currency=USD&test=1&lang=my",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjglj520001l109wsd7edwt",
        gameId: "clzjglj520000l109djgmfuf2",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/coin-dozer?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjglj520003l109hs99er8w",
        gameId: "clzjglj520000l109djgmfuf2",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/coin-dozer?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjglj520004l109mn1hc38q",
        gameId: "clzjglj520000l109djgmfuf2",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/coin-dozer?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjglj520005l1090854yx7z",
        gameId: "clzjglj520000l109djgmfuf2",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/coin-dozer?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjglj520007l109ruilanpi",
        gameId: "clzjglj520000l109djgmfuf2",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/coin-dozer?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjgyan7000el109ktvchox8",
        gameId: "clzjgyan6000dl109yh1sgjpi",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/ludo?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjgyan7000gl109osiowsot",
        gameId: "clzjgyan6000dl109yh1sgjpi",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/ludo?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjgyan7000hl109iep94mjc",
        gameId: "clzjgyan6000dl109yh1sgjpi",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/ludo?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjgyan7000il109ygpx498n",
        gameId: "clzjgyan6000dl109yh1sgjpi",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/ludo?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjglj520002l109e3i5gw1n",
        gameId: "clzjglj520000l109djgmfuf2",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/coin-dozer?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjg75et000tl909vmjqco25",
        gameId: "clzjg75es000rl909qbelnhud",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/color-game?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjg0bd6000gl9095fv7l92i",
        gameId: "clzjg0bd6000el909er7miyw7",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bola-tangkas?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjglj520006l1098ezmp1ff",
        gameId: "clzjglj520000l109djgmfuf2",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/coin-dozer?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjgyan7000jl109pvls58x8",
        gameId: "clzjgyan6000dl109yh1sgjpi",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/ludo?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjkqwfp0001ms09bs9glq2l",
        gameId: "clzjkqwfp0000ms0948b6zqst",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/pusoy?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjkqwfp0003ms09dkgycibl",
        gameId: "clzjkqwfp0000ms0948b6zqst",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/pusoy?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjkqwfp0004ms091il5ghbr",
        gameId: "clzjkqwfp0000ms0948b6zqst",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/pusoy?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjkqwfp0005ms098zx5u8um",
        gameId: "clzjkqwfp0000ms0948b6zqst",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/pusoy?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjkqwfp0006ms09eefjqyrj",
        gameId: "clzjkqwfp0000ms0948b6zqst",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/pusoy?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjkxyra000fjh09i4fkxddd",
        gameId: "clzjkxyra000ejh09cyxovbqo",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/viking-blast?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjkxyra000hjh09ugsebq0y",
        gameId: "clzjkxyra000ejh09cyxovbqo",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/viking-blast?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjkxyra000ijh09qxtkxnse",
        gameId: "clzjkxyra000ejh09cyxovbqo",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/viking-blast?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjkxyra000jjh09jmsdi7fa",
        gameId: "clzjkxyra000ejh09cyxovbqo",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/viking-blast?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjkxyra000ljh09n11maxm0",
        gameId: "clzjkxyra000ejh09cyxovbqo",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/viking-blast?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0eovfwa0001mn03s2s3ofwz",
        gameId: "clzj7zjek0000l709mlwt8eds",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bai-cao?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0dhtuz60001lb03n4o0s5x3",
        gameId: "clzjkgjzi0000jh09wuhqldcz",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/sugar-blast-2?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzl20m0n000fk0098w61jp66",
        gameId: "clzi340m8003xl3099ec5vv61",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cock-fighting?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c29l8j001fl9032y8z1cj1",
        gameId: "clzi5v6z200bjl30986ygd942",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-drop-ball-card?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzjkxyra000kjh09p1m6pz4l",
        gameId: "clzjkxyra000ejh09cyxovbqo",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/viking-blast?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzl20m0n000jk0097blmxdnv",
        gameId: "clzi340m8003xl3099ec5vv61",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cock-fighting?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c29l8j001jl9035qno3png",
        gameId: "clzi5v6z200bjl30986ygd942",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-drop-ball-card?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0dhtuz60006lb03p9kj7em5",
        gameId: "clzjkgjzi0000jh09wuhqldcz",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/sugar-blast-2?currency=USD&test=1&lang=PTBR",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0m7fpdd000mptmkvxwp82pz",
        gameId: "clzi2tyl1001nl309j3xn65ee",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/almighty-greek?currency=USD&lang=esla&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c29l8j001el903jdqbkw78",
        gameId: "clzi5v6z200bjl30986ygd942",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-drop-ball-card?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c29l8j001gl903x5ykxbgg",
        gameId: "clzi5v6z200bjl30986ygd942",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-drop-ball-card?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c29l8j001hl903ae2lx52z",
        gameId: "clzi5v6z200bjl30986ygd942",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-drop-ball-card?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzl20m0n000ek009w2i0ww93",
        gameId: "clzi340m8003xl3099ec5vv61",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cock-fighting?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzl20m0n000gk009wnciztot",
        gameId: "clzi340m8003xl3099ec5vv61",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cock-fighting?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzl20m0n000hk009itcc876f",
        gameId: "clzi340m8003xl3099ec5vv61",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cock-fighting?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzl20m0n000ik009dzx8ducd",
        gameId: "clzi340m8003xl3099ec5vv61",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cock-fighting?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "clzl20m0n000kk0094eou2xr6",
        gameId: "clzi340m8003xl3099ec5vv61",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cock-fighting?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c29l8j001il903tob5aajm",
        gameId: "clzi5v6z200bjl30986ygd942",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-drop-ball-card?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c29l8j001kl903zvlx4lr2",
        gameId: "clzi5v6z200bjl30986ygd942",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-drop-ball-card?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c29l8j001ll903vir2np1r",
        gameId: "clzi5v6z200bjl30986ygd942",
        language: "TAGALOG",
        trailerLink: "",
        demoLink: "",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0dhtuz60000lb032at6tkv7",
        gameId: "clzjkgjzi0000jh09wuhqldcz",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/sugar-blast-2?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0dhtuz60002lb03487qh9e6",
        gameId: "clzjkgjzi0000jh09wuhqldcz",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/sugar-blast-2?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0dhtuz60003lb03t3avf091",
        gameId: "clzjkgjzi0000jh09wuhqldcz",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/sugar-blast-2?currency=USD&test=1&lang=TH",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0dhtuz60004lb03w5r45ymk",
        gameId: "clzjkgjzi0000jh09wuhqldcz",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/sugar-blast-2?currency=USD&test=1&lang=ID",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0dhtuz60005lb036up2wou2",
        gameId: "clzjkgjzi0000jh09wuhqldcz",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/sugar-blast-2?currency=USD&test=1&lang=KR",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0dhtuz60007lb03cym1l51r",
        gameId: "clzjkgjzi0000jh09wuhqldcz",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/sugar-blast-2?currency=USD&test=1&lang=ESLA",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0eovfwa0000mn03rifb1q13",
        gameId: "clzj7zjek0000l709mlwt8eds",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bai-cao?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0eovfwa0002mn031y7vxnoa",
        gameId: "clzj7zjek0000l709mlwt8eds",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bai-cao?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0eovfwa0003mn03h3lwp4m2",
        gameId: "clzj7zjek0000l709mlwt8eds",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bai-cao?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0eovfwa0004mn031fhym2p8",
        gameId: "clzj7zjek0000l709mlwt8eds",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bai-cao?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0eovfwa0005mn039o5lkosj",
        gameId: "clzj7zjek0000l709mlwt8eds",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bai-cao?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0eovfwa0006mn0328vao0a4",
        gameId: "clzj7zjek0000l709mlwt8eds",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bai-cao?currency=USD&test=1&lang=my",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0epi7bk0001l903zjd0rkgp",
        gameId: "clzj8p3on0000l109524dvvns",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/xoc-dia-2?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c26pol000ql903bbwf1bqs",
        gameId: "clzi6z65f0000l809ds642na4",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-drop-ball-color?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c26pol000sl90345hcf9dh",
        gameId: "clzi6z65f0000l809ds642na4",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-drop-ball-color?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c26pol000tl903042l9zp4",
        gameId: "clzi6z65f0000l809ds642na4",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-drop-ball-color?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c26pol000ul903vajbw20n",
        gameId: "clzi6z65f0000l809ds642na4",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-drop-ball-color?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c26pol000wl9036lvvm16a",
        gameId: "clzi6z65f0000l809ds642na4",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-drop-ball-color?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c26pol000xl903lp353n3z",
        gameId: "clzi6z65f0000l809ds642na4",
        language: "TAGALOG",
        trailerLink: "",
        demoLink: "",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c277e70012l90372n16qqb",
        gameId: "clzi61pvs00bvl30939vbtdnv",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-roleta?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c27ss30001jx03y68e21rm",
        gameId: "clzi6utmz000mjt09ytt8t6b4",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-4-balls?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c277e70013l9035kumn78t",
        gameId: "clzi61pvs00bvl30939vbtdnv",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-roleta?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c26pol000vl903oujqjfg7",
        gameId: "clzi6z65f0000l809ds642na4",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-drop-ball-color?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c277e70017l90328zk5u30",
        gameId: "clzi61pvs00bvl30939vbtdnv",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-roleta?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c27ss30005jx03d8kb5tij",
        gameId: "clzi6utmz000mjt09ytt8t6b4",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-4-balls?currency=USD&test=1&lang=ptbr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0na90q80000l7039qdp679d",
        gameId: "clzi41rjd008pl30952zdf3hp",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/pai-kang?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0na90q80001l703amw10lnt",
        gameId: "clzi41rjd008pl30952zdf3hp",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/pai-kang?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0na90q80002l7030v3e103y",
        gameId: "clzi41rjd008pl30952zdf3hp",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/pai-kang?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0na90q80003l703a1brm26q",
        gameId: "clzi41rjd008pl30952zdf3hp",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/pai-kang?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0na90q80004l703b35676ug",
        gameId: "clzi41rjd008pl30952zdf3hp",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/pai-kang?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c277e70014l90367zyqby1",
        gameId: "clzi61pvs00bvl30939vbtdnv",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-roleta?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c277e70015l90370tx27mw",
        gameId: "clzi61pvs00bvl30939vbtdnv",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-roleta?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c277e70016l903poyt1o0q",
        gameId: "clzi61pvs00bvl30939vbtdnv",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-roleta?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c277e70018l903sxztmpkt",
        gameId: "clzi61pvs00bvl30939vbtdnv",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-roleta?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c277e70019l9030vg46ogm",
        gameId: "clzi61pvs00bvl30939vbtdnv",
        language: "TAGALOG",
        trailerLink: "",
        demoLink: "",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c27ss30000jx03uzhq7knp",
        gameId: "clzi6utmz000mjt09ytt8t6b4",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-4-balls?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c27ss30002jx03hfiwhd45",
        gameId: "clzi6utmz000mjt09ytt8t6b4",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-4-balls?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c27ss30003jx03ltcpzar5",
        gameId: "clzi6utmz000mjt09ytt8t6b4",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-4-balls?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c27ss30004jx03ai9kyvqx",
        gameId: "clzi6utmz000mjt09ytt8t6b4",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-4-balls?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c27ss30006jx03axpctu4p",
        gameId: "clzi6utmz000mjt09ytt8t6b4",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/perya-4-balls?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0c27ss30007jx03ybr4trfg",
        gameId: "clzi6utmz000mjt09ytt8t6b4",
        language: "TAGALOG",
        trailerLink: "",
        demoLink: "",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0epi7bk0000l903azf4bef3",
        gameId: "clzj8p3on0000l109524dvvns",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/xoc-dia-2?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0epi7bk0002l903gv6i7clk",
        gameId: "clzj8p3on0000l109524dvvns",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/xoc-dia-2?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0epi7bk0003l903hqec5wo2",
        gameId: "clzj8p3on0000l109524dvvns",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/xoc-dia-2?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0epi7bk0004l9037m1p037g",
        gameId: "clzj8p3on0000l109524dvvns",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/xoc-dia-2?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0epi7bk0005l9031cnt8fdf",
        gameId: "clzj8p3on0000l109524dvvns",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/xoc-dia-2?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0epi7bk0006l90382qul8xg",
        gameId: "clzj8p3on0000l109524dvvns",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/xoc-dia-2?currency=USD&test=1&lang=my",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0gasddm0001l903gx7fd8nk",
        gameId: "clzhvdyxm0000l809xdwa343s",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/blackjack?lang=cn&currency=usd&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0g7xt1w001dl8035hpvffmn",
        gameId: "clzi2brts0000l309ww62ry9m",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/european-roulette?currency=USD&test=1&lang=PTBR",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0na90q80005l703qbhqitv9",
        gameId: "clzi41rjd008pl30952zdf3hp",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/pai-kang?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0g7xt1w001al803buqx93vk",
        gameId: "clzi2brts0000l309ww62ry9m",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/european-roulette?currency=USD&test=1&lang=ID",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0g7xt1w001bl803ry06nbxt",
        gameId: "clzi2brts0000l309ww62ry9m",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/european-roulette?currency=USD&test=1&lang=KR",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0g7xt1w001cl803wdgh9ct4",
        gameId: "clzi2brts0000l309ww62ry9m",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/european-roulette?currency=USD&test=1&lang=MY",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0gasddm0000l903swj48cxa",
        gameId: "clzhvdyxm0000l809xdwa343s",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/blackjack?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0gasddm0002l9032g7cyk6q",
        gameId: "clzhvdyxm0000l809xdwa343s",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/blackjack?lang=vn&currency=usd&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0gasddm0003l903fc9qyfis",
        gameId: "clzhvdyxm0000l809xdwa343s",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/blackjack?lang=th&currency=usd&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0gasddm0004l9038qo3kp7r",
        gameId: "clzhvdyxm0000l809xdwa343s",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/blackjack?lang=id&currency=usd&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0gasddm0005l9034pbk1zzc",
        gameId: "clzhvdyxm0000l809xdwa343s",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/blackjack?lang=kr&currency=usd&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0gasddm0006l903a0oliw23",
        gameId: "clzhvdyxm0000l809xdwa343s",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/blackjack?lang=my&currency=usd&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0gd5snd0001k403jks5zkv8",
        gameId: "clzi4yor9001tl709jspmbgwa",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/warriors-temple?currency=USD&lang=hans&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0gd5snd0007k403mqj61lpl",
        gameId: "clzi4yor9001tl709jspmbgwa",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/warriors-temple?currency=USD&lang=ptbr&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0gd5snd0000k403dzuorevv",
        gameId: "clzi4yor9001tl709jspmbgwa",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/warriors-temple?currency=USD&lang=en&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0gd5snd0002k403hyaf3a6h",
        gameId: "clzi4yor9001tl709jspmbgwa",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/warriors-temple?currency=USD&lang=vn&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0gd5snd0003k403a7xsmiph",
        gameId: "clzi4yor9001tl709jspmbgwa",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/warriors-temple?currency=USD&lang=th&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0gd5snd0004k403900j48mq",
        gameId: "clzi4yor9001tl709jspmbgwa",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/warriors-temple?currency=USD&lang=id&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0gd5snd0005k403nnggpx1d",
        gameId: "clzi4yor9001tl709jspmbgwa",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/warriors-temple?currency=USD&lang=kr&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0gd5snd0006k403p33bh6hd",
        gameId: "clzi4yor9001tl709jspmbgwa",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/warriors-temple?currency=USD&lang=my&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0gd5snd0008k4038scis5im",
        gameId: "clzi4yor9001tl709jspmbgwa",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/warriors-temple?currency=USD&lang=esla&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0naafp4000al7038u99p303",
        gameId: "clzi4aoeg009dl309jmyhzp89",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/king-pok-deng?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0naafp4000bl7038sf9y574",
        gameId: "clzi4aoeg009dl309jmyhzp89",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/king-pok-deng?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0naafp4000cl7038qtunr0r",
        gameId: "clzi4aoeg009dl309jmyhzp89",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/king-pok-deng?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0naafp4000dl703nksu5cjh",
        gameId: "clzi4aoeg009dl309jmyhzp89",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/king-pok-deng?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0naafp4000el703i2xgex3u",
        gameId: "clzi4aoeg009dl309jmyhzp89",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/king-pok-deng?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0naafp4000fl703oxvnoqdt",
        gameId: "clzi4aoeg009dl309jmyhzp89",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/king-pok-deng?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0ge5asc000jjo0362x57tuj",
        gameId: "clzjl63ii000rjh09zsf1gw57",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/gold-mines?currency=USD&lang=hans&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0ge5asc000pjo03ohyg2mj8",
        gameId: "clzjl63ii000rjh09zsf1gw57",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/gold-mines?currency=USD&lang=ptbr&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0ge5asc000ijo03ugrhzrw5",
        gameId: "clzjl63ii000rjh09zsf1gw57",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/gold-mines?currency=USD&lang=en&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0ge5asc000kjo03xwdvo0a1",
        gameId: "clzjl63ii000rjh09zsf1gw57",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/gold-mines?currency=USD&lang=vn&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0ge5asc000ljo03qresffxx",
        gameId: "clzjl63ii000rjh09zsf1gw57",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/gold-mines?currency=USD&lang=th&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0ge5asc000mjo03j3e00nn8",
        gameId: "clzjl63ii000rjh09zsf1gw57",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/gold-mines?currency=USD&lang=id&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0ge5asc000njo03tiugpgyh",
        gameId: "clzjl63ii000rjh09zsf1gw57",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/gold-mines?currency=USD&lang=kr&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0ge5asc000ojo03i12p5z2t",
        gameId: "clzjl63ii000rjh09zsf1gw57",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/gold-mines?currency=USD&lang=my&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0ge5asc000qjo03fpufktt6",
        gameId: "clzjl63ii000rjh09zsf1gw57",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo74.kingmidasdev.net/lobbys/kmgamelauncher/#/gamelauncher/8/gold-mines?currency=USD&lang=esla&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nb6nfk000cjx036lo3hw78",
        gameId: "clzi4jume00a0l309dk4mjmo8",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/seven-up-down?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nb6nfk000djx03stg11rlv",
        gameId: "clzi4jume00a0l309dk4mjmo8",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/seven-up-down?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nb6nfk000ejx03baw3cfm2",
        gameId: "clzi4jume00a0l309dk4mjmo8",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/seven-up-down?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nb6nfk000fjx03w7xci6p6",
        gameId: "clzi4jume00a0l309dk4mjmo8",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/seven-up-down?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nb6nfk000gjx03kr2zuh74",
        gameId: "clzi4jume00a0l309dk4mjmo8",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/seven-up-down?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nb6nfk000hjx03ckmb3ntm",
        gameId: "clzi4jume00a0l309dk4mjmo8",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/seven-up-down?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nb6nfk000ijx03bmb427zx",
        gameId: "clzi4jume00a0l309dk4mjmo8",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/seven-up-down?currency=USD&test=1&lang=my",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nb8at30000jz03w96q46ji",
        gameId: "clzi8fnyi0040jt091cjo8mmr",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bola-golek?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nb8at30001jz03gpv00au8",
        gameId: "clzi8fnyi0040jt091cjo8mmr",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bola-golek?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nb8at30002jz031mru4xbn",
        gameId: "clzi8fnyi0040jt091cjo8mmr",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bola-golek?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nb8at30003jz03jiyxvfji",
        gameId: "clzi8fnyi0040jt091cjo8mmr",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bola-golek?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nb8at30004jz03mvo9r3wn",
        gameId: "clzi8fnyi0040jt091cjo8mmr",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bola-golek?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nb8at30005jz0339p82gsz",
        gameId: "clzi8fnyi0040jt091cjo8mmr",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bola-golek?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nb9hqx0009jz031r8enw52",
        gameId: "clzi8ncro004mjt096oiwm1t3",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/dota-hi-lo?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nb9hqx000ajz03orc9s21q",
        gameId: "clzi8ncro004mjt096oiwm1t3",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/dota-hi-lo?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nb9hqx000bjz03lovq6cdu",
        gameId: "clzi8ncro004mjt096oiwm1t3",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/dota-hi-lo?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nb9hqx000cjz03o98qdbnj",
        gameId: "clzi8ncro004mjt096oiwm1t3",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/dota-hi-lo?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nb9hqx000djz037ee3rjoa",
        gameId: "clzi8ncro004mjt096oiwm1t3",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/dota-hi-lo?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nb9hqx000ejz03mcqt54wg",
        gameId: "clzi8ncro004mjt096oiwm1t3",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/dota-hi-lo?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbfd2n000kjz03y94u28vg",
        gameId: "clzi8ubwh005cjt097du63xn8",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bonus-dice?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbfd2n000ljz038831vvgp",
        gameId: "clzi8ubwh005cjt097du63xn8",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bonus-dice?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbfd2n000mjz03xoxyq62s",
        gameId: "clzi8ubwh005cjt097du63xn8",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bonus-dice?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbfd2n000njz03vda351xc",
        gameId: "clzi8ubwh005cjt097du63xn8",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bonus-dice?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbfd2n000ojz032d7r4z7d",
        gameId: "clzi8ubwh005cjt097du63xn8",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bonus-dice?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbfd2n000pjz03q76qmdr1",
        gameId: "clzi8ubwh005cjt097du63xn8",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bonus-dice?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbfd2n000qjz03wj69ngbx",
        gameId: "clzi8ubwh005cjt097du63xn8",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/bonus-dice?currency=USD&test=1&lang=my",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbodo4000njx03kcxu6i2b",
        gameId: "clzja2705001qmc099r0dcxc2",
        language: "ENGLISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cash-rocket?currency=USD&test=1",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbodo4000ojx03bf7jqq8q",
        gameId: "clzja2705001qmc099r0dcxc2",
        language: "VIETNAMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cash-rocket?currency=USD&test=1&lang=vn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbodo4000pjx03orx03nxl",
        gameId: "clzja2705001qmc099r0dcxc2",
        language: "THAI",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cash-rocket?currency=USD&test=1&lang=th",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbodo4000qjx032a3ep5be",
        gameId: "clzja2705001qmc099r0dcxc2",
        language: "BAHASA INDONESIA",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cash-rocket?currency=USD&test=1&lang=id",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbodo4000rjx03lqgozk1g",
        gameId: "clzja2705001qmc099r0dcxc2",
        language: "KOREAN",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cash-rocket?currency=USD&test=1&lang=kr",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbodo4000sjx03tvgzo2ul",
        gameId: "clzja2705001qmc099r0dcxc2",
        language: "BURMESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cash-rocket?currency=USD&test=1&lang=my",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbodo4000tjx032dvlkwv7",
        gameId: "clzja2705001qmc099r0dcxc2",
        language: "SPANISH",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cash-rocket?currency=USD&test=1&lang=esla",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbodo4000ujx037s04gvpo",
        gameId: "clzja2705001qmc099r0dcxc2",
        language: "MANDARIN CHINESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cash-rocket?currency=USD&test=1&lang=cn",
      },
    });
    await prisma.languageInfo.create({
      data: {
        id: "cm0nbodo4000vjx03igcj47sn",
        gameId: "clzja2705001qmc099r0dcxc2",
        language: "BRAZILIAN PORTUGUESE",
        trailerLink: "",
        demoLink:
          "https://demo7.kingmidasdev.net/games/cash-rocket?currency=USD&test=1&lang=ptbr",
      },
    });

    // Seed TargetMarkets
    await prisma.targetMarket.create({
      data: {
        id: "clzi6w49d0017jt09301l8drf",
        market: "ALL",
        gameId: "clzi6w49d000yjt09rhdqmkdj",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzi7agse0011l809dsmetdok",
        market: "ALL",
        gameId: "clzi7agse000rl809szlo8exi",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzi7inum002kjt09ibw8nr0f",
        market: "ALL",
        gameId: "clzi7inum0029jt09nsd59m6b",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzi7kyfv002xjt09usm4xkey",
        market: "lottery",
        gameId: "clzi6cur900ctl3092letcchk",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzi85kt6003ajt0971r128dw",
        market: "South East Asia",
        gameId: "clzi85kt60030jt09m8lqenru",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzi88obm003ljt0902f3ygmb",
        market: "South Asia",
        gameId: "clzi88obm003cjt09wd6waghn",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzi8avvk003xjt09bejoj9sx",
        market: "East Asia",
        gameId: "clzi8avvj003njt09frblqa9v",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzi8gxdq004kjt09e3uok84x",
        market: "South East Asia",
        gameId: "clzi8gxdq004ajt097uf000pr",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzj8au0t000ajz09gllanlnw",
        market: "South East Asia",
        gameId: "clzj8au0t0000jz092twsbpul",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzj9c6wp000amc09a1stl8fp",
        market: "ALL",
        gameId: "clzj9c6wp0000mc09c0bbchtm",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzj9ow01000lmc09ori8rlfd",
        market: "South Asia",
        gameId: "clzj9ow01000dmc09nb7wqh4t",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzj9tlmu000zmc09e0lnkrq3",
        market: "ALL",
        gameId: "clzj9tlmu000omc09s6fadm7t",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzj9vr4w001bmc09hravnevh",
        market: "",
        gameId: "clzj9vr4w0012mc09ibo1qnd2",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzj9zk94001nmc09q7fxbzz1",
        market: "South East Asia",
        gameId: "clzj9zk93001emc09s68l3dtp",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzjas0q7000mlc090h0nmd65",
        market: "ALL",
        gameId: "clzjas0q7000dlc0951njhlv2",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzjazd44000ylc09z2rbg7hl",
        market: "South Asia",
        gameId: "clzjazd43000plc09bkwx7lfp",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzjb5eex001blc09f5bsfd1d",
        market: "ALL",
        gameId: "clzjb5eew0010lc09tf2drbkt",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzjbe4pa001nlc09aepturo8",
        market: "South Asia",
        gameId: "clzjbe4pa001elc09inb35bf5",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzjg0bd6000ol909qofc3ag5",
        market: "South East Asia",
        gameId: "clzjg0bd6000el909er7miyw7",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzjg75et0011l909czfnsa4e",
        market: "South East Asia",
        gameId: "clzjg75es000rl909qbelnhud",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzjglj52000al10940bmfedd",
        market: "ALL",
        gameId: "clzjglj520000l109djgmfuf2",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzi2o2eo0019l309t2mprsw5",
        market: "East Asia",
        gameId: "clzi2o2eo000zl309mwz2yq8t",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzi2ow6g001kl309zojtlqo1",
        market: "North America",
        gameId: "clzi2lt5d000el309yjvcccck",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzjgyan7000ml109agmoarnw",
        market: "South Asia",
        gameId: "clzjgyan6000dl109yh1sgjpi",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzjkqwfp0009ms09wzxp4jrh",
        market: "South East Asia",
        gameId: "clzjkqwfp0000ms0948b6zqst",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzjkxyra000ojh09omqapw6e",
        market: "ALL",
        gameId: "clzjkxyra000ejh09cyxovbqo",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzi2zje0003gl309xw01mrur",
        market: "South East Asia",
        gameId: "clzi2zje00036l309wl7hsivh",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzi3q4l2007yl309hanflbs3",
        market: "South East Asia",
        gameId: "clzi3q4l2007ol309im0ph4ze",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzi3t0q7000al709lxpekr97",
        market: "South Asia",
        gameId: "clzi3t0q70000l709ce1swlua",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzi418zl008nl309mxruwk1n",
        market: "ALL",
        gameId: "clzi418zl008dl309q910vu3q",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzi46dg7009bl309mbfzyhal",
        market: "ALL",
        gameId: "clzi46dg70091l30991cynedx",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzi4tc7e001rl7095ndqoswh",
        market: "South Asia",
        gameId: "clzi4tc7e001il709krg071k0",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzi5tte800bhl309wp6p5t7a",
        market: "South East Asia",
        gameId: "clzi5mitg00aol309dxr7ewmh",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzl20m0n000nk009px4q3p1w",
        market: "South East Asia",
        gameId: "clzi340m8003xl3099ec5vv61",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "clzl20m0n000ok009j8h0wm1v",
        market: "Latin America",
        gameId: "clzi340m8003xl3099ec5vv61",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm06f9nzn000amj03rdkagz1x",
        market: "ALL",
        gameId: "clzjfj2l60000l9096s7q89l9",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm06fbf0z000omj03rfmtmhv2",
        market: "ALL",
        gameId: "clzi8xf540000mk09uc48mo4v",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm06fd2cs0019mj030aag8mg0",
        market: "ALL",
        gameId: "clzi8qshv004yjt09fk1xbjst",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm06fdgeg001tmj03zgfldul1",
        market: "ALL",
        gameId: "clzi3wqh00081l309cffd3r02",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm06fdpm4002dmj03o21zpvdi",
        market: "ALL",
        gameId: "clzi4b56r000cl709ef4btv0j",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm06fdygp002xmj03wwi2hfji",
        market: "ALL",
        gameId: "cm0693uvj0024l503sugpyy6u",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm06fe7jk003hmj03os6cravy",
        market: "ALL",
        gameId: "clzi4ptnx000ul709zx3uo4ud",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm06fegti0041mj03j3gm66zw",
        market: "ALL",
        gameId: "clzi4tahh0016l709ky8k7vlk",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm06fenoh004lmj030g1goxvi",
        market: "ALL",
        gameId: "clzi7emke001ljt09mhufwjv5",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm06fewaf0055mj03jmswumpt",
        market: "ALL",
        gameId: "clzi7i0o5001xjt097vt4105p",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0c26pol0010l903p6fs2s2z",
        market: "South East Asia",
        gameId: "clzi6z65f0000l809ds642na4",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0c277e8001cl903wk4qvviy",
        market: "South East Asia",
        gameId: "clzi61pvs00bvl30939vbtdnv",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0c27ss3000ajx03jrvjqyqq",
        market: "South East Asia",
        gameId: "clzi6utmz000mjt09ytt8t6b4",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0c29l8j001ol903xvw2ahnl",
        market: "South East Asia",
        gameId: "clzi5v6z200bjl30986ygd942",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0dhtuz6000alb030b1gbpfo",
        market: "ALL",
        gameId: "clzjkgjzi0000jh09wuhqldcz",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0eovfwb0009mn03up04flsh",
        market: "South East Asia",
        gameId: "clzj7zjek0000l709mlwt8eds",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0epi7bk0009l903b9f07x2m",
        market: "South East Asia",
        gameId: "clzj8p3on0000l109524dvvns",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0g7vnh70007l803op4i26lm",
        market: "ALL",
        gameId: "cm0epsimc000bl903oss6sz9s",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0g7vnh70008l803e6myx2kw",
        market: "Europe",
        gameId: "cm0epsimc000bl903oss6sz9s",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0g7xt1w001gl803eq1mam0n",
        market: "ALL",
        gameId: "clzi2brts0000l309ww62ry9m",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0g7xt1w001hl803ihhe6v5q",
        market: "Europe",
        gameId: "clzi2brts0000l309ww62ry9m",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0gasddm0009l903cp7381sj",
        market: "ALL",
        gameId: "clzhvdyxm0000l809xdwa343s",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0gasddm000al903u2jimded",
        market: "Europe",
        gameId: "clzhvdyxm0000l809xdwa343s",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0gd5snd000bk4036k2ess37",
        market: "ALL",
        gameId: "clzi4yor9001tl709jspmbgwa",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0ge5asd000tjo0363bch8dm",
        market: "ALL",
        gameId: "clzjl63ii000rjh09zsf1gw57",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0kivy50000optkwg8u2qptr",
        market: "South East Asia",
        gameId: "clzi2u1pz0022l3099889lr8y",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0m1y3yk000bml0355255uux",
        market: "East Asia",
        gameId: "clzi7a33r000cl809et0alt9d",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0m4gqwo000xptj42dy04xz5",
        market: "ALL",
        gameId: "clzjal5nm0000lc09hm8qjhco",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0m5a2se0019ptj454o0x2yi",
        market: "East Asia",
        gameId: "clzi3l75g007bl309owee93o7",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0m6x8lt000cptmkfio2bxns",
        market: "South East Asia",
        gameId: "clz6f9mr80004ptagxa9419n1",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0m7fpde000pptmkx97sferx",
        market: "ALL",
        gameId: "clzi2tyl1001nl309j3xn65ee",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0na90q80008l703kmkswtfd",
        market: "South East Asia",
        gameId: "clzi41rjd008pl30952zdf3hp",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0naafp4000il7039z2ovugj",
        market: "South East Asia",
        gameId: "clzi4aoeg009dl309jmyhzp89",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0nb6nfk000ljx03y09i0btj",
        market: "South Asia",
        gameId: "clzi4jume00a0l309dk4mjmo8",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0nb8at30007jz033bxkdrb1",
        market: "South East Asia",
        gameId: "clzi8fnyi0040jt091cjo8mmr",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0nb9hqx000hjz032c18cn4v",
        market: "ALL",
        gameId: "clzi8ncro004mjt096oiwm1t3",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0nbfd2n000tjz03k6d84f1d",
        market: "ALL",
        gameId: "clzi8ubwh005cjt097du63xn8",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0nbodo4000yjx03g6hugnux",
        market: "ALL",
        gameId: "clzja2705001qmc099r0dcxc2",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0nbqmnz000alb0376j0ws9f",
        market: "ALL",
        gameId: "clzi2x11s002sl309kkbki7i7",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0nbxi8h000mlb03gif3s5vz",
        market: "South Asia",
        gameId: "clzhu8loo0000l509pxo5tn0f",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0nc4uic000mmd033borv75z",
        market: "ALL",
        gameId: "clzi1nawh0000kz094cc5xgan",
        demoLinkByMarket: "demo-link-by-market",
      },
    });
    await prisma.targetMarket.create({
      data: {
        id: "cm0nc4uic000nmd03lrq8fgtu",
        market: "Europe",
        gameId: "clzi1nawh0000kz094cc5xgan",
        demoLinkByMarket: "demo-link-by-market",
      },
    });

    // Seed TargetCountriesByIP
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0c29l8j001pl903gyxbddz8",
        country: "Philippines",
        gameId: "clzi5v6z200bjl30986ygd942",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0dhtuz6000blb03op844aw5",
        country: "ALL",
        gameId: "clzjkgjzi0000jh09wuhqldcz",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0dhtuz6000clb03zo0dpa8g",
        country: "Thailand",
        gameId: "clzjkgjzi0000jh09wuhqldcz",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0eovfwb000amn03ugh5nlix",
        country: "Vietnam",
        gameId: "clzj7zjek0000l709mlwt8eds",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi6w49d0018jt09j3mhjctf",
        country: "All",
        gameId: "clzi6w49d000yjt09rhdqmkdj",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi6w49d0019jt09ntendv4f",
        country: "India",
        gameId: "clzi6w49d000yjt09rhdqmkdj",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi7agse0012l809zu4fwngy",
        country: "All",
        gameId: "clzi7agse000rl809szlo8exi",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi7agse0013l809vbit6vy8",
        country: "Philippines",
        gameId: "clzi7agse000rl809szlo8exi",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi7inum002ljt09lvtxux09",
        country: "All",
        gameId: "clzi7inum0029jt09nsd59m6b",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi7inum002mjt09rk4oh1hx",
        country: "India",
        gameId: "clzi7inum0029jt09nsd59m6b",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi7kyfv002yjt09ccsisysf",
        country: "All",
        gameId: "clzi6cur900ctl3092letcchk",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi7kyfv002zjt09how9qwe9",
        country: "Philippines",
        gameId: "clzi6cur900ctl3092letcchk",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi85kt6003bjt09mwy8ii4d",
        country: "Vietnam",
        gameId: "clzi85kt60030jt09m8lqenru",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi88obm003mjt094d88xwyx",
        country: "India",
        gameId: "clzi88obm003cjt09wd6waghn",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi8avvk003yjt095pbbgxz1",
        country: "China",
        gameId: "clzi8avvj003njt09frblqa9v",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi8avvk003zjt091wg1olkj",
        country: "Malaysia",
        gameId: "clzi8avvj003njt09frblqa9v",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi8gxdq004ljt09d5u95tq0",
        country: "Vietnam",
        gameId: "clzi8gxdq004ajt097uf000pr",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzj8au0u000bjz09qnqq5d56",
        country: "Thailand",
        gameId: "clzj8au0t0000jz092twsbpul",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzj8au0u000cjz09rqeylwkr",
        country: "Myanmar",
        gameId: "clzj8au0t0000jz092twsbpul",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi2o2eo001al309bjsn671m",
        country: "China",
        gameId: "clzi2o2eo000zl309mwz2yq8t",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi2o2eo001bl309srz0a3bx",
        country: "Thailand",
        gameId: "clzi2o2eo000zl309mwz2yq8t",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi2o2eo001cl309ghm3bcr7",
        country: "China",
        gameId: "clzi2o2eo000zl309mwz2yq8t",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi2ow6g001ll30970sdwu0v",
        country: "All",
        gameId: "clzi2lt5d000el309yjvcccck",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi2ow6g001ml309gcbcxm23",
        country: "Thailand",
        gameId: "clzi2lt5d000el309yjvcccck",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0g7vnh70009l803a1ofxr3q",
        country: "ALL",
        gameId: "cm0epsimc000bl903oss6sz9s",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0g7vnh7000al803n2vq34j1",
        country: "Canada",
        gameId: "cm0epsimc000bl903oss6sz9s",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0g7vnh7000bl803q7kqkbuw",
        country: "United States of America",
        gameId: "cm0epsimc000bl903oss6sz9s",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi2zje0003hl309iq1zvwny",
        country: "Indonesia",
        gameId: "clzi2zje00036l309wl7hsivh",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi2zje0003il309w2ntvt3v",
        country: "Myanmar",
        gameId: "clzi2zje00036l309wl7hsivh",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0g7vnh7000cl80329sjjr4l",
        country: "United Kingdom",
        gameId: "cm0epsimc000bl903oss6sz9s",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0g7vnh7000dl803iyouf84q",
        country: "Australia",
        gameId: "cm0epsimc000bl903oss6sz9s",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0g7vnh7000el803ienqhcb2",
        country: "South Africa",
        gameId: "cm0epsimc000bl903oss6sz9s",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi3q4l2007zl309l4939s83",
        country: "China",
        gameId: "clzi3q4l2007ol309im0ph4ze",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi3q4l20080l309s57l4yew",
        country: "Myanmar",
        gameId: "clzi3q4l2007ol309im0ph4ze",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi3t0q7000bl7094zsxai75",
        country: "India",
        gameId: "clzi3t0q70000l709ce1swlua",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi418zl008ol309zzll5i1o",
        country: "ALL",
        gameId: "clzi418zl008dl309q910vu3q",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi46dg7009cl3099oy493tr",
        country: "ALL",
        gameId: "clzi46dg70091l30991cynedx",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0g7xt1w001il80372pd7q55",
        country: "Thailand",
        gameId: "clzi2brts0000l309ww62ry9m",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0g7xt1w001jl803v9xbvbdj",
        country: "ALL",
        gameId: "clzi2brts0000l309ww62ry9m",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi4tc7e001sl709yz9ptrmo",
        country: "India",
        gameId: "clzi4tc7e001il709krg071k0",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzi5tte800bil309qqa5sv3f",
        country: "Philippines",
        gameId: "clzi5mitg00aol309dxr7ewmh",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0gd5snd000ck40302oxgwhl",
        country: "ALL",
        gameId: "clzi4yor9001tl709jspmbgwa",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0kivy50000pptkwoohbvi0q",
        country: "Thailand",
        gameId: "clzi2u1pz0022l3099889lr8y",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0m1y3yk000cml03x7ishlm2",
        country: "Korea",
        gameId: "clzi7a33r000cl809et0alt9d",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0m1y3yk000dml030voysuc0",
        country: "Japan",
        gameId: "clzi7a33r000cl809et0alt9d",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0m1y3yk000eml03f93v6a92",
        country: "China",
        gameId: "clzi7a33r000cl809et0alt9d",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0m4gqwo000yptj45fzop3qr",
        country: "All",
        gameId: "clzjal5nm0000lc09hm8qjhco",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0m4gqwo000zptj4mu7368hv",
        country: "India",
        gameId: "clzjal5nm0000lc09hm8qjhco",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0m5a2se001aptj4zzk9046b",
        country: "China",
        gameId: "clzi3l75g007bl309owee93o7",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0m5a2se001bptj4sxiempw9",
        country: "Thailand",
        gameId: "clzi3l75g007bl309owee93o7",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0na90q80009l7031n1jstup",
        country: "Thailand",
        gameId: "clzi41rjd008pl30952zdf3hp",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0nb6nfk000mjx03kimo8e0n",
        country: "India",
        gameId: "clzi4jume00a0l309dk4mjmo8",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0nb8at30008jz038pkpxssr",
        country: "Indonesia",
        gameId: "clzi8fnyi0040jt091cjo8mmr",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0nb9hqx000ijz03ffjy1lpp",
        country: "All",
        gameId: "clzi8ncro004mjt096oiwm1t3",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0nb9hqx000jjz03jp1js3dw",
        country: "Thailand",
        gameId: "clzi8ncro004mjt096oiwm1t3",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0nbfd2n000ujz032csuj4k8",
        country: "All",
        gameId: "clzi8ubwh005cjt097du63xn8",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0nbfd2n000vjz03j39gvjtn",
        country: "Thailand",
        gameId: "clzi8ubwh005cjt097du63xn8",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0nbodo4000zjx03s4cdlbfu",
        country: "All",
        gameId: "clzja2705001qmc099r0dcxc2",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0nbodo40010jx032ttfk08u",
        country: "India",
        gameId: "clzja2705001qmc099r0dcxc2",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0nbqmnz000blb0375xgw2qn",
        country: "All",
        gameId: "clzi2x11s002sl309kkbki7i7",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0nbqmnz000clb03gcce50ji",
        country: "Myanmar",
        gameId: "clzi2x11s002sl309kkbki7i7",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzj9c6wp000bmc091tay36ig",
        country: "All",
        gameId: "clzj9c6wp0000mc09c0bbchtm",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzj9c6wp000cmc09c35taaiy",
        country: "India",
        gameId: "clzj9c6wp0000mc09c0bbchtm",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzj9ow01000mmc09iehq1ocd",
        country: "India",
        gameId: "clzj9ow01000dmc09nb7wqh4t",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzj9ow01000nmc09lbu2ux6p",
        country: "Thailand",
        gameId: "clzj9ow01000dmc09nb7wqh4t",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzj9tlmu0010mc098lttobiu",
        country: "Myanmar",
        gameId: "clzj9tlmu000omc09s6fadm7t",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzj9tlmu0011mc093ljy8vwx",
        country: "ALL",
        gameId: "clzj9tlmu000omc09s6fadm7t",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzj9vr4w001cmc09kvcp9zdl",
        country: "All",
        gameId: "clzj9vr4w0012mc09ibo1qnd2",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzj9vr4w001dmc09tsmz85h9",
        country: "Philippines",
        gameId: "clzj9vr4w0012mc09ibo1qnd2",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzj9zk94001omc09xvc92eh0",
        country: "Vietnam",
        gameId: "clzj9zk93001emc09s68l3dtp",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzj9zk94001pmc09vl9t6bl3",
        country: "Thailand",
        gameId: "clzj9zk93001emc09s68l3dtp",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzjas0q7000nlc09hjh7vk17",
        country: "All",
        gameId: "clzjas0q7000dlc0951njhlv2",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzjas0q7000olc09ettmxmla",
        country: "Philippines",
        gameId: "clzjas0q7000dlc0951njhlv2",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzjazd44000zlc09gzpeok4s",
        country: "India",
        gameId: "clzjazd43000plc09bkwx7lfp",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzjb5eex001clc093cx3ya3a",
        country: "All",
        gameId: "clzjb5eew0010lc09tf2drbkt",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzjb5eex001dlc09h7ltcub7",
        country: "Thailand",
        gameId: "clzjb5eew0010lc09tf2drbkt",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzjbe4pa001olc091ly0202b",
        country: "India",
        gameId: "clzjbe4pa001elc09inb35bf5",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzjbe4pa001plc09u82tsvja",
        country: "Philippines",
        gameId: "clzjbe4pa001elc09inb35bf5",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0c26pol0011l903d7o50pdz",
        country: "Philippines",
        gameId: "clzi6z65f0000l809ds642na4",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0c277e8001dl903kttcguqt",
        country: "Philippines",
        gameId: "clzi61pvs00bvl30939vbtdnv",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzjg0bd6000pl909l731cv6i",
        country: "Indonesia",
        gameId: "clzjg0bd6000el909er7miyw7",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzjg0bd6000ql909u77o1hdb",
        country: "Thailand",
        gameId: "clzjg0bd6000el909er7miyw7",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzjg75et0012l909o86kdx7d",
        country: "Philippines",
        gameId: "clzjg75es000rl909qbelnhud",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzjglj52000bl1097922csi0",
        country: "ALL",
        gameId: "clzjglj520000l109djgmfuf2",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzjglj52000cl1095bq85qcq",
        country: "Thailand",
        gameId: "clzjglj520000l109djgmfuf2",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzjgyan7000nl109d47k5qbj",
        country: "India",
        gameId: "clzjgyan6000dl109yh1sgjpi",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzjkqwfp000ams09skchnl6b",
        country: "Philippines",
        gameId: "clzjkqwfp0000ms0948b6zqst",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzjkqwfp000bms09aqjqlwnu",
        country: "Vietnam",
        gameId: "clzjkqwfp0000ms0948b6zqst",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzjkxyra000pjh09gwgn6ihj",
        country: "ALL",
        gameId: "clzjkxyra000ejh09cyxovbqo",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzjkxyra000qjh09bpb8kq2f",
        country: "Thailand",
        gameId: "clzjkxyra000ejh09cyxovbqo",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0c27ss3000bjx03qqwwmfv2",
        country: "Philippines",
        gameId: "clzi6utmz000mjt09ytt8t6b4",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0epi7bk000al903kcnnmfcu",
        country: "Vietnam",
        gameId: "clzj8p3on0000l109524dvvns",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0gasddm000bl90332xhswvi",
        country: "ALL",
        gameId: "clzhvdyxm0000l809xdwa343s",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0gasddm000cl903gndgyn0m",
        country: "Thailand",
        gameId: "clzhvdyxm0000l809xdwa343s",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzl20m0n000pk009ydq74g88",
        country: "ALL",
        gameId: "clzi340m8003xl3099ec5vv61",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzl20m0n000qk009e5v264f8",
        country: "",
        gameId: "clzi340m8003xl3099ec5vv61",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "clzl20m0n000rk009lkq3ruq6",
        country: "",
        gameId: "clzi340m8003xl3099ec5vv61",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0ge5asd000ujo0383egwhz1",
        country: "ALL",
        gameId: "clzjl63ii000rjh09zsf1gw57",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0m6x8lt000dptmksmetyhl4",
        country: "Singapore",
        gameId: "clz6f9mr80004ptagxa9419n1",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0m7fpde000qptmkhjjkt9eh",
        country: "ALL",
        gameId: "clzi2tyl1001nl309j3xn65ee",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0naafp4000jl70399wdting",
        country: "Thailand",
        gameId: "clzi4aoeg009dl309jmyhzp89",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0nbxi8h000nlb03nl1om69x",
        country: "India",
        gameId: "clzhu8loo0000l509pxo5tn0f",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0nc4uic000omd033qf5s7dr",
        country: "ALL",
        gameId: "clzi1nawh0000kz094cc5xgan",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm0nc4uic000pmd039se8sumz",
        country: "Thailand",
        gameId: "clzi1nawh0000kz094cc5xgan",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06f9nzn000bmj03pdn6ekbh",
        country: "All",
        gameId: "clzjfj2l60000l9096s7q89l9",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06f9nzn000cmj03qgtb9r1m",
        country: "Thailand",
        gameId: "clzjfj2l60000l9096s7q89l9",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06f9nzn000dmj03p8wx75iz",
        country: "Canada",
        gameId: "clzjfj2l60000l9096s7q89l9",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fbf0z000pmj03ilry1961",
        country: "ALL",
        gameId: "clzi8xf540000mk09uc48mo4v",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fbf0z000qmj03ke787ln9",
        country: "India",
        gameId: "clzi8xf540000mk09uc48mo4v",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fbf0z000rmj03xpv9wgta",
        country: "Philippines",
        gameId: "clzi8xf540000mk09uc48mo4v",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fbf0z000smj03og0nzran",
        country: "South Korea",
        gameId: "clzi8xf540000mk09uc48mo4v",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fbf0z000tmj03y1rzo3ap",
        country: "United Kingdom",
        gameId: "clzi8xf540000mk09uc48mo4v",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fbf0z000umj032r4f5bve",
        country: "Brazil",
        gameId: "clzi8xf540000mk09uc48mo4v",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fbf0z000vmj03mc3ilp7g",
        country: "United Arab Emirates",
        gameId: "clzi8xf540000mk09uc48mo4v",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fbf0z000wmj03s4rjs9y1",
        country: "Australia",
        gameId: "clzi8xf540000mk09uc48mo4v",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fbf0z000xmj03red8lu8t",
        country: "South Africa",
        gameId: "clzi8xf540000mk09uc48mo4v",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fbf0z000ymj03mn0oo7un",
        country: "Canada",
        gameId: "clzi8xf540000mk09uc48mo4v",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fd2cs001amj035x9vr0mj",
        country: "ALL",
        gameId: "clzi8qshv004yjt09fk1xbjst",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fd2cs001bmj03bwn06dx6",
        country: "Philippines",
        gameId: "clzi8qshv004yjt09fk1xbjst",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fd2cs001cmj03on4yngww",
        country: "South Korea",
        gameId: "clzi8qshv004yjt09fk1xbjst",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fd2cs001dmj030doe4lz2",
        country: "India",
        gameId: "clzi8qshv004yjt09fk1xbjst",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fd2cs001emj03wsd1hzhk",
        country: "United Kingdom",
        gameId: "clzi8qshv004yjt09fk1xbjst",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fd2cs001fmj03czm3mmmr",
        country: "Brazil",
        gameId: "clzi8qshv004yjt09fk1xbjst",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fd2cs001gmj03soj4oxt1",
        country: "United Arab Emirates",
        gameId: "clzi8qshv004yjt09fk1xbjst",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fd2cs001hmj03e5z1n9eb",
        country: "Australia",
        gameId: "clzi8qshv004yjt09fk1xbjst",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fd2cs001imj03wdq3gvpb",
        country: "South Africa",
        gameId: "clzi8qshv004yjt09fk1xbjst",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fd2cs001jmj036qg2wa84",
        country: "Canada",
        gameId: "clzi8qshv004yjt09fk1xbjst",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdgeg001umj03zfnl97m4",
        country: "ALL",
        gameId: "clzi3wqh00081l309cffd3r02",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdgeg001vmj03zppyk12v",
        country: "Philippines",
        gameId: "clzi3wqh00081l309cffd3r02",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdgeg001wmj03rud51b57",
        country: "South Korea",
        gameId: "clzi3wqh00081l309cffd3r02",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdgeg001xmj03mi296qz9",
        country: "India",
        gameId: "clzi3wqh00081l309cffd3r02",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdgeg001ymj03tx0fqwll",
        country: "United Kingdom",
        gameId: "clzi3wqh00081l309cffd3r02",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdgeg001zmj03ywggestf",
        country: "Brazil",
        gameId: "clzi3wqh00081l309cffd3r02",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdgeg0020mj03oowcqa5u",
        country: "United Arab Emirates",
        gameId: "clzi3wqh00081l309cffd3r02",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdgeg0021mj0305xecd2l",
        country: "Australia",
        gameId: "clzi3wqh00081l309cffd3r02",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdgeg0022mj03j9xb9wsv",
        country: "South Africa",
        gameId: "clzi3wqh00081l309cffd3r02",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdgeg0023mj03mrvtm30h",
        country: "Canada",
        gameId: "clzi3wqh00081l309cffd3r02",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdpm4002emj03348hu747",
        country: "ALL",
        gameId: "clzi4b56r000cl709ef4btv0j",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdpm4002fmj031aruy66c",
        country: "Philippines",
        gameId: "clzi4b56r000cl709ef4btv0j",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdpm4002gmj03jxbhtjkg",
        country: "South Korea",
        gameId: "clzi4b56r000cl709ef4btv0j",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdpm4002hmj03yvedfwh2",
        country: "India",
        gameId: "clzi4b56r000cl709ef4btv0j",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdpm4002imj03tkwqoscp",
        country: "United Kingdom",
        gameId: "clzi4b56r000cl709ef4btv0j",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdpm4002jmj03lh0r1srl",
        country: "Brazil",
        gameId: "clzi4b56r000cl709ef4btv0j",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdpm4002kmj0392wrk2v1",
        country: "United Arab Emirates",
        gameId: "clzi4b56r000cl709ef4btv0j",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdpm4002lmj03nsa2kajx",
        country: "Australia",
        gameId: "clzi4b56r000cl709ef4btv0j",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdpm4002mmj03lnvz0h6h",
        country: "South Africa",
        gameId: "clzi4b56r000cl709ef4btv0j",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdpm4002nmj03tgfomrld",
        country: "Canada",
        gameId: "clzi4b56r000cl709ef4btv0j",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdygp002ymj03aax51730",
        country: "ALL",
        gameId: "cm0693uvj0024l503sugpyy6u",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdygp002zmj032renbgwo",
        country: "Philippines",
        gameId: "cm0693uvj0024l503sugpyy6u",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdygp0030mj03k1kln6zu",
        country: "South Korea",
        gameId: "cm0693uvj0024l503sugpyy6u",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdygp0031mj03ecvzsoiz",
        country: "India",
        gameId: "cm0693uvj0024l503sugpyy6u",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdygp0032mj0397e48oxe",
        country: "United Kingdom",
        gameId: "cm0693uvj0024l503sugpyy6u",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdygp0033mj034lil7ey6",
        country: "Brazil",
        gameId: "cm0693uvj0024l503sugpyy6u",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdygp0034mj03efgteumu",
        country: "United Arab Emirates",
        gameId: "cm0693uvj0024l503sugpyy6u",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdygp0035mj03e6sn7yok",
        country: "Australia",
        gameId: "cm0693uvj0024l503sugpyy6u",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdygp0036mj03vyth4gnh",
        country: "South Africa",
        gameId: "cm0693uvj0024l503sugpyy6u",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fdygp0037mj03i75rodp8",
        country: "Canada",
        gameId: "cm0693uvj0024l503sugpyy6u",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fe7jk003imj03c5uge663",
        country: "ALL",
        gameId: "clzi4ptnx000ul709zx3uo4ud",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fe7jk003jmj0355answc6",
        country: "Philippines",
        gameId: "clzi4ptnx000ul709zx3uo4ud",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fe7jk003kmj03yh333wny",
        country: "South Korea",
        gameId: "clzi4ptnx000ul709zx3uo4ud",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fe7jk003lmj03v3uba1qa",
        country: "India",
        gameId: "clzi4ptnx000ul709zx3uo4ud",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fe7jk003mmj03hys4u59a",
        country: "United Kingdom",
        gameId: "clzi4ptnx000ul709zx3uo4ud",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fe7jk003nmj03fxgqkc5e",
        country: "Brazil",
        gameId: "clzi4ptnx000ul709zx3uo4ud",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fe7jk003omj03figf9op0",
        country: "United Arab Emirates",
        gameId: "clzi4ptnx000ul709zx3uo4ud",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fe7jk003pmj039ht3n9uj",
        country: "Australia",
        gameId: "clzi4ptnx000ul709zx3uo4ud",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fe7jk003qmj03plm2mz0i",
        country: "South Africa",
        gameId: "clzi4ptnx000ul709zx3uo4ud",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fe7jk003rmj03tzqi6s01",
        country: "Canada",
        gameId: "clzi4ptnx000ul709zx3uo4ud",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fegti0042mj0360jgqlmy",
        country: "ALL",
        gameId: "clzi4tahh0016l709ky8k7vlk",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fegti0043mj03csdug61x",
        country: "Philippines",
        gameId: "clzi4tahh0016l709ky8k7vlk",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fegti0044mj030mlo00of",
        country: "South Korea",
        gameId: "clzi4tahh0016l709ky8k7vlk",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fegti0045mj037ghh692s",
        country: "India",
        gameId: "clzi4tahh0016l709ky8k7vlk",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fegti0046mj032r788xs7",
        country: "United Kingdom",
        gameId: "clzi4tahh0016l709ky8k7vlk",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fegti0047mj03guv2vog6",
        country: "Brazil",
        gameId: "clzi4tahh0016l709ky8k7vlk",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fegti0048mj03lq5mavcd",
        country: "",
        gameId: "clzi4tahh0016l709ky8k7vlk",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fegti0049mj030p4q82it",
        country: "Australia",
        gameId: "clzi4tahh0016l709ky8k7vlk",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fegti004amj03fpkhucmv",
        country: "South Africa",
        gameId: "clzi4tahh0016l709ky8k7vlk",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fegti004bmj03mn695qm5",
        country: "Canada",
        gameId: "clzi4tahh0016l709ky8k7vlk",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fenoh004mmj035ewrrbt5",
        country: "ALL",
        gameId: "clzi7emke001ljt09mhufwjv5",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fenoh004nmj030etokv0t",
        country: "Philippines",
        gameId: "clzi7emke001ljt09mhufwjv5",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fenoh004omj03dev8g77j",
        country: "South Korea",
        gameId: "clzi7emke001ljt09mhufwjv5",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fenoh004pmj03182dksxp",
        country: "India",
        gameId: "clzi7emke001ljt09mhufwjv5",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fenoh004qmj038965n72u",
        country: "United Kingdom",
        gameId: "clzi7emke001ljt09mhufwjv5",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fenoh004rmj031lcafsg3",
        country: "Brazil",
        gameId: "clzi7emke001ljt09mhufwjv5",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fenoh004smj03i3h8okqb",
        country: "United Arab Emirates",
        gameId: "clzi7emke001ljt09mhufwjv5",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fenoh004tmj03jxsve8z8",
        country: "Australia",
        gameId: "clzi7emke001ljt09mhufwjv5",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fenoh004umj039w6ycbp0",
        country: "South Africa",
        gameId: "clzi7emke001ljt09mhufwjv5",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fenoh004vmj0370lhajrz",
        country: "Canada",
        gameId: "clzi7emke001ljt09mhufwjv5",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fewaf0056mj038rfk0p4f",
        country: "ALL",
        gameId: "clzi7i0o5001xjt097vt4105p",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fewaf0057mj03ivs0tnps",
        country: "Philippines",
        gameId: "clzi7i0o5001xjt097vt4105p",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fewaf0058mj0334rczyyh",
        country: "South Korea",
        gameId: "clzi7i0o5001xjt097vt4105p",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fewaf0059mj0372zq0mpo",
        country: "India",
        gameId: "clzi7i0o5001xjt097vt4105p",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fewaf005amj03pfjoqdl0",
        country: "United Kingdom",
        gameId: "clzi7i0o5001xjt097vt4105p",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fewaf005bmj03qp60rvdb",
        country: "Brazil",
        gameId: "clzi7i0o5001xjt097vt4105p",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fewaf005cmj03f1zkg5uw",
        country: "United Arab Emirates",
        gameId: "clzi7i0o5001xjt097vt4105p",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fewaf005dmj033t41hqi0",
        country: "Australia",
        gameId: "clzi7i0o5001xjt097vt4105p",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fewaf005emj030y4p2ecf",
        country: "South Africa",
        gameId: "clzi7i0o5001xjt097vt4105p",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
    await prisma.targetCountryByIP.create({
      data: {
        id: "cm06fewaf005fmj037uc3ozfw",
        country: "Canada",
        gameId: "clzi7i0o5001xjt097vt4105p",
        demoLinkByCountry: "demo-link-by-country",
      },
    });
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
