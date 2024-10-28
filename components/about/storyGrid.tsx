'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface StorySectionProps {
    className?: string;
}

const StorySection: React.FC<StorySectionProps> = ({ className }) => {
    return (
        <div className={clsx("w-full mx-auto p-6 text-white", className)}>
            {/* Main Title */}
            <motion.h2
                className="text-4xl font-extrabold text-[#693365] text-center mb-8 title-font"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                About Us
            </motion.h2>

            {/* First Paragraph */}
            <motion.p
                className="text-lg max-w-3xl mx-auto mb-8 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
Amp it up with Ace Maker Gaming’s provides transformative games with revolutionary features, marvelous visuals, and captivating storylines!            </motion.p>

            {/* Second Paragraph */}
            <motion.p
                className="text-lg max-w-3xl mx-auto mb-8 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                Our story began in 2018 with one vision: To create a better iGaming universe. Our immersive portfolio games offer the perfect escape from reality, giving players an irresistible temptation to gallivant through their dream dimension.
            </motion.p>

            {/* Third Paragraph */}
            <motion.p
                className="text-lg max-w-3xl mx-auto mb-8 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                Your success is our success. From classic slots to animal obstacle courses to survival-style gameplay, the titles we provide are filled with enticing elements with a modern twist to keep player retention rates high and your business thriving.
            </motion.p>

            {/* Final Call to Action Paragraph */}
            <motion.p
                className="text-lg max-w-3xl mx-auto text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                Ride on this epic journey with us as we set out to redefine online gaming together.
            </motion.p>
        </div>
    );
};

export default StorySection;
