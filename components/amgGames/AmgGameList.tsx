// app/game/AmgGameList.tsx
'use client';
import Image from 'next/image';
import { Game } from 'types/amg'; // Import the Game type

type AmgGameListProps = {
  games: Game[]; // Use the correct Game type and prop name
};

const AmgGameList = ({ games }: AmgGameListProps) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
      {games.map((game, index) => (
        <div key={index} >
          <Image 
            src={game.thumbnail} // Ensure you have the correct property name for the thumbnail
            alt={`${game.name} thumbnail`}
            width={500} // Adjust width and height based on your design
            height={300}
            style={{ borderRadius: '8px' }}
          />
          <h3 className='text-white' style={{ textAlign: 'center' }}>{game.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default AmgGameList;
