'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
    bgImage1: string;
    bgImage2: string;
    bgImage3: string;
    opacity1: number;
    opacity2: number;
    opacity3: number;
}

const InnovationGrid: React.FC<Props> = ({ bgImage1, bgImage2, bgImage3, opacity1, opacity2, opacity3 }) => {
    return (
        <div className="w-full mx-auto p-4 mt-20">
            <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-y-4 lg:gap-x-4">
                {/* Title card */}
                <motion.div
                    className="subheader_bg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="subheader">DRIVEN BY INNOVATION</h3>
                </motion.div>

                {/* RESPONSIBLE GAMING */}
                <motion.div
                    className="hidden lg:flex col-span-3 row-span-3 lg:col-span-1 lg:row-span-2 py-8 items-center bg-[#151515] flex-col justify-center rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h4 className="text-lg font-semibold text-white">RESPONSIBLE GAMING</h4>
                    <div className="flex space-y-8 flex-col mt-20 items-center">
                        <Image src="/footerLogo2.png" alt="Logo" width={150} height={50} />
                        <Image src="/footerLogo1.png" alt="Logo" width={120} height={50} />
                    </div>
                </motion.div>

                {/* MORE THAN 100 GAMES */}
                <motion.div
                    className="relative mr-2 col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 py-8 bg-[#11111180] flex flex-col items-center justify-center rounded-xl overlaycard moregames"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl"
                        style={{ backgroundImage: `url(${bgImage1})`, opacity: opacity1 }}
                    ></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <p className='Montserrat mx-4 text-white text-center font-bold mb-6 lg:mb-8'>GROWING LIBRARY OF</p>
                        <p className='Montserrat text-[#FFD96B] text-center font-bold text-[48px] lg:text-8xl mb-6 lg:mb-8 '>100+</p>
                        <p className='Montserrat text-white text-center font-bold'>GAMES</p>
                    </div>
                </motion.div>

                {/* INTEGRATED ACROSS 90+ PLATFORMS */}
                <motion.div
                    className="relative ml-2 col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 py-8 bg-transparent flex flex-col items-center justify-center rounded-xl overlaycard integrated"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl"
                        style={{ backgroundImage: `url(${bgImage2})`, opacity: opacity2 }}
                    ></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <p className='Montserrat mx-4 text-center text-white font-bold mb-6 lg:mb-8'>INTEGRATED ACROSS</p>
                        <p className='Montserrat text-center text-[#FFD96B] font-bold text-[48px] lg:text-8xl mb-6 lg:mb-8 '>90+</p>
                        <p className='Montserrat text-center text-white font-bold uppercase'>PLATFORMS</p>
                    </div>
                </motion.div>

                <motion.div
                    className="relative col-span-3 row-span-3 lg:col-span-2 lg:row-span-1 bg-transparent py-8 flex items-center justify-center rounded-xl overlaycard support"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl"
                        style={{ backgroundImage: `url(${bgImage3})`, opacity: opacity3, backgroundPosition: 'center 35%' }}
                    ></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <p className='Montserrat mx-4 text-center text-white font-bold mb-6 lg:mb-8'>SUPPORTS</p>
                        <p className='Montserrat text-center text-[#FFD96B] font-bold text-[48px] lg:text-8xl mb-6 lg:mb-8'>ALL</p>
                        <p className='Montserrat text-center text-white font-bold uppercase'>CURRENCIES & LANGUAGES</p>
                    </div>
                </motion.div>

                <motion.div
                    className="flex lg:hidden col-span-3 row-span-3 lg:col-span-1 lg:row-span-2 py-8 items-center bg-[#151515] flex-col justify-center rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h4 className="text-lg font-semibold text-white">RESPONSIBLE GAMING</h4>
                    <div className="flex flex-row mt-5 gap-4 items-center justify-center">
                        <Image src="/footerLogo2.png" alt="Logo" width={107} height={107} />
                        <Image src="/footerLogo1.png" alt="Logo" width={114} height={50} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default InnovationGrid;
