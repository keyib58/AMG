'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { PlusIcon, MinusIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { setSelectedGenres, setSelectedLanguages, setSelectedCountries, setFiltering } from '@/app/slices/filterSlice';
import { FilterComponentProps } from 'types/type';

const variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0, overflow: 'hidden' },
};

const iconVariants = {
  open: { rotate: 0 },
  closed: { rotate: 180 },
};

export default function FilterComponent({
  genres,
  languages,
  countries,
  currentGenres,
  currentLanguages,
  currentCountries,
  setFiltering,
}: FilterComponentProps) {
  const dispatch = useAppDispatch();
  const { selectedGenres, selectedLanguages, selectedCountries } = useAppSelector((state) => state.filter);

  const [isGenreOpen, setIsGenreOpen] = useState(true);
  const [isLanguageOpen, setIsLanguageOpen] = useState(true);
  const [isCountryOpen, setIsCountryOpen] = useState(true);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasFetchedIP = useRef(false);

  // Initialize state from props
  useEffect(() => {
    dispatch(setSelectedGenres(currentGenres));
    dispatch(setSelectedLanguages(currentLanguages));
    dispatch(setSelectedCountries(currentCountries));
  }, [currentGenres, currentLanguages, currentCountries, dispatch]);

  // Sync state with URL parameters on mount
  useEffect(() => {
    const genreParam = searchParams.get('genre');
    const languageParam = searchParams.get('language');
    const countryParam = searchParams.get('country');

    if (genreParam) {
      dispatch(setSelectedGenres(genreParam.split(',')));
    }
    if (languageParam) {
      dispatch(setSelectedLanguages(languageParam.split(',')));
    }
    if (countryParam) {
      dispatch(setSelectedCountries(countryParam.split(',')));
    }
  }, [dispatch, searchParams]);

  useEffect(() => {
    if (pathname === '/games' && !hasFetchedIP.current) {
      fetchUserIP();
      hasFetchedIP.current = true;
    }
  }, [pathname]);

  const fetchUserIP = async () => {
    setFiltering(true);
    try {
      const response = await Promise.race([
        fetch('https://api.ipify.org?format=json'),
        new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 3000)),
      ]) as Response;

      const data = await response.json();
      console.log('User IP:', data.ip);
      FilterCountryByIP(data.ip);
    } catch (error) {
      console.error('Failed to fetch IP or timed out:', error);
      dispatch(setSelectedCountries(['All']));
      setFiltering(false);
    }
  };

  const FilterCountryByIP = async (ip: string) => {
    try {
      const response = await fetch(`https://ipapi.co/${ip}/json/`);
      const data = await response.json();
      const country = data.country_name;
      console.log('User Country:', country);

      if (country) {
        dispatch(setSelectedCountries([country]));
        const params = new URLSearchParams(window.location.search);
        params.set('country', country);
        router.replace(`${window.location.pathname}?${params.toString()}`, { scroll: false });
      }
    } catch (error) {
      console.error('Failed to filter by country:', error);
    } finally {
      console.log('Filtering done');
      setFiltering(false);
    }
  };

  const toggleFilter = (type: string, value: string) => {
    let updatedValues: string[] = [];
    setFiltering(true);
    console.log('Filtering started');

    if (type === 'genre') {
      if (value === 'All') {
        updatedValues = selectedGenres.includes(value) ? [] : ['All'];
      } else {
        updatedValues = selectedGenres.includes(value)
          ? selectedGenres.filter((v) => v !== value)
          : [...selectedGenres.filter((v) => v !== 'All'), value];
      }
      dispatch(setSelectedGenres(updatedValues));
    } else if (type === 'language') {
      if (value === 'All') {
        updatedValues = selectedLanguages.includes(value) ? [] : ['All'];
      } else {
        updatedValues = selectedLanguages.includes(value)
          ? selectedLanguages.filter((v) => v !== value)
          : [...selectedLanguages.filter((v) => v !== 'All'), value];
      }
      dispatch(setSelectedLanguages(updatedValues));
    } else if (type === 'country') {
      if (value === 'All') {
        updatedValues = ['All'];
      } else {
        updatedValues = selectedCountries.includes(value)
          ? selectedCountries.filter((v) => v !== value)
          : [...selectedCountries.filter((v) => v !== 'All'), value];
        if (updatedValues.length === 0) {
          updatedValues = ['All'];
        }
      }
      dispatch(setSelectedCountries(updatedValues));
    }

    const params = new URLSearchParams(window.location.search);
    if (updatedValues.length > 0 && updatedValues[0] !== 'All') {
      params.set(type, updatedValues.join(','));
    } else {
      params.set(type, 'All');
    }

    params.delete('search');

    router.replace(`${window.location.pathname}?${params.toString()}`, { scroll: false });
    console.log('Filtering done');
    setFiltering(false);
  };

  const isChecked = (type: string, value: string) => {
    if (type === 'genre') {
      return selectedGenres.includes(value);
    } else if (type === 'language') {
      return selectedLanguages.includes(value);
    } else if (type === 'country') {
      return selectedCountries.includes(value);
    }
    return false;
  };

  return (
    <div className="rounded-lg mb-4 mt-[100px]">
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h4 className="mb-2 Montserrat text-[#FFD868] text-[2rem]">Genre</h4>
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
          <div key="All" className="flex items-center mb-2">
            <input
              type="checkbox"
              id="genre-All"
              checked={isChecked('genre', 'All')}
              onChange={() => toggleFilter('genre', 'All')}
              className="mr-4 rounded bg-transparent border-2 border-[#ffffff]"
            />
            <label className="text-white OpenSans text-lg" htmlFor="genre-All">
              All
            </label>
          </div>
          {genres.map((genre) => (
            <div key={genre.genre} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`genre-${genre.genre}`}
                checked={isChecked('genre', genre.genre)}
                onChange={() => toggleFilter('genre', genre.genre)}
                className="mr-4 rounded bg-transparent border-2 border-[#ffffff]"
              />
              <label className="text-white OpenSans text-lg" htmlFor={`genre-${genre.genre}`}>
                {genre.genre}
              </label>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="mt-20">
        <div className="flex justify-between items-center">
          <h4 className="mb-2 Montserrat text-[#FFD868] text-[2rem]">Language</h4>
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
          <div key="All" className="flex items-center mb-2">
            <input
              type="checkbox"
              id="language-All"
              checked={isChecked('language', 'All')}
              onChange={() => toggleFilter('language', 'All')}
              className="mr-4 rounded bg-transparent border-2 border-[#ffffff]"
            />
            <label className="text-white OpenSans text-lg" htmlFor="language-All">
              All
            </label>
          </div>
          {languages.map((language) => (
            <div key={language.language} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`language-${language.language}`}
                checked={isChecked('language', language.language)}
                onChange={() => toggleFilter('language', language.language)}
                className="mr-4 rounded bg-transparent border-2 border-[#ffffff]"
              />
              <label className="text-white OpenSans text-lg" htmlFor={`language-${language.language}`}>
                {language.language}
              </label>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="mt-20">
        <div className="flex justify-between items-center">
          <h4 className="mb-2 Montserrat text-[#FFD868] text-[2rem]">Country</h4>
          <motion.button
            onClick={() => setIsCountryOpen(!isCountryOpen)}
            className="text-white"
            initial={false}
            animate={isCountryOpen ? 'open' : 'closed'}
            variants={iconVariants}
            transition={{ duration: 0.3 }}
          >
            {isCountryOpen ? <MinusIcon size={24} /> : <PlusIcon size={24} />}
          </motion.button>
        </div>
        <motion.div
          initial={false}
          animate={isCountryOpen ? 'open' : 'closed'}
          variants={variants}
          transition={{ duration: 0.3 }}
        >
          <div key="All" className="flex items-center mb-2">
            <input
              type="checkbox"
              id="country-All"
              checked={isChecked('country', 'All')}
              onChange={() => toggleFilter('country', 'All')}
              className="mr-4 rounded bg-transparent border-2 border-[#ffffff]"
            />
            <label className="text-white OpenSans text-lg" htmlFor="country-All">
              All
            </label>
          </div>
          {countries.map((country) => (
            <div key={country.country} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`country-${country.country}`}
                checked={isChecked('country', country.country)}
                onChange={() => toggleFilter('country', country.country)}
                className="mr-4 rounded bg-transparent border-2 border-[#ffffff]"
              />
              <label className="text-white OpenSans text-lg" htmlFor={`country-${country.country}`}>
                {country.country}
              </label>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
