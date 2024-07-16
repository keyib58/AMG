'use client';

import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';


interface SearchComponentProps {
  currentSearch: string | null;
}

export default function SearchComponent({ currentSearch }: SearchComponentProps) {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
    const searchInput = (e.currentTarget as HTMLFormElement).search.value;
    if (searchInput) {
      params.set('search', searchInput);
    } else {
      params.delete('search');
    }
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  return (
    <div className="relative mb-4 w-full">
      <form onSubmit={handleSearch} className="flex items-center w-full">
        <input
          type="text"
          name="search"
          defaultValue={currentSearch || ''}
          placeholder="Search..."
          className="w-full p-2 pl-4 text-black rounded-[20px] mr-4"
        />
        <button type="submit" className="px-10 py-2 uppercase text-black rounded-[20px] flex items-center"
          style={{ background: 'linear-gradient(90deg, #FFA100 0%, #FFDD00 100%)' }}>
          Search
          <Search className='ml-2' />
        </button>
      </form>
    </div>
  );
}
