// app/games/[slug]/page.tsx

import { PrismaClient } from '@prisma/client';
import GameInfo from '@/components/game_detail/gameInfo';
import { Game } from 'types/type';

const prisma = new PrismaClient();

export default async function GamePage({ params }: { params: { slug: string } }) {
  const game = await prisma.game.findUnique({
    where: { slug: params.slug },
    include: {
      tags: true,
      languageInfo: true,
    },
  });

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
      <GameInfo game={game as Game} />
  );
}
