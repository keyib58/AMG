'use client';

import { useState, useEffect } from 'react';
import { Search, Loader } from 'lucide-react'; // Using lucide-react for icons

type AmgSearchProps = {
  onSearch: (searchQuery: string) => void;
  isSearchComplete: boolean; // Prop to track if the search is completed
};

const AmgSearch = ({ onSearch, isSearchComplete }: AmgSearchProps) => {
  const [searchTerm, setSearchTerm] = useState(''); // Local state for input
  const [showLoader, setShowLoader] = useState(false); // Local state to control the Loader visibility

  // Handle input change and trigger search immediately
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value); // Update local state
    setShowLoader(true); // Show loader immediately when typing starts
    onSearch(value); // Trigger the search
  };

  // Effect to simulate a 1-second delay before switching back to the Search icon
  useEffect(() => {
    if (isSearchComplete) {
      const timeout = setTimeout(() => {
        setShowLoader(false); 
      }, 300); // 300ms delay to ensure the loader shows for a short time

      return () => clearTimeout(timeout); // Clear timeout on unmount or when input changes
    } else {
      setShowLoader(true); // Ensure the loader shows when the search is not complete
    }
  }, [isSearchComplete]);

  return (
    <div className="relative w-full mb-4 content-font">
      <input
        type="text"
        placeholder="Search games..."
        value={searchTerm}
        onChange={handleInputChange} // Trigger search on every change
        className="w-full p-2 border border-gray-300 rounded-lg pl-10" // Padding for the icon
      />
      <span className="absolute inset-y-0 left-2 flex items-center text-gray-400">
        {showLoader ? (
          <Loader className="animate-spin" size={20} /> // Spinner while searching
        ) : (
          <Search size={20} /> // Show static search icon when search completes
        )}
      </span>
    </div>
  );
};

export default AmgSearch;
