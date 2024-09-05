'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Game, LanguageInfo } from 'types/type';
import { motion } from 'framer-motion';
import LanguageSelector from './LanguageSelector';
import GameSpecs from './GameSpecs';
import BackgroundOverlay from './BackgroundOverlay';
import AssetDownload from './AssetDownload';
import MediaViewerModal from './MediaViewerModal';

const changeLanguage = (label: string, language: string): string => {
    const translations: { [key: string]: { [key: string]: string } } = {
        Trailer: {
            English: 'Trailer',
            Spanish: 'Tráiler',
            French: 'Bande-annonce', // Not in your list but kept for reference
            THAI: 'ตัวอย่าง',
            'SIMPLIFIED CHINESE': '预告片',
            VIETNAMESE: 'Đoạn phim',
            "BAHASA INDONESIA": 'Cuplikan',
            KOREAN: '예고편',
            BURMESE: 'နမူနာ',
            "PORTUGUESE BRAZILIAN": 'Trailer',
            TAGALOG: 'Patingin',
            SPANISH: 'Tráiler',
        },
        'Try Demo': {
            English: 'Try Demo',
            Spanish: 'Prueba Demo',
            French: 'Essayer Démo', // Not in your list but kept for reference
            THAI: 'ลองเล่นเกม',
            'SIMPLIFIED CHINESE': '试玩演示',
            VIETNAMESE: 'Thử Demo',
            "BAHASA INDONESIA": 'Coba Demo',
            KOREAN: '데모 시도',
            BURMESE: 'ဒေမိုကိုကြိုးစားပါ',
            "PORTUGUESE BRAZILIAN": 'Experimentar Demo',
            TAGALOG: 'Subukan ang Demo',
            SPANISH: 'Prueba Demo',
        },
    };

    return translations[label][language] || label;
};

type GameInfoProps = {
    game: Game;
    placeHolderUrl: string;
};

const GameInfo: React.FC<GameInfoProps> = ({ game, placeHolderUrl }) => {
    // Find English language info or fallback to the first language
    const defaultLanguage = game.languageInfo.find(info => info.language.toUpperCase() === 'ENGLISH') || game.languageInfo[0];

    const [selectedLanguage, setSelectedLanguage] = useState<LanguageInfo | null>(defaultLanguage);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ url: '', isTrailer: true });
    const [isLoading, setIsLoading] = useState(true); // State to manage image loading
    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        if (imgRef.current && imgRef.current.complete) {
            setIsLoading(false); // Image is already loaded (cached), so stop the loading state
        }
    }, []);

    const handleLanguageChange = (id: string) => {
        const selected = game.languageInfo.find(info => info.id === id) || null;
        setSelectedLanguage(selected);
    };

    const openModal = (url: string, isTrailer: boolean) => {
        setModalContent({ url, isTrailer });
        setIsModalOpen(true);
    };

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    // Determine the image URL to use
    const imageUrl = game.placeHolderUrl === 'NA' ? game.gameGifUrl : game.placeHolderUrl;

    return (
        <>
            <BackgroundOverlay url={game.gameBackgroundUrl} />
            <motion.div
                className="mx-auto max-w-[1350px] mt-6 lg:mt-20 w-full px-8 lg:px-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
                    <div className="lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-1 infoContainer">
                        <h2 className="text-[32px] lg:text-5xl font-bold mb-4 lg:mb-8 Montserrat uppercase text-white">{game.name}</h2>
                        <p className="mb-4 Montserrat font-medium text-white">{game.description}</p>

                        <div className="mt-4 lg:mt-20">
                            <div className="grid grid-cols-1 lg:gap-4 gap-y-4 w-full lg:grid-cols-3">
                                <LanguageSelector
                                    languageInfo={game.languageInfo}
                                    selectedLanguage={selectedLanguage}
                                    onLanguageChange={handleLanguageChange}
                                />

                                {selectedLanguage && (
                                    <>
                                        <div className="grid grid-cols-2 gap-4 w-full col-span-2">
                                            {selectedLanguage.trailerLink ? (
                                                <button
                                                    onClick={() => openModal(selectedLanguage.trailerLink, true)}
                                                    className="gradientOutlineBtn"
                                                >
                                                    {changeLanguage('Trailer', selectedLanguage.language)}
                                                </button>
                                            ) : (
                                                <div className="hidden"></div>
                                            )}

                                            <button
                                                onClick={() => openModal(selectedLanguage.demoLink, false)}
                                                className="bgGradientBtn"
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

                    <div className="lg:w-1/2 w-full flex justify-end order-1 lg:order-2 mb-8">
                        {isLoading && (
                            <div className="w-full lg:max-w-[400px] h-[733px] rounded-[15px] bg-neutral-800 animate-pulse"></div>
                        )}
                        <img
                            ref={imgRef}
                            src={imageUrl}
                            alt={game.name}
                            className={`w-full lg:max-w-[400px] lg:p-0 lg:bg-transparent bg-[#151515] p-4 h-auto rounded-[15px] ${isLoading ? 'hidden' : 'block'}`}
                            onLoad={handleImageLoad}
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
                DialogTitle={game.name}
            />
        </>
    );
};

export default GameInfo;
