'use client';
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

type MediaViewerModalProps = {
    open: boolean;
    onClose: () => void;
    mediaUrl: string;
    isTrailer: boolean;
    DialogTitle: string; // Add DialogTitle prop
};

const MediaViewerModal: React.FC<MediaViewerModalProps> = ({ open, onClose, mediaUrl, isTrailer, DialogTitle }) => {
    return (
        <Dialog.Root open={open} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 z-50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[100%] max-w-[550px] h-[100vh] transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-lg overflow-hidden">
                    <Dialog.Title className="text-white text-center text-lg p-2">
                        {DialogTitle} {isTrailer ? 'Trailer' : 'Demo'}
                    </Dialog.Title>
                    <motion.div
                        className="relative w-full h-full"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                    >
                        <div className="w-full h-full">
                            {isTrailer ? (
                                <video
                                    src={mediaUrl}
                                    controls
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <iframe
                                    src={mediaUrl}
                                    className="w-full h-full border-0"
                                    allowFullScreen
                                ></iframe>
                            )}
                        </div>
                    </motion.div>
                    <Dialog.Close>
                        <button className="absolute top-2 right-2 text-white focus:outline-none">
                            <X size={24} />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default MediaViewerModal;
