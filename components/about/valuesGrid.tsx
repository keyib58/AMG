'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { HeartHandshake, Lightbulb, Star, Users } from 'lucide-react';

interface ValuesGridProps {
    className?: string;
}

const values = [
    {
        title: "Partnership",
        description: "We’re one with our partners through this exciting journey. We believe in mutual success. Witness phenomenal growth with us through our never-seen-before game features desired by next-gen players.",
        icon: HeartHandshake, // Icon for Partnership
    },
    {
        title: "Innovation",
        description: "We design visually stunning games that transcend geographical boundaries and limitations, offering the most unique, personalized experience for your users.",
        icon: Lightbulb, // Icon for Innovation
    },
    {
        title: "Excellence",
        description: "Our passionate team of experts comprises experienced coders, designers, and mathematicians. Together, we shape the future of the online entertainment business.",
        icon: Star, // Icon for Excellence
    },
    {
        title: "Connection",
        description: "We build engaging communities that promote harmony, friendships, and social interactions. Players are stepping into a world of possibilities where the sky is not the limit.",
        icon: Users, // Icon for Connection
    },
];

const ValuesGrid: React.FC<ValuesGridProps> = ({ className }) => {
    return (
        <div className={clsx("w-full mx-auto p-4", className)}>
            {/* Title */}
            <h3 className="subheader text-left text-3xl font-bold text-white">Values</h3>
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 mt-4">
                {values.map((value, index) => {
                    const Icon = value.icon; // Set icon for each value
                    return (
                        <motion.div
                            key={value.title}
                            className="p-6 border-l-4 border-[#dab765] text-left"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            {/* Icon */}
                            {/* <Icon className="w-12 h-12 text-[#dab765] mb-4" /> */}

                            {/* Title */}
                            <h3 className="text-lg font-bold text-white">{value.title}</h3>

                            {/* Description */}
                            <p className="mt-4 text-sm text-gray-300">
                                {value.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default ValuesGrid;
