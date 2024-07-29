'use client'
import React from 'react';
import { useSignInModal } from '../layout/sign-in-modal';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';

type AssetDownloadProps = {
    assetUrl: string;
    cursor?: string;
};

const AssetDownload: React.FC<AssetDownloadProps> = ({ assetUrl }) => {
    const { setShowSignInModal, SignInModal } = useSignInModal();
    const { data: session } = useSession();
    const user = session?.user;

    let buttonText = 'Sign In';
    let buttonAction = () => setShowSignInModal(true);
    let buttonStyle: React.CSSProperties = {
        background: 'linear-gradient(90deg, #FFA100 0%, #FFDD00 100%)',
        color: 'black',
        cursor: 'not-allowed',
    };

    if (user) {
        if (user.role === 'ADMIN' || user.role === 'CLIENT') {
            buttonText = 'Download';
            buttonAction = () => window.open(assetUrl, '_blank');
        } else {
            buttonText = 'No Permission';
            buttonStyle = {
                background: 'gray',
                color: 'black',
                cursor: 'not-allowed',
            };
            buttonAction = () => { }; // No action
        }
    }

    return (
        <div className="relative bg-[#111111] w-full py-10">
            <div className="absolute inset-0 -z-10"></div>
            <motion.div
                className="relative max-w-[1350px] mx-auto flex flex-col items-start text-white px-8 lg:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-3xl font-bold mb-6 Montserrat">DOWNLOAD GAME <br /> MARKETING ASSETS</h2>
                <button
                    onClick={buttonAction}
                    className={`px-8 py-4 rounded-full text-xl font-medium`}
                    style={buttonStyle}
                    disabled={buttonText === 'No Permission'}
                >
                    {buttonText}
                </button>
                <SignInModal />
            </motion.div>
        </div>
    );
};

export default AssetDownload;
