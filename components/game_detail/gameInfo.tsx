'use client'
import React, { useState } from 'react';
import { Game, LanguageInfo } from 'types/type';
import Image from 'next/image';
import { motion } from 'framer-motion';
import LanguageSelector from './LanguageSelector';
import GameSpecs from './GameSpecs';
import BackgroundOverlay from './BackgroundOverlay';
import AssetDownload from './AssetDownload';
import MediaViewerModal from './MediaViewerModal'; // Import the renamed modal

const changeLanguage = (label: string, language: string): string => {
    const translations: { [key: string]: { [key: string]: string } } = {
        Trailer: {
            English: 'Trailer',
            Spanish: 'Tráiler',
            French: 'Bande-annonce',
            THAI: 'ตัวอย่าง',
            CHINESE: '预告片',
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ url: '', isTrailer: true });

    const handleLanguageChange = (id: string) => {
        const selected = game.languageInfo.find(info => info.id === id) || null;
        setSelectedLanguage(selected);
    };

    const openModal = (url: string, isTrailer: boolean) => {
        setModalContent({ url, isTrailer });
        setIsModalOpen(true);
    };

    return (
        <>
            <BackgroundOverlay url={game.gameBackgroundUrl} />
            <motion.div
                className='mx-auto max-w-[1350px] mt-6 lg:mt-20 w-full px-8 lg:px-6'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
                    <div className="lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-1 infoContainer">
                        <h2 className="text-5xl font-bold mb-4 lg:mb-8 Montserrat uppercase text-white">{game.name}</h2>
                        <p className="mb-4 Montserrat font-medium text-white">{game.description}</p>

                        <div className="mt-4 lg:mt-20">
                            {/* Container for all the buttons */}
                            <div className="grid grid-cols-1 lg:gap-4 gap-y-4 w-full lg:grid-cols-3">
                                {/* LanguageSelector takes full width on mobile, and 1/3 width on larger screens */}
                                <LanguageSelector
                                    languageInfo={game.languageInfo}
                                    selectedLanguage={selectedLanguage}
                                    onLanguageChange={handleLanguageChange}
                                />

                                {selectedLanguage && (
                                    <>
                                        <div className="grid grid-cols-2 gap-4 w-full col-span-2">
                                            {/* Trailer button */}
                                            {selectedLanguage.trailerLink ? (
                                                <button
                                                    onClick={() => openModal(selectedLanguage.trailerLink, true)}
                                                    className="w-full px-8 py-2 border-2 rounded-full OpenSans font-medium uppercase"
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
                                                <div className="hidden"></div>
                                            )}

                                            {/* Try Demo button */}
                                            <button
                                                onClick={() => openModal(selectedLanguage.demoLink, false)}
                                                className="w-full rounded-full text-black px-8 shadow-md py-2 OpenSans font-medium uppercase"
                                                style={{ background: 'linear-gradient(90deg, #FFA100 0%, #FFDD00 100%)' }}
                                            >
                                                {changeLanguage('Try Demo', selectedLanguage.language)}
                                            </button>
                                        </div>
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
                    <div className="lg:w-1/2 flex justify-end order-1 lg:order-2 gifContainer mb-8">
                        <Image
                            src={game.gameGifUrl}
                            alt={game.name}
                            width={400}
                            height={733}
                            className="w-full lg:max-w-[400px] h-auto rounded-[15px]"
                        />
                    </div>
                </div>
            </motion.div>
            <AssetDownload assetUrl={game.assetUrl} />

            <MediaViewerModal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                mediaUrl={modalContent.url}
                isTrailer={modalContent.isTrailer}
            />
        </>
    );
};

export default GameInfo;
