'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GameListingProps } from 'types/type';
import Pagination from './Pagination';

export default function GameListing({ games }: GameListingProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, setGamesPerPage] = useState(9); // Default to 9 for larger screens

  useEffect(() => {
    const updateGamesPerPage = () => {
      const width = window.innerWidth;
      if (width < 1024) { // Check for tablet and mobile screen sizes
        setGamesPerPage(8);
      } else {
        setGamesPerPage(9);
      }
    };

    // Set the initial value
    updateGamesPerPage();

    // Add event listener to handle window resize
    window.addEventListener('resize', updateGamesPerPage);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', updateGamesPerPage);
  }, []);

  const totalPages = Math.ceil(games.length / gamesPerPage);
  const startIndex = (currentPage - 1) * gamesPerPage;
  const selectedGames = games.slice(startIndex, startIndex + gamesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <motion.div
        key={JSON.stringify(selectedGames)} // Adding a unique key based on the games data
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-[48px] lg:mt-[100px]"
      >
        {selectedGames.length === 0 ? (
          <div className="col-span-3 text-center text-white text-2xl">No games found</div>
        ) : (
          selectedGames.map((game) => (
            <Link href={`/games/${game.slug}`} key={game.id} className="block">
              <Image src={game.thumbnailUrl} alt={game.name} className="rounded-[20px] priority" width={1000} height={1000} />
              <h3 className="text-white Montserrat text-center uppercase font-bold mt-2">{game.name}</h3>
            </Link>
          ))
        )}
      </motion.div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  );
}
