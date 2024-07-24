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
            <div className="grid grid-cols-3 grid-rows-1 gap-4">
                {/* Top card */}
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
                    className="col-span-3 row-span-3 lg:col-span-1 lg:row-span-2 py-8 items-center bg-[#151515] flex flex-col justify-center rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h4 className="text-lg font-semibold text-white">RESPONSIBLE GAMING</h4>
                    <div className="flex space-y-8 flex-col mt-20 items-center">
                        <Image src="/footerlogo2.png" alt="Logo" width={150} height={50} />
                        <Image src="/footerlogo1.png" alt="Logo" width={120} height={50} />
                    </div>
                </motion.div>

                {/* MORE THAN 100 GAMES */}
                <motion.div
                    className="relative col-span-3 row-span-3 lg:col-span-1 lg:row-span-1 py-8 bg-[#151515] flex flex-col items-center justify-center rounded-xl overlaycard moregames"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl"
                        style={{ backgroundImage: `url(${bgImage1})`, opacity: opacity1 }}
                    ></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <p className='Montserrat text-white font-bold mb-8'>MORE THAN</p>
                        <p className='Montserrat text-[#FFD96B] font-bold text-8xl mb-8'>100</p>
                        <p className='Montserrat text-white font-bold'>GAMES</p>
                    </div>
                </motion.div>

                <motion.div
                    className="relative col-span-3 row-span-3 lg:col-span-1 lg:row-span-1 py-8 bg-[#151515] flex flex-col items-center justify-center rounded-xl overlaycard integrated"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl"
                        style={{ backgroundImage: `url(${bgImage2})`, opacity: opacity2 }}
                    ></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <p className='Montserrat text-white font-bold mb-8'>OVER</p>
                        <p className='Montserrat text-[#FFD96B] font-bold text-8xl mb-8'>90</p>
                        <p className='Montserrat text-white font-bold uppercase'>distributors integrated</p>
                    </div>
                </motion.div>

                <motion.div
                    className="relative col-span-3 row-span-3 lg:col-span-2 lg:row-span-1 bg-[#151515] py-8 flex items-center justify-center rounded-xl overlaycard support"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl"
                        style={{ backgroundImage: `url(${bgImage3})`, opacity: opacity3, backgroundPosition: 'center 35%' }}
                    ></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <p className='Montserrat text-white font-bold mb-8'>SUPPORTS</p>
                        <p className='Montserrat text-[#FFD96B] font-bold text-8xl mb-8'>ALL</p>
                        <p className='Montserrat text-white font-bold'>CURRENCIES & LANGUAGES</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default InnovationGrid;
