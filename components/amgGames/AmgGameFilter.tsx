'use client';

import { useEffect, useState } from 'react';
import { GameFilter } from 'types/amg';
import { motion } from 'framer-motion';
import { PlusIcon, MinusIcon } from 'lucide-react';
import { games } from '@/lib/gameData';

type AmgGameFilterProps = {
  onFilterChange: (filters: GameFilter) => void;
  selectedMarkets: string[];
  setSelectedMarkets: React.Dispatch<React.SetStateAction<string[]>>;
  selectedLanguages: string[];
  setSelectedLanguages: React.Dispatch<React.SetStateAction<string[]>>;
  selectedGenres: string[];
  setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>;
};

const variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0, overflow: 'hidden' },
};

const iconVariants = {
  open: { rotate: 0 },
  closed: { rotate: 180 },
};

const AmgGameFilter = ({
  onFilterChange,
  selectedMarkets,
  setSelectedMarkets,
  selectedLanguages,
  setSelectedLanguages,
  selectedGenres,
  setSelectedGenres,
}: AmgGameFilterProps) => {
  // Expand/Collapse state for each filter group
  const [isMarketOpen, setIsMarketOpen] = useState(true);
  const [isLanguageOpen, setIsLanguageOpen] = useState(true);
  const [isGenreOpen, setIsGenreOpen] = useState(true);

  // Helper function to handle "All" selection
  const handleAllSelection = (setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter(['All']);
  };

  // Handle checkbox changes
  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    selectedValues: string[]
  ) => {
    const { value, checked } = event.target;

    if (value === 'All') {
      setter(checked ? ['All'] : []); // Only allow "All" if checked, otherwise reset
    } else {
      // Remove 'All' if other values are selected
      const updatedValues = checked
        ? [...selectedValues.filter(val => val !== 'All'), value] // Deselect "All" if other values selected
        : selectedValues.filter(val => val !== value);

      setter(updatedValues.length ? updatedValues : ['All']); // If nothing is selected, default to 'All'
    }
  };

  // Update filter whenever selected filters change
  useEffect(() => {
    onFilterChange({
      market: selectedMarkets,
      language: selectedLanguages,
      genre: selectedGenres,
    });
  }, [selectedMarkets, selectedLanguages, selectedGenres, onFilterChange]);

  // Extract unique values from game data
  const getUniqueValues = (key: keyof typeof games[0]) => {
    return [...new Set(games.flatMap(game => game[key]))];
  };

  // Unique options for the filters
  const markets = getUniqueValues('market') as string[];
  const languages = getUniqueValues('language') as string[];
  const genres = getUniqueValues('genre') as string[];

  // Check if the value is checked
  const isChecked = (selectedValues: string[], value: string) => selectedValues.includes(value);

  return (
    <div className="rounded-lg">
      {/* Market Filter */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-white text-xl mb-2">Market</h3>
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
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                value="All" // Explicitly set the value to "All"
                checked={selectedMarkets.includes('All')}
                onChange={() => handleAllSelection(setSelectedMarkets)}
                className="mr-4 rounded border-2 border-[#ffffff] bg-transparent checked:bg-[#0d0d0d] checked:border-[#ffffff] appearance-none hover:bg-[#1a1a1a] active:bg-[#1a1a1a]"
              />
              <span className="text-white text-lg">All</span>
            </label>
            {markets.map(market => (
              <label className="flex items-center" key={market}>
                <input
                  type="checkbox"
                  value={market} // Explicitly set the value to the market name
                  checked={isChecked(selectedMarkets, market)}
                  onChange={(e) => handleCheckboxChange(e, setSelectedMarkets, selectedMarkets)}
                  className="mr-4 rounded border-2 border-[#ffffff] bg-transparent checked:bg-[#0d0d0d] checked:border-[#ffffff] appearance-none hover:bg-[#1a1a1a] active:bg-[#1a1a1a]"
                />
                <span className="text-white text-lg">{market}</span>
              </label>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Language Filter */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-white text-xl mb-2">Language</h3>
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
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                value="All" // Explicitly set the value to "All"
                checked={selectedLanguages.includes('All')}
                onChange={() => handleAllSelection(setSelectedLanguages)}
                className="mr-4 rounded border-2 border-[#ffffff] bg-transparent checked:bg-[#0d0d0d] checked:border-[#ffffff] appearance-none hover:bg-[#1a1a1a] active:bg-[#1a1a1a]"
              />
              <span className="text-white text-lg">All</span>
            </label>
            {languages.map(language => (
              <label className="flex items-center" key={language}>
                <input
                  type="checkbox"
                  value={language} // Explicitly set the value to the language name
                  checked={isChecked(selectedLanguages, language)}
                  onChange={(e) => handleCheckboxChange(e, setSelectedLanguages, selectedLanguages)}
                  className="mr-4 rounded border-2 border-[#ffffff] bg-transparent checked:bg-[#0d0d0d] checked:border-[#ffffff] appearance-none hover:bg-[#1a1a1a] active:bg-[#1a1a1a]"
                />
                <span className="text-white text-lg">{language}</span>
              </label>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Genre Filter */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-white text-xl mb-2">Genre</h3>
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
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                value="All" // Explicitly set the value to "All"
                checked={selectedGenres.includes('All')}
                onChange={() => handleAllSelection(setSelectedGenres)}
                className="mr-4 rounded border-2 border-[#ffffff] bg-transparent checked:bg-[#0d0d0d] checked:border-[#ffffff] appearance-none hover:bg-[#1a1a1a] active:bg-[#1a1a1a]"
              />
              <span className="text-white text-lg">All</span>
            </label>
            {genres.map(genre => (
              <label className="flex items-center" key={genre}>
                <input
                  type="checkbox"
                  value={genre} // Explicitly set the value to the genre name
                  checked={isChecked(selectedGenres, genre)}
                  onChange={(e) => handleCheckboxChange(e, setSelectedGenres, selectedGenres)}
                  className="mr-4 rounded border-2 border-[#ffffff] bg-transparent checked:bg-[#0d0d0d] checked:border-[#ffffff] appearance-none hover:bg-[#1a1a1a] active:bg-[#1a1a1a]"
                />
                <span className="text-white text-lg">{genre}</span>
              </label>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AmgGameFilter;
