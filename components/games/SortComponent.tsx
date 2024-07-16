'use client';

import * as Popover from '@radix-ui/react-popover';
import { ChevronDownIcon, Calendar, Heart, ArrowDownIcon, ChevronRightIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SortComponentProps {
  currentSort: string | null;
}

export default function SortComponent({ currentSort = 'latest' }: SortComponentProps) {
  const router = useRouter();
  const [sort, setSort] = useState(currentSort);

  useEffect(() => {
    const savedSort = localStorage.getItem('sortOption') || 'latest';
    setSort(savedSort);
  }, []);

  const setSortOption = (option: string) => {
    localStorage.setItem('sortOption', option);
    setSort(option);
    const params = new URLSearchParams(window.location.search);
    params.set('sort', option);
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  const getCurrentSortLabel = () => {
    switch (sort) {
      case 'alphabetical':
        return 'Alphabetical';
      case 'popular':
        return 'Popular Rank';
      case 'latest':
        return 'Latest';
      default:
        return 'Latest';
    }
  };

  const getIcon = () => {
    switch (sort) {
      case 'alphabetical':
        return <ArrowDownIcon className="w-5 h-5 mr-2" />;
      case 'popular':
        return <Heart className="w-5 h-5 mr-2" />;
      case 'latest':
        return <Calendar className="w-5 h-5 mr-2" />;
      default:
        return <ChevronDownIcon className="w-5 h-5 mr-2" />;
    }
  };

  return (
    <Popover.Root>
      <div className="flex items-center">
        <div className="text-white mr-2">SORT BY:</div>
        <div>
          <Popover.Trigger className="bg-white flex p-2 items-center text-black rounded-lg w-48 justify-between">
            <div className="flex items-center">
              {getIcon()}
              {getCurrentSortLabel()}
            </div>
            <ChevronRightIcon className="w-5 h-5 ml-2" />
          </Popover.Trigger>
          <Popover.Content className="bg-white text-black rounded-lg shadow-lg p-2 w-48 mt-2">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-2"
            >
              {sort !== 'alphabetical' && (
                <>
                  <label className="flex items-center cursor-pointer p-2">
                    <ArrowDownIcon className="w-5 h-5 mr-2" />
                    <input
                      type="radio"
                      name="sort"
                      value="alphabetical"
                      checked={sort === 'alphabetical'}
                      onChange={() => setSortOption('alphabetical')}
                      className="hidden"
                    />
                    Alphabetical
                  </label>
                  <div className="border-t border-gray-300 my-1"></div>
                </>
              )}
              {sort !== 'popular' && (
                <>
                  <label className="flex items-center cursor-pointer p-2">
                    <Heart className="w-5 h-5 mr-2" />
                    <input
                      type="radio"
                      name="sort"
                      value="popular"
                      checked={sort === 'popular'}
                      onChange={() => setSortOption('popular')}
                      className="hidden"
                    />
                    Popular Rank
                  </label>
                  {sort !== 'latest' && (
                    <div className="border-t border-gray-300 my-1"></div>
                  )}
                </>
              )}
              {sort !== 'latest' && (
                <label className="flex items-center cursor-pointer p-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  <input
                    type="radio"
                    name="sort"
                    value="latest"
                    checked={sort === 'latest'}
                    onChange={() => setSortOption('latest')}
                    className="hidden"
                  />
                  Latest
                </label>
              )}
            </motion.div>
          </Popover.Content>
        </div>
      </div>
    </Popover.Root>
  );
}
