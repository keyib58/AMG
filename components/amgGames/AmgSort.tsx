'use client';

import { useState } from 'react';
import clsx from 'clsx';
type AmgSortProps = {
  onSort: (sortType: string) => void;
  className?: string;
};

const AmgSort = ({ onSort }: AmgSortProps) => {
  const [sortType, setSortType] = useState('popularity');

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = e.target.value;
    setSortType(selectedSort);
    onSort(selectedSort); // Call the sorting function when the selection changes
  };

  return (
    <div className="w-full mb-4">
      <select
        id="sort"
        value={sortType}
        onChange={handleSortChange}
        className="w-full p-2 border border-gray-300 rounded-lg content-font"
      >
        <option value="popularity">Popularity</option>
        <option value="date">Latest</option>
        <option value="alpha">Alphabetical</option>
      </select>
    </div>
  );
};

export default AmgSort;
