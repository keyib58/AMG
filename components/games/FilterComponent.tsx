'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PlusIcon, MinusIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { setSelectedGenres, setSelectedLanguages, setSelectedMarkets, setFiltering, resetFilters } from '@/app/slices/filterSlice';
import { FilterComponentProps } from 'types/type';
import FilterByIP from './DetectUserIP';
import { sortLanguages } from '@/lib/utils'; // Import the sortLanguages function

const variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0, overflow: 'hidden' },
};

const iconVariants = {
  open: { rotate: 0 },
  closed: { rotate: 180 },
};

const FilterComponent: React.FC<FilterComponentProps & { setIsFilterVisible: (visible: boolean) => void, isFilterVisible: boolean }> = ({
  genres,
  languages,
  markets,
  currentGenres,
  currentLanguages,
  currentMarkets,
  setIsFilterVisible,
  isFilterVisible,
}) => {
  const dispatch = useAppDispatch();
  const { selectedGenres, selectedLanguages, selectedMarkets } = useAppSelector((state) => state.filter);

  const [isGenreOpen, setIsGenreOpen] = useState(true);
  const [isLanguageOpen, setIsLanguageOpen] = useState(true);
  const [isMarketOpen, setIsMarketOpen] = useState(true);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    dispatch(setSelectedGenres(currentGenres));
    dispatch(setSelectedLanguages(currentLanguages));
    dispatch(setSelectedMarkets(currentMarkets));
  }, [currentGenres, currentLanguages, currentMarkets, dispatch]);

  useEffect(() => {
    const genreParam = searchParams.get('genre');
    const languageParam = searchParams.get('language');
    const marketParam = searchParams.get('market');

    if (genreParam) {
      dispatch(setSelectedGenres(genreParam.split(',')));
    }
    if (languageParam) {
      dispatch(setSelectedLanguages(languageParam.split(',')));
    }
    if (marketParam) {
      dispatch(setSelectedMarkets(marketParam.split(',')));
    }
  }, [dispatch, searchParams]);

  const toggleFilter = (type: string, value: string) => {
    let updatedValues: string[] = [];
    dispatch(setFiltering(true));
    if (type === 'genre') {
      if (value === 'All') {
        updatedValues = ['All'];
      } else {
        updatedValues = selectedGenres.includes(value)
          ? selectedGenres.filter((v) => v !== value)
          : [...selectedGenres.filter((v) => v !== 'All'), value];
        if (updatedValues.length === 0) {
          updatedValues = ['All'];
        }
      }
      dispatch(setSelectedGenres(updatedValues));
    } else if (type === 'language') {
      if (value === 'All') {
        updatedValues = ['All'];
      } else {
        updatedValues = selectedLanguages.includes(value)
          ? selectedLanguages.filter((v) => v !== value)
          : [...selectedLanguages.filter((v) => v !== 'All'), value];
        if (updatedValues.length === 0) {
          updatedValues = ['All'];
        }
      }
      dispatch(setSelectedLanguages(updatedValues));
    } else if (type === 'market') {
      if (value === 'All') {
        updatedValues = ['All'];
      } else {
        updatedValues = selectedMarkets.includes(value)
          ? selectedMarkets.filter((v) => v !== value)
          : [...selectedMarkets.filter((v) => v !== 'All'), value];
        if (updatedValues.length === 0) {
          updatedValues = ['All'];
        }
      }
      dispatch(setSelectedMarkets(updatedValues));
    }

    const params = new URLSearchParams(window.location.search);
    if (updatedValues.length > 0 && updatedValues[0] !== 'All') {
      params.set(type, updatedValues.join(','));
    } else {
      params.set(type, 'All');
    }
    params.delete('search');

    router.replace(`${window.location.pathname}?${params.toString()}`, { scroll: false });
    dispatch(setFiltering(false));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
    setIsFilterVisible(true);
    router.replace(`${window.location.pathname}?`, { scroll: false });
  };

  const applyFilters = () => {
    setIsFilterVisible(false);
  };

  const isChecked = (type: string, value: string) => {
    if (type === 'genre') {
      return selectedGenres.includes(value);
    } else if (type === 'language') {
      return selectedLanguages.includes(value);
    } else if (type === 'market') {
      return selectedMarkets.includes(value);
    }
    return false;
  };

  return (
    <div className="rounded-lg mb-4 lg:mt-[100px]">
      <FilterByIP />
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h4 className="mb-2 Montserrat text-[#FFD868] text-[1.7rem] font-extrabold uppercase">Genre</h4>
          <motion.button
            onClick={() => setIsGenreOpen(!isGenreOpen)}
            className="text-white"
            initial={false}
            animate={isGenreOpen ? 'open' : 'closed'}
            variants={iconVariants}
            transition={{ duration: 0.3 }}
          >
            {isGenreOpen ? <MinusIcon size={24} /> : <PlusIcon size={24} />}
          </motion.button>
        </div>
        <motion.div
          initial={false}
          animate={isGenreOpen ? 'open' : 'closed'}
          variants={variants}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="genre-All"
              checked={isChecked('genre', 'All')}
              onChange={() => toggleFilter('genre', 'All')}
              className="mr-4 rounded border-2 border-[#ffffff] bg-transparent checked:bg-[#0d0d0d] checked:border-[#ffffff] appearance-none hover:bg-[#1a1a1a] active:bg-[#1a1a1a]"
            />
            <label className="text-white OpenSans text-lg" htmlFor="genre-All">
              All
            </label>
          </div>
          {genres
            .sort((a, b) => a.genre.localeCompare(b.genre))
            .map((genre) => (
              <div key={genre.genre} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`genre-${genre.genre}`}
                  checked={isChecked('genre', genre.genre)}
                  onChange={() => toggleFilter('genre', genre.genre)}
                  className="mr-4 rounded border-2 border-[#ffffff] bg-transparent checked:bg-[#0d0d0d] checked:border-[#ffffff] appearance-none hover:bg-[#1a1a1a] active:bg-[#1a1a1a]"
                />
                <label className="text-white OpenSans text-lg" htmlFor={`genre-${genre.genre}`}>
                  {genre.genre}
                </label>
              </div>
            ))}
        </motion.div>
      </div>
      <div className="lg:mt-20 mt-[50px]">
        <div className="flex justify-between items-center">
          <h4 className="mb-2 Montserrat text-[#FFD868] text-[1.7rem] font-extrabold uppercase">Game Language</h4>
          <motion.button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="text-white"
            initial={false}
            animate={isLanguageOpen ? 'open' : 'closed'}
            variants={iconVariants}
            transition={{ duration: 0.3 }}
          >
            {isLanguageOpen ? <MinusIcon size={24} /> : <PlusIcon size={24} />}
          </motion.button>
        </div>
        <motion.div
          initial={false}
          animate={isLanguageOpen ? 'open' : 'closed'}
          variants={variants}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="language-All"
              checked={isChecked('language', 'All')}
              onChange={() => toggleFilter('language', 'All')}
              className="mr-4 rounded border-2 border-[#ffffff] bg-transparent checked:bg-[#0d0d0d] checked:border-[#ffffff] appearance-none hover:bg-[#1a1a1a] active:bg-[#1a1a1a]"
            />
            <label className="text-white OpenSans text-lg" htmlFor="language-All">
              All
            </label>
          </div>
          {sortLanguages(languages).map((language) => (
            <div key={language.language} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`language-${language.language}`}
                checked={isChecked('language', language.language)}
                onChange={() => toggleFilter('language', language.language)}
                className="mr-4 rounded border-2 border-[#ffffff] bg-transparent checked:bg-[#0d0d0d] checked:border-[#ffffff] appearance-none hover:bg-[#1a1a1a] active:bg-[#1a1a1a]"
              />
              <label className="text-white OpenSans text-lg" htmlFor={`language-${language.language}`}>
                {language.language}
              </label>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="lg:mt-20 mt-[50px]">
        <div className="flex justify-between items-center">
          <h4 className="mb-2 Montserrat text-[#FFD868] text-[1.7rem] font-extrabold uppercase">Market</h4>
          <motion.button
            onClick={() => setIsMarketOpen(!isMarketOpen)}
            className="text-white"
            initial={false}
            animate={isMarketOpen ? 'open' : 'closed'}
            variants={iconVariants}
            transition={{ duration: 0.3 }}
          >
            {isMarketOpen ? <MinusIcon size={24} /> : <PlusIcon size={24} />}
          </motion.button>
        </div>
        <motion.div
          initial={false}
          animate={isMarketOpen ? 'open' : 'closed'}
          variants={variants}
          transition={{ duration: 0.3 }}
        >
          {markets
            .sort((a, b) => {
              if (a.market === 'Other') return 1;
              if (b.market === 'Other') return -1;
              return a.market.localeCompare(b.market);
            })
            .map((market) => (
              <div key={market.market} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`market-${market.market}`}
                  checked={isChecked('market', market.market)}
                  onChange={() => toggleFilter('market', market.market)}
                  className="mr-4 rounded border-2 border-[#ffffff] bg-transparent checked:bg-[#0d0d0d] checked:border-[#ffffff] appearance-none hover:bg-[#1a1a1a] active:bg-[#1a1a1a]"
                />
                <label className="text-white OpenSans text-lg" htmlFor={`market-${market.market}`}>
                  {market.market}
                </label>
              </div>
            ))}
        </motion.div>
      </div>

      {/* Apply Filter and Reset Filter Buttons - Visible only on Tablet and Mobile */}
      <div className="lg:hidden flex justify-between mt-8 gap-4">
        <button
          onClick={handleResetFilters}
          className="gradientOutlineBtn"
        >
          Reset Filter
        </button>
        <button
          onClick={applyFilters}
          className="bgGradientBtn "
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
