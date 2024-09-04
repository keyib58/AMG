'use client'

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import SubHeader from "../shared/subHeader";
import clsx from 'clsx';

interface Data {
    url: string;
    title: string;
    description: string;
}

interface AnimatedCardProps {
    data: Data;
    index: number;
}

const staticData: Data[] = [
    {
        url: "https://res.cloudinary.com/detatjujs/image/upload/v1725416921/a32d9b783f4b32943f8eeaa3c8054cce_m9pjgh.jpg",
        title: "TAILORED GAMES",
        description: "We ensure authenticity across markets and cultures, while tailoring games for maximum market adoption and player resonance."
    },
    {
        url: "https://res.cloudinary.com/detatjujs/image/upload/v1725351103/minigames_ewbngl.png",
        title: "MINIGAMES",
        description: "We add an additional layer of engagement to amplify the thrill and redefine gaming for your players."
    },
    {
        url: "https://res.cloudinary.com/detatjujs/image/upload/v1725416921/gamification_banner_qubsjb.jpg",
        title: "GAMIFICATION",
        description: "We prioritise elevating player engagement and retention through the strategic use of gamification techniques."
    }
];

const StaticGrid: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={clsx("w-full mx-auto p-4", className)}>
            <SubHeader title='BOOSTING PLAYER ENGAGEMENT AND GROWTH' />
            <div className="flex flex-wrap -mx-2 mt-8">
                {staticData.map((data, index) => (
                    <AnimatedCard key={index} data={data} index={index} />
                ))}
            </div>
        </div>
    );
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ data, index }) => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            className="w-full md:w-1/3 px-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5, delay: index * 0.2 }}
        >
            <div className="flex flex-col h-full bg-[#151515] rounded-xl overflow-hidden pb-4">
                <div className="relative w-full h-0 pb-[100%]">
                    <Image
                        src={data.url}
                        alt={`Image for ${data.title}`}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="py-4 px-8">
                    <h3 className="text-white text-center text-2xl font-semibold Montserrat uppercase">{data.title}</h3>
                    <p className="text-white text-center mt-2 OpenSans">{data.description}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default StaticGrid;
