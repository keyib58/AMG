'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SubHeader from '../shared/subHeader';
import clsx from 'clsx';

interface Props {
    bgImage1: string;
    bgImage2: string;
    bgImage3: string;
    opacity1: number;
    opacity2: number;
    opacity3: number;
    className?: string;
}

const InnovationGrid: React.FC<Props> = ({ bgImage1, bgImage2, bgImage3, opacity1, opacity2, opacity3, className }) => {
    return (
        <div className={clsx("w-full mx-auto p-4", className)}>
            <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-y-4 lg:gap-x-4">
                {/* Title card */}
                <SubHeader title="DRIVEN BY INNOVATION" />

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
                    className="relative mr-2 col-span-2 row-span-1 lg:col-span-2 lg:row-span-1 py-8 bg-[#11111180] flex flex-col items-center justify-center rounded-xl overlaycard moregames"
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
                        <p className='Montserrat text-[#FFD96B] text-center font-bold text-[48px] lg:text-8xl mb-6 lg:mb-8 '>HUNDREDS</p>
                        <p className='Montserrat text-white text-center font-bold'>OF GAMES</p>
                    </div>
                </motion.div>

                {/* SUPPORTS ALL CURRENCIES & LANGUAGES */}
                <motion.div
                    className="relative col-span-3 row-span-3 lg:col-span-2 lg:row-span-1 bg-transparent py-8 flex items-center justify-center rounded-xl overlaycard support"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl"
                        style={{ backgroundImage: `url(${bgImage3})`, opacity: opacity3, backgroundPosition: 'center 10%' }}
                    ></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <p className='Montserrat mx-4 text-center text-white font-bold mb-6 lg:mb-8'>SUPPORTS</p>
                        <p className='Montserrat text-center text-[#FFD96B] font-bold text-[48px] lg:text-8xl mb-6 lg:mb-8'>ALL</p>
                        <p className='Montserrat text-center text-white font-bold uppercase'>CURRENCIES & LANGUAGES</p>
                    </div>
                </motion.div>

                {/* CUTTING EDGE TECHNOLOGY */}
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
