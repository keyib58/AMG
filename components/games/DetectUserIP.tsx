'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/app/store/hooks';
import { setSelectedMarkets, setFiltering } from '@/app/slices/filterSlice';
import { mapCountryToMarket } from 'utils/mapCountryToMarket';

const FilterByIP: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const storedIP = sessionStorage.getItem('userIP');
    const storedMarket = sessionStorage.getItem('userMarket');
    if (!storedIP || !storedMarket) {
      fetchUserIP();
    } else {
      dispatch(setSelectedMarkets([storedMarket]));
    }
  }, [dispatch]);

  const fetchUserIP = async () => {
    dispatch(setFiltering(true));
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      if (!response.ok) {
        throw new Error('Failed to fetch IP');
      }

      const data = await response.json();
      console.log('User IP:', data.ip);
      sessionStorage.setItem('userIP', data.ip); // Use sessionStorage to store the IP
      await FilterMarketByIP(data.ip);
    } catch (error) {
      console.error('Failed to fetch IP or timed out:', error);
      dispatch(setSelectedMarkets(['All']));
      dispatch(setFiltering(false));
    }
  };

  const FilterMarketByIP = async (ip: string) => {
    try {
      const response = await fetch(`https://freeipapi.com/api/json/${ip}`);
      if (!response.ok) {
        throw new Error('Failed to fetch location data');
      }

      const data = await response.json();
      const countryName = data.countryName;
      console.log('User Country:', countryName);

      if (countryName) {
        const market = mapCountryToMarket(countryName);
        dispatch(setSelectedMarkets([market]));
        sessionStorage.setItem('userMarket', market); // Store market in sessionStorage
        const params = new URLSearchParams(window.location.search);
        params.set('market', market);
        router.replace(`${window.location.pathname}?${params.toString()}`, { scroll: false });
      }
    } catch (error) {
      console.error('Failed to filter by market:', error);
    } finally {
      console.log('Filtering done');
      dispatch(setFiltering(false));
    }
  };

  return null; // No UI element needed
};

export default FilterByIP;
