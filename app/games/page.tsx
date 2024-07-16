import { PrismaClient, Game } from '@prisma/client';
import GameListing from '../../components/games/GameListing';
import FilterComponent from '../../components/games/FilterComponent';
import SortComponent from '../../components/games/SortComponent';
import SearchComponent from '../../components/games/SearchComponent';

const prisma = new PrismaClient();

export default async function GamesPage({ searchParams }: { searchParams: { [key: string]: string } }) {
  const genre = searchParams.genre || null;
  const language = searchParams.language || null;
  const sort = searchParams.sort || 'latest';
  const search = searchParams.search || null;

  const genres = await prisma.game.findMany({
    distinct: ['genre'],
    select: { genre: true },
  });

  const languages = await prisma.languageInfo.findMany({
    distinct: ['language'],
    select: { language: true },
  });

  const initialGames = await getFilteredGames(genre, language, sort, search);

  return (
    <div className="z-5 mx-5 flex max-w-[1320px] w-full">
      <div className="w-1/4 p-4">
        <SortComponent currentSort={sort} />
        <FilterComponent genres={genres} languages={languages} currentGenre={genre} currentLanguage={language} />
      </div>
      <div className="w-3/4 p-4">
        <SearchComponent currentSearch={search} />
        <GameListing games={initialGames} />
      </div>
    </div>
  );
}

async function getFilteredGames(
  genre: string | null,
  language: string | null,
  sort: string | null,
  search: string | null
): Promise<(Game & {
  tags: { id: string; name: string }[];
  languageInfo: { id: string; language: string; trailerLink: string; demoLink: string }[];
})[]> {
  const where: any = {};

  if (genre) {
    where.genre = genre;
  }

  if (language) {
    where.languageInfo = {
      some: {
        language: language,
      },
    };
  }

  if (search) {
    where.OR = [
      {
        name: {
          contains: search,
        },
      },
      {
        tags: {
          some: {
            name: {
              contains: search,
            },
          },
        },
      },
    ];
  }

  const orderBy: any = {};

  if (sort === 'alphabetical') {
    orderBy.name = 'asc';
  } else if (sort === 'popular') {
    orderBy.popularRank = 'asc';
  } else if (sort === 'latest') {
    orderBy.releaseDate = 'desc';
  }

  const games = await prisma.game.findMany({
    where,
    orderBy,
    include: {
      tags: true,
      languageInfo: true,
    },
  });

  return games;
}
