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
    let buttonAction: React.MouseEventHandler<HTMLButtonElement> | undefined;
    let buttonStyle: React.CSSProperties = {
        background: 'linear-gradient(90deg, #FFA100 0%, #FFDD00 100%)',
        color: 'black',
    };

    if (user) {
        if (user.role === 'ADMIN' || user.role === 'CLIENT') {
            buttonText = 'Download';
            buttonAction = undefined; // No click action needed, handled by the <a> element below
        } else {
            buttonText = 'No Permission';
            buttonStyle = {
                background: 'gray',
                color: 'black',
                cursor: 'not-allowed',
            };
            buttonAction = () => { };
        }
    }

    return (
        <div className="lg:mt-[200px] mt-[40px] relative bg-[#111111] w-[90%] py-10 rounded-lg lg:w-full lg:rounded-none">
            <div className="absolute inset-0 -z-10"></div>
            <motion.div
                className="relative max-w-[1350px] mx-auto flex flex-col items-center text-center px-4 lg:items-start lg:text-left lg:w-full w-[90%]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className="lg:text-3xl text-[20px] font-bold mb-6 Montserrat text-white">DOWNLOAD GAME <br /> MARKETING ASSETS</h2>
                {user && (user.role === 'ADMIN' || user.role === 'CLIENT') ? (
                    <a
                        href={assetUrl}
                        download
                        className="px-8 py-4 rounded-full text-xl font-bold Montserrat"
                        style={buttonStyle}
                    >
                        {buttonText}
                    </a>
                ) : (
                    <button
                        onClick={buttonAction}
                        className="px-8 py-4 rounded-full text-xl font-bold Montserrat"
                        style={buttonStyle}
                        disabled={buttonText === 'No Permission'}
                    >
                        {buttonText}
                    </button>
                )}
                <SignInModal />
            </motion.div>
        </div>
    );
};

export default AssetDownload;
