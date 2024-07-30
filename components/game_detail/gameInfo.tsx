'use client'
import React, { useState } from 'react';
import { Game, LanguageInfo } from 'types/type';
import Image from 'next/image';
import { motion } from 'framer-motion';
import LanguageSelector from './LanguageSelector';
import GameSpecs from './GameSpecs';
import BackgroundOverlay from './BackgroundOverlay';
import AssetDownload from './AssetDownload';

const changeLanguage = (label: string, language: string): string => {
    const translations: { [key: string]: { [key: string]: string } } = {
        Trailer: {
            English: 'Trailer',
            Spanish: 'Tráiler',
            French: 'Bande-annonce',
            THAI: 'ตัวอย่าง',
            CHINESE: '预告片',
            // Add other languages here
        },
        'Try Demo': {
            English: 'Try Demo',
            Spanish: 'Prueba Demo',
            French: 'Essayer Démo',
            THAI: 'ลองเล่นเกม',
            CHINESE: '试玩演示',
        },
    };

    return translations[label][language] || label;
};

type GameInfoProps = {
    game: Game;
};

const GameInfo: React.FC<GameInfoProps> = ({ game }) => {
    const [selectedLanguage, setSelectedLanguage] = useState<LanguageInfo | null>(game.languageInfo[0]);

    const handleLanguageChange = (id: string) => {
        const selected = game.languageInfo.find(info => info.id === id) || null;
        setSelectedLanguage(selected);
    };

    return (
        <>
            <BackgroundOverlay url={game.gameBackgroundUrl} />

            <motion.div
                className='mx-auto max-w-[1350px] mt-20 w-full mb-[200px] px-8 lg:px-6'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
                    <div className="text-white lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-5xl font-bold mb-4 Montserrat uppercase">{game.name}</h2>
                        <p className="mb-4 Montserrat font-medium mt-8">{game.description}</p>

                        <div className="mt-4 lg:mt-20">
                            <div className="flex justify-between items-center space-x-2">
                                <LanguageSelector
                                    languageInfo={game.languageInfo}
                                    selectedLanguage={selectedLanguage}
                                    onLanguageChange={handleLanguageChange}
                                />
                                {selectedLanguage && (
                                    <>
                                        <button
                                            onClick={() => window.open(selectedLanguage.demoLink, '_blank')}
                                            className={`flex-1 rounded-full text-black px-8 shadow-md py-2 OpenSans font-medium uppercase text-xl ${selectedLanguage.trailerLink ? '' : 'ml-2'}`}
                                            style={{ background: 'linear-gradient(90deg, #FFA100 0%, #FFDD00 100%)' }}
                                        >
                                            {changeLanguage('Try Demo', selectedLanguage.language)}
                                        </button>
                                        {selectedLanguage.trailerLink ? (
                                            <button
                                                onClick={() => window.open(selectedLanguage.trailerLink, '_blank')}
                                                className="flex-1 relative px-8 py-2 border-2 rounded-full OpenSans font-medium uppercase text-xl"
                                                style={{
                                                    borderColor: '#FFA100',
                                                    background: 'none',
                                                    color: 'transparent',
                                                    backgroundClip: 'text',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    backgroundImage: 'linear-gradient(90deg, #FFA100 0%, #FFDD00 100%)',
                                                }}
                                            >
                                                {changeLanguage('Trailer', selectedLanguage.language)}
                                            </button>
                                        ) : (
                                            <div className="flex-1"></div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>

                        <GameSpecs
                            genre={game.genre}
                            RTP={game.RTP}
                            volatility={game.volatility}
                            maxWin={game.maxWin}
                        />
                    </div>
                    <div className="lg:w-1/2 flex justify-end">
                        <Image
                            src={game.gameGifUrl}
                            alt={game.name}
                            width={427}
                            height={733}
                            className="rounded-md"
                        />
                    </div>
                </div>
            </motion.div>
            <AssetDownload assetUrl={game.assetUrl} />
        </>
    );
};

export default GameInfo;
