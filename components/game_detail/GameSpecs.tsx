import React from 'react';

type GameSpecsProps = {
  genre: string;
  RTP: number;
  volatility: string;
  maxWin: number;
};

const GameSpecs: React.FC<GameSpecsProps> = ({ genre, RTP, volatility, maxWin }) => (
  <div className="game_specs grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
    <div className="items-center lg:items-start flex flex-col border-r border-white lg:border-r lg:border-white lg:pr-4">
      <p className="text-[#FFFFFF82]">Genre</p>
      <p className="font-bold uppercase">{genre}</p>
    </div>
    <div className="flex flex-col border-r-0 border-white lg:border-r lg:border-white lg:pr-4 items-center">
      <p className="text-[#FFFFFF82]">RTP</p>
      <p className="font-bold uppercase">{RTP}%</p>
    </div>
    <div className="flex flex-col border-r border-white lg:border-r lg:border-white lg:pr-4 items-center">
      <p className="text-[#FFFFFF82]">Volatility</p>
      <p className="font-bold uppercase">{volatility}</p>
    </div>
    <div className="flex flex-col items-center lg:items-end">
      <p className="text-[#FFFFFF82]">Max Win</p>
      <p className="font-bold uppercase">{maxWin}x</p>
    </div>
  </div>
);

export default GameSpecs;
