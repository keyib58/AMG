'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SearchComponentProps } from 'types/type';

export default function SearchComponent({ currentSearch }: SearchComponentProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const params = new URLSearchParams(window.location.search);
    const searchInput = (e.currentTarget as HTMLFormElement).search.value;
    (e.currentTarget as HTMLFormElement).search.value = ''; // Clear input field
    if (searchInput) {
      params.set('search', searchInput);
    } else {
      params.delete('search');
    }

    await new Promise(resolve => setTimeout(resolve, 200));
    await router.push(`${window.location.pathname}?${params.toString()}`);
    setIsLoading(false);
  };

  return (
    <div className="relative mb-4 w-full">
      <form onSubmit={handleSearch} className="flex items-center w-full">
        <div className="relative w-full">
          <input
            type="text"
            name="search"
            defaultValue={currentSearch || ''}
            placeholder={isLoading ? '' : 'Search...'}
            className={`w-full p-2 pl-4 text-black rounded-[20px] OpenSans mr-4 ${isLoading ? 'loading-placeholder' : ''}`}
            disabled={isLoading} // Disable input while loading
          />
          {isLoading && <LoadingDots className="absolute left-4 top-1/2 transform -translate-y-1/2" />}
        </div>
        <button
          type="submit"
          className="ml-4 px-10 py-2 uppercase text-black rounded-[20px] flex items-center OpenSans"
          style={{ background: 'linear-gradient(90deg, #FFA100 0%, #FFDD00 100%)' }}
          disabled={isLoading} // Disable button while loading
        >
          Search
        </button>
      </form>
    </div>
  );
}

function LoadingDots({ className } = { className: '' }) {
  return (
    <div className={`loading ${className}`}>
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
      <style jsx>{`
        .loading {
          display: inline-flex;
          align-items: center;
        }

        .loading .spacer {
          margin-right: 2px;
        }

        .loading span {
          animation-name: blink;
          animation-duration: 1.4s;
          animation-iteration-count: infinite;
          animation-fill-mode: both;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
          margin: 0 4px;
          background-color: rgb(202, 202, 202);
        }

        .loading span:nth-of-type(2) {
          animation-delay: 0.2s;
        }

        .loading span:nth-of-type(3) {
          animation-delay: 0.4s;
        }

        @keyframes blink {
          0% {
            opacity: 0.2;
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
