'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GameListingProps } from 'types/type';

export default function GameListing({ games }: GameListingProps) {
  return (
    <motion.div
      key={JSON.stringify(games)} // Adding a unique key based on the games data
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-3 gap-4 mt-[100px]"
    >
      {games.length === 0 ? (
        <div className="col-span-3 text-center text-white text-2xl">No games found</div>
      ) : (
        games.map((game) => (
          <Link href={`/games/${game.slug}`} key={game.id} className="block">
            <Image src={game.thumbnailUrl} alt={game.name} className="rounded-[20px]" width={1000} height={1000} />
            <h3 className="text-white Montserrat text-center uppercase font-bold mt-2">{game.name}</h3>
          </Link>
        ))
      )}
    </motion.div>
  );
}
