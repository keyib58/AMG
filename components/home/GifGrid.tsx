'use client'

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import SubHeader from "../shared/subHeader";

interface GifData {
    url: string;
    title: string;
    description: string;
}

const gifData: GifData[] = [
    {
        url: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
        title: "NEXT-GEN",
        description: "Minesweeper, crash, virtual, plinko"
    },
    {
        url: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
        title: "CLASSIC",
        description: "Cards, dice, table, roulette, traditional"
    },
    {
        url: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
        title: "SLOTS",
        description: "Cascade, reel-slot"
    }
];

const GifGrid: React.FC = () => {
    return (
        <div className="w-full mx-auto p-4 mt-20">
            <SubHeader title='GAMES FOR EVERY PLAYER' />
            <div className="flex flex-wrap -mx-2 mt-8">
                {gifData.map((gif, index) => (
                    <AnimatedGifCard key={index} gif={gif} index={index} />
                ))}
            </div>
        </div>
    );
}

interface AnimatedGifCardProps {
    gif: GifData;
    index: number;
}

const AnimatedGifCard: React.FC<AnimatedGifCardProps> = ({ gif, index }) => {
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
            <div className="flex flex-col h-full bg-[#151515] rounded-xl overflow-hidden pb-8">
                <div className="relative w-full h-0 pb-[100%]">
                    <Image
                        src={gif.url}
                        alt={`Gif for ${gif.title}`}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-white text-center text-4xl font-semibold Montserrat uppercase">{gif.title}</h3>
                    <p className="text-white text-center mt-2 OpenSans">{gif.description}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default GifGrid;
