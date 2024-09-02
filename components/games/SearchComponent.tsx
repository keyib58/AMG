import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '@/app/slices/searchSlice';
import { setSelectedGenres, setSelectedLanguages, setSelectedMarkets } from '@/app/slices/filterSlice';
import { RootState } from '@/app/store';
import { useSearchParams, useRouter } from 'next/navigation';
import LoadingDots from './LoadingDots';
import { XIcon, Search } from 'lucide-react';

interface SearchComponentProps {
  currentSearch?: string;
}

const SearchComponent = ({ currentSearch = '' }: SearchComponentProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState(currentSearch);

  useEffect(() => {
    // Sync the inputValue with the 'search' parameter from the URL
    const searchParam = searchParams.get('search');
    if (searchParam) {
      setInputValue(searchParam);
      dispatch(setSearchTerm(searchParam)); // Initialize Redux state with URL parameter
    }
  }, [searchParams, dispatch]);

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
    }, 500); // Simulate loading delay
  };

  const resetSearch = () => {
    setInputValue('');
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
          className="ml-2 px-4 py-2 uppercase text-black rounded-[20px] flex items-center justify-center OpenSans"
          style={{ background: 'linear-gradient(90deg, #FFA100 0%, #FFDD00 100%)', height: '40px' }}
          disabled={isLoading} // Disable button while loading
        >
          <div className="flex items-center align-middle">
            <Search className='w-5 h-5' />
            <span className="ml-2">Search</span>
          </div>
        </button>
      </form>

      {inputValue && !isLoading && (
        <div className="mt-2 p-2 bg-[#111111] text-white rounded flex items-center justify-between OpenSans relative lg:absolute">
          <div>
            Searching: <span className="font-bold">{inputValue}</span>
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
