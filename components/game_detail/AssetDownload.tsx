'use client';
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

    let buttonText = 'Login As Client';
    let buttonAction: React.MouseEventHandler<HTMLButtonElement> | undefined;
    let buttonStyle: React.CSSProperties = {
        background: 'linear-gradient(90deg, #FFA100 0%, #FFDD00 100%)',
        color: 'black',
    };

    if (!user) {
        // User is not logged in, show "Login As Client" button
        buttonAction = () => {
            setShowSignInModal(true);
        };
    } else if (assetUrl === 'NA') {
        // User is logged in but asset is not ready
        buttonText = 'Asset Not Ready';
        buttonStyle = {
            background: 'gray',
            color: 'black',
            cursor: 'not-allowed',
        };
        buttonAction = () => { }; // Disable click
    } else if (user.role === 'ADMIN' || user.role === 'CLIENT') {
        // User is logged in and has permission
        buttonText = 'Download';
        buttonAction = undefined; // No click action needed, handled by the <a> element below
    } else {
        // User is logged in but does not have permission
        buttonText = 'No Permission';
        buttonStyle = {
            background: 'gray',
            color: 'black',
            cursor: 'not-allowed',
        };
        buttonAction = () => { }; // Disable click
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
                <h3 className="lg:text-3xl text-[20px] font-bold mb-6 Montserrat text-white">
                    GET YOUR GAME PROMO KIT
                </h3>
                <p className="OpenSans text-white max-w-[580px]">
                    Download the complete set of game marketing materials, including editable PSD files for landing pages and banners, plus ready-to-use JPG and PNG images in various sizes. All assets are available in multiple languages to support your global marketing campaign.
                </p>
                {user ? (
                    assetUrl === 'NA' ? (
                        <button
                            className="px-8 py-4 mt-4 rounded-full text-xl font-bold Montserrat"
                            style={buttonStyle}
                            disabled
                        >
                            {buttonText}
                        </button>
                    ) : user.role === 'ADMIN' || user.role === 'CLIENT' ? (
                        <a
                            href={assetUrl}
                            download
                            className="px-8 py-4 mt-4 rounded-full text-xl font-bold Montserrat"
                            style={buttonStyle}
                        >
                            {buttonText}
                        </a>
                    ) : (
                        <button
                            className="px-8 py-4 mt-4 rounded-full text-xl font-bold Montserrat"
                            style={buttonStyle}
                            disabled
                        >
                            {buttonText}
                        </button>
                    )
                ) : (
                    <button
                        onClick={buttonAction}
                        className="px-8 py-4 mt-4 rounded-full text-xl font-bold Montserrat"
                        style={buttonStyle}
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
