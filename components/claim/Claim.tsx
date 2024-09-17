'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaSpinner } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { FaCircleCheck } from "react-icons/fa6";
import RedeemSuccessModal from './RedeemSuccessModal';

const shareUrl = 'https://km2024-jul.vercel.app/';
const title = 'Had a great time catching up with the KingMidas team today! Check out the latest next-gen game offerings they have to offer!#KingMidasGames';
const previewImageUrl = 'https://km2024-jul.vercel.app/sbc-socialmedia-post_link_thumbnail.jpg';

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
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleShare = (platform: string) => {
        setLoading(prev => ({ ...prev, [platform]: true }));

        setTimeout(() => {
            setLoading(prev => ({ ...prev, [platform]: false }));
            setDone(prev => ({ ...prev, [platform]: true }));
            setCompleted(prev => Math.min(prev + 1, 3)); // Ensure max 3 completed
        }, 5000); // 5 seconds countdown
    };

    const handleRedeemClick = () => {
        if (completed >= 3) {
            setIsModalOpen(true);
            // Disable scrolling
            document.body.style.overflow = 'hidden';
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // Re-enable scrolling
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        // Clean up in case the modal is closed and the component is unmounted
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

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
                    {/* LinkedIn Link */}
                    <div className="flex items-center mb-2">
                        <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(title)}&source=KingMidas&image=${encodeURIComponent(previewImageUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => handleShare('linkedin')}
                            className={`block Montserrat font-bold w-full ${done.linkedin ? 'mr-2' : ''} py-2.5 bg-[#0077b5] text-white rounded-[25px] text-center relative transition-all duration-300 ${loading.linkedin ? 'cursor-not-allowed' : ''}`}
                        >
                            <FaLinkedinIn size={24} className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                            {loading.linkedin ? <FaSpinner className="animate-spin mx-auto" /> : 'Share on LinkedIn'}
                        </a>
                        {done.linkedin && (
                            <FaCircleCheck size={24} color="#00B53E" className="transition-opacity duration-300 opacity-100" />
                        )}
                    </div>

                    {/* Facebook Link */}
                    <div className="flex items-center mb-2">
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(title)}&picture=${encodeURIComponent(previewImageUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => handleShare('facebook')}
                            className={`block Montserrat font-bold w-full ${done.facebook ? 'mr-2' : ''} py-2.5 bg-[#3b5998] text-white rounded-[25px] text-center relative transition-all duration-300 ${loading.facebook ? 'cursor-not-allowed' : ''}`}
                        >
                            <FaFacebookF size={24} className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                            {loading.facebook ? <FaSpinner className="animate-spin mx-auto" /> : 'Share on Facebook'}
                        </a>
                        {done.facebook && (
                            <FaCircleCheck size={24} color="#00B53E" className="transition-opacity duration-300 opacity-100" />
                        )}
                    </div>



                    {/* Twitter X Link */}
                    <div className="flex items-center mb-2">
                        <a
                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}&image=${encodeURIComponent(previewImageUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => handleShare('twitter')}
                            className={`block Montserrat font-bold w-full ${done.twitter ? 'mr-2' : ''} py-2.5 bg-black text-white rounded-[25px] text-center relative transition-all duration-300 ${loading.twitter ? 'cursor-not-allowed' : ''}`}
                        >
                            <BsTwitterX size={24} className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                            {loading.twitter ? <FaSpinner className="animate-spin mx-auto" /> : 'Share on X'}
                        </a>
                        {done.twitter && (
                            <FaCircleCheck size={24} color="#00B53E" className="transition-opacity duration-300 opacity-100" />
                        )}
                    </div>
                </div>

                <div className="Montserrat text-lg font-bold text-white mt-4">{completed} / 3 completed</div>

                <button
                    onClick={handleRedeemClick}
                    className={`mt-6 max-w-[200px] ${completed >= 3 ? 'bgGradientBtn cursor-pointer' : 'gradientOutlineBtn cursor-not-allowed'}`}
                    disabled={completed < 3}
                >
                    Redeem
                </button>

                <div className='space-y-2'>
                    {isAuthenticated ? (
                        <Button onClick={() => { LogOut() }}>
                            Log out
                        </Button>
                    ) : (
                        <div>
                        <Button onClick={()=>{LogIn()}}>
                            Log in
                        </Button>
                        <Button onClick={()=>{Register()}}>
                            Register
                        </Button>
                        </div>
                    )}
                </div>

                <RedeemSuccessModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
        </div>
    );
};

export default Claim;
