import { PrismaClient, Game } from '@prisma/client';
import GameListWithFilter from '../../components/games/GameListWithFilter';

const prisma = new PrismaClient();

export const revalidate = 1111110; // Revalidate data every 60 seconds

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

  if (genres.length > 0) {
    where.genre = { in: genres };
  }

  if (languages.length > 0) {
    where.languageInfo = {
      some: {
        language: { in: languages },
      },
    };
  }

  if (countries.length > 0) {
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
