'use client';

import { useState, useEffect } from 'react';
import { Search, Loader } from 'lucide-react'; // Using lucide-react for icons

type AmgSearchProps = {
  onSearch: (searchQuery: string) => void;
  isSearchComplete: boolean; // New prop to track if the search is completed
};

const AmgSearch = ({ onSearch, isSearchComplete }: AmgSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Debouncing search input to avoid making calls on every keystroke
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchTerm); // Call the search function after the debounce delay
    }, 2200); // 500ms debounce delay

    return () => clearTimeout(delayDebounceFn); // Cleanup the timeout
  }, [searchTerm, onSearch]);

  return (
    <div className="relative w-full mb-4">
      <input
        type="text"
        placeholder="Search games..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg pl-10" // Padding for the icon
      />
      <span className="absolute inset-y-0 left-2 flex items-center text-gray-400">
        {isSearchComplete ? (
          <Search size={20} /> // Static search icon when search completes
        ) : (
          <Loader className="animate-spin" size={20} /> // Spinner when searching
        )}
      </span>
    </div>
  );
};

export default AmgSearch;
