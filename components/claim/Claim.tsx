'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaSpinner } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { FaCircleCheck } from "react-icons/fa6";

const shareUrl = 'https://km2024-jul.vercel.app/';
const title = 'Claim Your Goodie Bag with KingMidas!';
const description = 'Complete the tasks and claim your mystery goodie bag with KingMidas!';

const Claim: React.FC = () => {
    const [completed, setCompleted] = useState<number>(0);
    const [loading, setLoading] = useState<Record<string, boolean>>({
        linkedin: false,
        facebook: false,
        twitter: false,
    });
    const [done, setDone] = useState<Record<string, boolean>>({
        linkedin: false,
        facebook: false,
        twitter: false,
    });

    const handleShare = (platform: string, shareLink: string) => {
        // Open the sharing link immediately
        window.open(shareLink, '_blank');

        // Start the countdown and set the loading state
        setLoading(prev => ({ ...prev, [platform]: true }));

        setTimeout(() => {
            setLoading(prev => ({ ...prev, [platform]: false }));
            setDone(prev => ({ ...prev, [platform]: true }));
            setCompleted(prev => prev + 1);
        }, 5000); // 5 seconds countdown
    };

    return (
        <div className="mt-10 flex justify-center p-5">
            <div className="max-w-[700px] w-full text-center">
                <Image
                    src="/logo.png"
                    alt="Kingmidas logo"
                    className="mx-auto max-w-[12rem] lg:max-w-[280px]"
                    width={300}
                    height={100}
                    priority
                />
                <h2 className="text-xl font-bold Montserrat uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#FFD868] to-[#FFFFFF]">
                    CLAIM YOUR GOODIE BAG
                </h2>
                <p className="OpenSans mt-4 text-[#BABABA]">RECLAMA O TEU GOODIE BAG</p>
                <p className="OpenSans text-white mt-4">
                    Complete the following 3 tasks and approach any KingMidas staff
                    member to claim your mystery bag!
                </p>
                <p className="OpenSans text-[#BABABA] mt-2">
                    Completa as seguintes 3 tarefas e fala com qualquer membro da
                    equipa KingMidas para receber o teu saco mistério!
                </p>

                <div className="flex flex-col gap-4 mt-4">
                    {/* LinkedIn Button */}
                    <div className="flex items-center mb-2">
                        <button
                            onClick={() => handleShare(
                                'linkedin',
                                `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
                            )}
                            disabled={loading.linkedin || done.linkedin}
                            className={`block Montserrat font-bold w-full ${done.linkedin ? 'mr-2' : ''} py-2.5 bg-[#0077b5] text-white rounded-[25px] text-center relative transition-all duration-300 ${loading.linkedin ? 'cursor-not-allowed' : ''}`}
                        >
                            <FaLinkedinIn size={24} className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                            {loading.linkedin ? <FaSpinner className="animate-spin mx-auto" /> : 'Share on LinkedIn'}
                        </button>
                        {done.linkedin && (
                            <FaCircleCheck size={24} color="#00B53E" className="transition-opacity duration-300 opacity-100" />
                        )}
                    </div>

                    {/* Facebook Button */}
                    <div className="flex items-center mb-2">
                        <button
                            onClick={() => handleShare(
                                'facebook',
                                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(title)}`
                            )}
                            disabled={loading.facebook || done.facebook}
                            className={`block Montserrat font-bold w-full ${done.facebook ? 'mr-2' : ''} py-2.5 bg-[#3b5998] text-white rounded-[25px] text-center relative transition-all duration-300 ${loading.facebook ? 'cursor-not-allowed' : ''}`}
                        >
                            <FaFacebookF size={24} className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                            {loading.facebook ? <FaSpinner className="animate-spin mx-auto" /> : 'Share on Facebook'}
                        </button>
                        {done.facebook && (
                            <FaCircleCheck size={24} color="#00B53E" className="transition-opacity duration-300 opacity-100" />
                        )}
                    </div>

                    {/* Twitter X Button */}
                    <div className="flex items-center mb-2">
                        <button
                            onClick={() => handleShare(
                                'twitter',
                                `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`
                            )}
                            disabled={loading.twitter || done.twitter}
                            className={`block Montserrat font-bold w-full ${done.twitter ? 'mr-2' : ''} py-2.5 bg-black text-white rounded-[25px] text-center relative transition-all duration-300 ${loading.twitter ? 'cursor-not-allowed' : ''}`}
                        >
                            <BsTwitterX size={24} className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                            {loading.twitter ? <FaSpinner className="animate-spin mx-auto" /> : 'Share on X'}
                        </button>
                        {done.twitter && (
                            <FaCircleCheck size={24} color="#00B53E" className="transition-opacity duration-300 opacity-100" />
                        )}
                    </div>
                </div>

                <p className="Montserrat text-lg text-white mt-4">{completed} / 3 completed</p>

                {completed >= 3 && (
                    <button
                        onClick={() => console.log('open redeem modal')}
                        className="mt-6 bg-gradient-to-r from-[#FFD868] to-[#FFFFFF] text-black font-bold py-2.5 px-6 rounded-[25px] shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        Redeem Your Goodie Bag
                    </button>
                )}
            </div>
        </div>
    );
};

export default Claim;
