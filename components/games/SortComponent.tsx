'use client';

import * as Popover from '@radix-ui/react-popover';
import { ChevronDownIcon, Calendar, Heart, ArrowDownIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { setSortOption } from '@/app/slices/sortSlice';

interface SortComponentProps {
  currentSort?: string;
}

const SortComponent = ({ currentSort = 'latest' }: SortComponentProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const sort = useAppSelector((state) => state.sort.sortOption);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const [popoverWidth, setPopoverWidth] = useState<string | number>('auto');

  const updatePopoverWidth = () => {
    if (triggerRef.current) {
      setPopoverWidth(triggerRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    if (currentSort) {
      dispatch(setSortOption(currentSort));
    } else {
      dispatch(setSortOption('latest'));
    }
  }, [currentSort, dispatch]);

  useEffect(() => {
    updatePopoverWidth();

    window.addEventListener('resize', updatePopoverWidth);

    return () => {
      window.removeEventListener('resize', updatePopoverWidth);
    };
  }, [triggerRef]);

  const setSort = (option: string) => {
    dispatch(setSortOption(option));
    const params = new URLSearchParams(window.location.search);
    params.set('sort', option);
    router.replace(`${window.location.pathname}?${params.toString()}`, { scroll: false });
  };

  const getCurrentSortLabel = () => {
    switch (sort) {
      case 'alphabetical':
        return 'ALPHABETICAL';
      case 'popular':
        return 'POPULAR';
      case 'latest':
        return 'LATEST';
      default:
        return 'LATEST';
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
      <div className="flex items-center w-full">
        {/* Hide on mobile and tablet, show only on larger screens */}
        <div className="text-white mr-2 hidden lg:block">SORT&nbsp;BY:</div>
        <Popover.Trigger
          ref={triggerRef}
          className="bg-white flex p-2 items-center text-black rounded-lg w-full justify-between"
        >
          <div className="flex items-center">
            {getIcon()}
            {getCurrentSortLabel()}
          </div>
          <ChevronDownIcon className="w-5 h-5 ml-2" />
        </Popover.Trigger>
        <Popover.Content
          className="bg-white text-black rounded-lg shadow-lg p-2 mt-2"
          style={{ width: popoverWidth }}
        >
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
                    onChange={() => setSort('alphabetical')}
                    className="hidden"
                  />
                  ALPHABETICAL
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
                    onChange={() => setSort('popular')}
                    className="hidden"
                  />
                  POPULAR
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
                  onChange={() => setSort('latest')}
                  className="hidden"
                />
                LATEST
              </label>
            )}
          </motion.div>
        </Popover.Content>
      </div>
    </Popover.Root>
  );
};

export default SortComponent;
