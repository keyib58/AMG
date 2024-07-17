'use client';

import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface FilterByIPProps {
  countries: { country: string }[];
  currentCountries: string[];
  setFiltering: Dispatch<SetStateAction<boolean>>;
}

const FilterByIP: React.FC<FilterByIPProps> = ({ countries, currentCountries, setFiltering }) => {
  const router = useRouter();
  const hasRedirected = useRef(false); // Add a ref to track if the redirect has been performed

  useEffect(() => {
    const fetchUserCountry = async () => {
      try {
        setFiltering(true);
        const response = await fetch('https://freeipapi.com/api/json');
        const data = await response.json();
        const initialCountry = data.countryName;
        console.log('data from ip:', data);
        const searchParams = new URLSearchParams(window.location.search);
        if (!searchParams.has('country') && currentCountries.length === 0 && !hasRedirected.current) {
          searchParams.set('country', initialCountry);
          // router.replace(`${window.location.pathname}?${searchParams.toString()}`);
          hasRedirected.current = true; // Set the flag to true after the redirect
        }
      } catch (error) {
        console.error('Failed to fetch user country:', error);
      } finally {
        setFiltering(false);
      }
    };

    if (currentCountries.length === 0 && !hasRedirected.current) {
      fetchUserCountry();
    }
  }, [countries, currentCountries, router, setFiltering]);

  return null;
};

export default FilterByIP;
