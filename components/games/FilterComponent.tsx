'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PlusIcon, MinusIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FilterComponentProps {
  genres: { genre: string }[];
  languages: { language: string }[];
  currentGenre: string | null;
  currentLanguage: string | null;
}

const variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0, overflow: 'hidden' },
};

const iconVariants = {
  open: { rotate: 0 },
  closed: { rotate: 180 },
};

export default function FilterComponent({ genres, languages, currentGenre, currentLanguage }: FilterComponentProps) {
  const [isGenreOpen, setIsGenreOpen] = useState(true);
  const [isLanguageOpen, setIsLanguageOpen] = useState(true);
  const router = useRouter();

  const toggleFilter = (type: string, value: string) => {
    const params = new URLSearchParams(window.location.search);
    if (params.get(type) === value) {
      params.delete(type);
    } else {
      params.set(type, value);
    }
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  return (
    <div className="rounded-lg mb-4 mt-[100px]">
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h4 className="mb-2 Montserrat text-[#FFD868] text-[2rem]">
            Genre
          </h4>
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
          {genres.map((genre) => (
            <div key={genre.genre} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`genre-${genre.genre}`}
                checked={currentGenre === genre.genre}
                onChange={() => toggleFilter('genre', genre.genre)}
                className="mr-4 rounded bg-transparent border-2 border-[#ffffff]"
              />
              <label className="text-white filterText text-lg" htmlFor={`genre-${genre.genre}`}>
                {genre.genre}
              </label>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="mt-20">
        <div className="flex justify-between items-center">
          <h4 className="mb-2 Montserrat text-[#FFD868] text-[2rem]">
            Language
          </h4>
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
          {languages.map((language) => (
            <div key={language.language} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`language-${language.language}`}
                checked={currentLanguage === language.language}
                onChange={() => toggleFilter('language', language.language)}
                className="mr-4 rounded bg-transparent border-2 border-[#ffffff]"
              />
              <label className="text-white filterText text-lg" htmlFor={`language-${language.language}`}>
                {language.language}
              </label>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
