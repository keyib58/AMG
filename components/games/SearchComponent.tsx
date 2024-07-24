import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '@/app/slices/searchSlice';
import { setSelectedGenres, setSelectedLanguages, setSelectedMarkets } from '@/app/slices/filterSlice';
import { RootState } from '@/app/store';
import { useSearchParams, useRouter } from 'next/navigation';
import LoadingDots from './LoadingDots';
import { XIcon } from 'lucide-react';

interface SearchComponentProps {
  currentSearch?: string;
}

const SearchComponent = ({ currentSearch = '' }: SearchComponentProps) => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState(currentSearch);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const resetFilters = () => {
    dispatch(setSelectedGenres([]));
    dispatch(setSelectedLanguages([]));
    dispatch(setSelectedMarkets([]));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSearchQuery(inputValue);
    dispatch(setSearchTerm(inputValue));
    resetFilters(); // Clear filters when search is performed

    const params = new URLSearchParams(window.location.search);
    params.delete('genre');
    params.delete('language');
    params.delete('market');
    if (inputValue) {
      params.set('search', inputValue);
    } else {
      params.delete('search');
    }
    router.replace(`${window.location.pathname}?${params.toString()}`, { scroll: false });
    setTimeout(() => {
      setIsLoading(false);
    }); // Simulate loading delay
  };

  const resetSearch = () => {
    setInputValue('');
    setSearchQuery(null);
    dispatch(setSearchTerm(''));
    const params = new URLSearchParams(window.location.search);
    params.delete('search');
    router.replace(`${window.location.pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className='relative'>
      <form onSubmit={handleSubmit} className="flex items-center w-full">
        <div className="relative w-full">
          <input
            type="text"
            name="search"
            value={isLoading ? '' : inputValue}
            onChange={handleSearchChange}
            placeholder={isLoading ? '' : 'Search...'}
            className={`w-full p-2 pl-4 text-black rounded-[20px] OpenSans mr-4 ${isLoading ? 'loading-placeholder' : ''}`}
            disabled={isLoading} // Disable input while loading
          />
          {isLoading && <LoadingDots className="absolute left-4 top-1/2 transform -translate-y-1/2" />}
        </div>
        <button
          type="submit"
          className="ml-2 px-6 py-2 uppercase text-black rounded-[20px] flex items-center OpenSans"
          style={{ background: 'linear-gradient(90deg, #FFA100 0%, #FFDD00 100%)' }}
          disabled={isLoading} // Disable button while loading
        >
          Search
        </button>
      </form>
      {searchQuery && !isLoading && (
        <div className="mt-2 p-2 bg-[#111111] text-white rounded flex items-center justify-between OpenSans absolute">
          <div>
            Searching: <span className="font-bold">{searchQuery}</span>
          </div>
          <button onClick={resetSearch} className="ml-4 text-white">
            <XIcon className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
