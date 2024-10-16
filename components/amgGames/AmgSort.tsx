'use client';

import { useState } from 'react';

type AmgSortProps = {
  onSort: (sortType: string) => void;
};

const AmgSort = ({ onSort }: AmgSortProps) => {
  const [sortType, setSortType] = useState('');

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
        className="w-full p-2 border border-gray-300 rounded-lg"
      >
        <option value="">Select Sort Option</option>
        <option value="date">Date</option>
        <option value="popularity">Popularity Rank</option>
        <option value="alpha">Alphabetical</option>
      </select>
    </div>
  );
};

export default AmgSort;
