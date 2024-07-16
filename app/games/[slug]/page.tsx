import { PrismaClient } from '@prisma/client';

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
    <div className='text-white'>
      <h1>{game.name}</h1>
      <img src={game.thumbnailUrl} alt={game.name} />
      <p>{game.description}</p>
      <p>Genre: {game.genre}</p>
      <p>Volatility: {game.volatility}</p>
      <p>Max Win: {game.maxWin}</p>
      {/* Include more fields as necessary */}
    </div>
  );
}
