'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import SubHeader from "../shared/subHeader";
import clsx from 'clsx';
import Link from 'next/link';

interface GifData {
    url: string;
    title: string;
    description: string;
    link: string;
}

const gifData: GifData[] = [
    {
        url: "https://res.cloudinary.com/detatjujs/image/upload/v1724140560/Website-Assets_Next-Gen_GIFs_427x427_2s_yny3mq.gif",
        title: "NEXT-GEN",
        description: "MINESWEEPER | CRASH | VIRTUAL | PLINKO",
        link: "/games?genre=NEXT-GEN&language=All&market=All&sort=latest"
    },
    {
        url: "https://res.cloudinary.com/detatjujs/image/upload/v1724140587/Website-Assets_Classic_VID_427x427_2s_qhsqv5.gif",
        title: "CLASSIC",
        description: "CARDS | DICE | TABLE | ROULETTE | TRADITIONAL",
        link: "/games?genre=CLASSIC&language=All&market=All&sort=latest"
    },
    {
        url: "https://res.cloudinary.com/detatjujs/image/upload/v1724140556/Website-Assets_Slots_GIFs_427x427_2s_qao9jv.gif",
        title: "SLOTS",
        description: "CASCADE | REEL-SLOT",
        link: "/games?genre=SLOTS&language=All&market=All&sort=latest"
    }
];

const GifGrid: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={clsx("w-full mx-auto p-4", className)}>
            <SubHeader title='GAMES FOR EVERY PLAYER' />
            <div className="flex flex-wrap -mx-2 mt-8">
                {gifData.map((gif, index) => (
                    <AnimatedGifCard key={index} gif={gif} index={index} />
                ))}
            </div>
        </div>
    );
};

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
            <Link href={gif.link}>
                <div className="flex flex-col h-full bg-[#151515] rounded-xl overflow-hidden pb-4 cursor-pointer">
                    <div className="relative w-full h-0 pb-[100%]">
                        <Image
                            src={gif.url}
                            alt={`Gif for ${gif.title}`}
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-white text-center text-[20px] lg:text-4xl font-semibold Montserrat uppercase">{gif.title}</h3>
                        <p className="text-white text-[16px] text-center mt-2 OpenSans">{gif.description}</p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default GifGrid;
