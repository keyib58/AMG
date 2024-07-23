import { PrismaClient, Game } from '@prisma/client';
import GameListWithFilter from '../../components/games/GameListWithFilter';
import { countryMarketMap, mapCountryToMarket } from 'utils/mapCountryToMarket';

const prisma = new PrismaClient();

export default async function GamesPage({ searchParams }: { searchParams: { [key: string]: string } }) {
  const genre = searchParams.genre ? searchParams.genre.split(',') : [];
  const language = searchParams.language ? searchParams.language.split(',') : [];
  const market = searchParams.market ? searchParams.market.split(',') : [];
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

  const markets = Array.from(new Set(countries.map(country => mapCountryToMarket(country.country)))).map(market => ({ market }));

  const initialGames = await getFilteredGames(genre, language, sort, search, market);

  return (
    <GameListWithFilter
      genres={genres}
      languages={languages}
      markets={markets}
      initialGames={initialGames}
      initialGenres={genre}
      initialLanguages={language}
      initialMarkets={market}
      initialSort={sort}
      initialSearch={search} currentSort={''}    />
  );
}

async function getFilteredGames(
  genres: string[],
  languages: string[],
  sort: string | null,
  search: string | null,
  markets: string[]
): Promise<(Game & {
  tags: { id: string; name: string }[];
  languageInfo: { id: string; language: string; trailerLink: string; demoLink: string }[];
  targetCountriesByIP: { id: string; country: string }[];
})[]> {
  const where: any = {};

  if (genres.length > 0 && !(genres.length === 1 && genres[0] === 'All')) {
    where.genre = { in: genres };
  }

  if (languages.length > 0 && !(languages.length === 1 && languages[0] === 'All')) {
    where.languageInfo = {
      some: {
        language: { in: languages },
      },
    };
  }

  if (markets.length > 0 && !(markets.length === 1 && markets[0] === 'All')) {
    where.targetCountriesByIP = {
      some: {
        country: { in: markets.flatMap(market => {
          const marketCountryMap = Object.entries(countryMarketMap).filter(([_, marketValue]) => marketValue === market);
          return marketCountryMap.map(([country]) => country);
        }) },
      },
    };
  }

  if (search) {
    where.OR = [
      { name: { contains: search } },
      { tags: { some: { name: { contains: search } } } },
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
