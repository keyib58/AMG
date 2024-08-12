'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SubHeader from './subHeader';
import clsx from 'clsx';

const clientLogos = [
    { name: 'Stake', src: 'https://res.cloudinary.com/detatjujs/image/upload/v1723016632/Stake_qh8wmr.png', order: 9 },
    { name: 'zenith', src: 'https://res.cloudinary.com/detatjujs/image/upload/v1723016632/zenith_vfjfp6.png', order: 10 },
    { name: 'sportpesa', src: 'https://res.cloudinary.com/detatjujs/image/upload/v1723016632/sportpesa_glpvxg.png', order: 7 },
    { name: 'sportsbetio', src: 'https://res.cloudinary.com/detatjujs/image/upload/v1723016632/sportsbetio_gokptk.png', order: 8 },
    { name: 'sbotop', src: 'https://res.cloudinary.com/detatjujs/image/upload/v1723016631/sbotop_e6jqmx.png', order: 12 },
    { name: 'kaiyun', src: 'https://res.cloudinary.com/detatjujs/image/upload/v1723016631/kaiyun_ktyjkt.png', order: 11 },
    { name: 'hub88', src: 'https://res.cloudinary.com/detatjujs/image/upload/v1723016631/hub88_tnwr4g.png', order: 6 },
    { name: 'fun88', src: 'https://res.cloudinary.com/detatjujs/image/upload/v1723016631/fun88_amomyf.png', order: 5 },
    { name: 'duelbits', src: 'https://res.cloudinary.com/detatjujs/image/upload/v1723016631/duelbits_fse4at.png', order: 4 },
    { name: 'digitain', src: 'https://res.cloudinary.com/detatjujs/image/upload/v1723016631/digitain_zu8gmo.png', order: 3 },
    { name: 'bk8', src: 'https://res.cloudinary.com/detatjujs/image/upload/v1723016631/bk8_kdro4q.png', order: 2 },
    { name: 'betvision', src: 'https://res.cloudinary.com/detatjujs/image/upload/v1723016631/betvision_hf5fi0.png', order: 1 },
    { name: 'BCGame', src: 'https://res.cloudinary.com/detatjujs/image/upload/v1723016631/BCGame_thtjwo.png', order: 16 },
    { name: '6686sports', src: 'https://res.cloudinary.com/detatjujs/image/upload/v1723016631/6686sports_t0zyoc.png', order: 15 },
    { name: '12bet', src: 'https://res.cloudinary.com/detatjujs/image/upload/v1723016631/12bet_j5ijro.png', order: 14 },
    { name: '8xbet', src: 'https://res.cloudinary.com/detatjujs/image/upload/v1723016631/8xbet_uqosri.png', order: 13 },
];

interface ClientsLogoProps {
    className?: string;
}

const ClientsLogo: React.FC<ClientsLogoProps> = ({ className }) => {
    const [showMore, setShowMore] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // This will run only on the client-side
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const initialLogosDesktop = clientLogos.slice(0, 15);
    const initialLogosMobile = clientLogos.slice(0, 8);

    const displayedLogos = showMore
        ? clientLogos
        : isDesktop
            ? initialLogosDesktop
            : initialLogosMobile;

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className={clsx("w-full mx-auto p-4", className)}>
            <SubHeader title="PROUDLY PARTNERING WITH" />
            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
                <AnimatePresence>
                    {displayedLogos
                        .sort((a, b) => a.order - b.order)
                        .map((logo) => (
                            <motion.div
                                key={logo.name}
                                className="bg-[#151515] rounded-[20px] flex items-center justify-center"
                                style={{ width: '100%', height: '145px', flexBasis: 'calc(100% / 5 - 1rem)' }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="max-w-[160px] max-h-[80px] object-contain"
                                />
                            </motion.div>
                        ))}
                </AnimatePresence>
            </div>
            <motion.div
                className="flex justify-end mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <button
                    onClick={toggleShowMore}
                    className="flex items-center Montserrat font-bold text-white hover:text-[#FFD96B] transition-colors duration-300"
                >
                    {showMore ? 'SHOW LESS' : 'SHOW MORE'}
                    {showMore ? (
                        <ChevronUp className="ml-2 w-4 h-4" />
                    ) : (
                        <ChevronDown className="ml-2 w-4 h-4" />
                    )}
                </button>
            </motion.div>
        </div>
    );
};

export default ClientsLogo;