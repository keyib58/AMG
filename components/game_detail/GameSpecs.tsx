import React from 'react';

type GameSpecsProps = {
  genre: string;
  RTP: number;
  volatility: string;
  maxWin: number;
};

const GameSpecs: React.FC<GameSpecsProps> = ({ genre, RTP, volatility, maxWin }) => (
  <div className="game_specs grid grid-cols-4 gap-4 mt-10">
    <div className="flex flex-col items-center lg:items-start border-r border-white pr-2 lg:pr-4">
      <p className="text-[#FFFFFF82] text-xs lg:text-sm whitespace-nowrap">Genre</p>
      <p className="font-bold uppercase text-white text-sm lg:text-base whitespace-nowrap">{genre}</p>
    </div>
    <div className="flex flex-col items-center border-r border-white pr-2 lg:pr-4">
      <p className="text-[#FFFFFF82] text-xs lg:text-sm whitespace-nowrap">RTP</p>
      <p className="font-bold uppercase text-white text-sm lg:text-base whitespace-nowrap">{RTP}%</p>
    </div>
    <div className="flex flex-col items-center border-r border-white pr-2 lg:pr-4">
      <p className="text-[#FFFFFF82] text-xs lg:text-sm whitespace-nowrap">Volatility</p>
      <p className="font-bold uppercase text-white text-sm lg:text-base whitespace-nowrap">{volatility}</p>
    </div>
    <div className="flex flex-col items-center lg:items-end">
      <p className="text-[#FFFFFF82] text-xs lg:text-sm whitespace-nowrap">Max Win</p>
      <p className="font-bold uppercase text-white text-sm lg:text-base whitespace-nowrap">{maxWin}x</p>
    </div>
  </div>
);

export default GameSpecs;
