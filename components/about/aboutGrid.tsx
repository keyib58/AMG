'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface AboutGridProps {
    className?: string;
}

const AboutGrid: React.FC<AboutGridProps> = ({ className }) => {
    return (
        <div className={clsx("w-full mx-auto p-4", className)}>
            <div className="grid grid-cols-2 lg:grid-cols-2 grid-rows-1 gap-y-4">
                {/* WHO WE ARE */}
                <motion.div
                    className="mt-10 lg:mt-0 col-span-2 lg:col-span-1 subheader_bg lg:mr-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="subheader">Vision</h3>
                    <div className='hidden lg:block max-w-[440px] mx-auto mt-4 text-md font-semidbold text-white'>
                        <p>
                            Innovate, transform, and grow. We strive to create a unique iGaming environment unlike the world has seen before, where players can find a Utopian online space to dream big and bring our partners remarkable business success.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className='lg:hidden col-span-2 text-md font-semidbold text-white'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                          <p>
                            Innovate, transform, and grow. We strive to create a unique iGaming environment unlike the world has seen before, where players can find a Utopian online space to dream big and bring our partners remarkable business success.
                        </p>
                </motion.div>

                {/* OUR TEAM */}
                <motion.div
                    className="mt-10 lg:mt-0 col-span-2 lg:col-span-1 subheader_bg lg:ml-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h3 className="subheader">MISSION</h3>
                    <div className='hidden lg:block max-w-[440px] mx-auto content-font mt-4 text-md font-semidbold text-white'>
                        <p>
                            We cultivate positive impacts on the online gaming industry with our forward-thinking mindsets, ground-breaking technologies, and creative titles that make players happy and your business flowing.                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className='lg:hidden col-span-2 text-md font-semidbold text-white'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                        <p>
                        We cultivate positive impacts on the online gaming industry with our forward-thinking mindsets, ground-breaking technologies, and creative titles that make players happy and your business flowing.                        </p>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutGrid;
