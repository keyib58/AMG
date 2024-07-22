import { PrismaClient, Game } from '@prisma/client';
import GameListWithFilter from '../../components/games/GameListWithFilter';

const prisma = new PrismaClient();

export default async function GamesPage({ searchParams }: { searchParams: { [key: string]: string } }) {
  const genre = searchParams.genre ? searchParams.genre.split(',') : [];
  const language = searchParams.language ? searchParams.language.split(',') : [];
  const country = searchParams.country ? searchParams.country.split(',') : [];
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

  const countries = await prisma.targetCountryByIP.findMany({
    distinct: ['country'],
    select: { country: true },
  });

  const initialGames = await getFilteredGames(genre, language, sort, search, country);

  return (
    <GameListWithFilter
      genres={genres}
      languages={languages}
      countries={countries}
      initialGames={initialGames}
      initialGenres={genre}
      initialLanguages={language}
      initialCountries={country}
      initialSort={sort}
      initialSearch={search}
    />
  );
}

async function getFilteredGames(
  genres: string[],
  languages: string[],
  sort: string | null,
  search: string | null,
  countries: string[]
): Promise<(Game & {
  tags: { id: string; name: string }[];
  languageInfo: { id: string; language: string; trailerLink: string; demoLink: string }[];
  targetCountriesByIP: { id: string; country: string }[];
})[]> {
  const where: any = {};

  // Only apply genre filter if it's not set to 'All'
  if (genres.length > 0 && !(genres.length === 1 && genres[0] === 'All')) {
    where.genre = { in: genres };
  }

  // Only apply language filter if it's not set to 'All'
  if (languages.length > 0 && !(languages.length === 1 && languages[0] === 'All')) {
    where.languageInfo = {
      some: {
        language: { in: languages },
      },
    };
  }

  // Only apply country filter if it's not set to 'All'
  if (countries.length > 0 && !(countries.length === 1 && countries[0] === 'All')) {
    where.targetCountriesByIP = {
      some: {
        country: { in: countries },
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
      targetCountriesByIP: true,
    },
  });

  return games;
}
