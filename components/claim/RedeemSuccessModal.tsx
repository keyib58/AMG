'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

interface RedeemSuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RedeemSuccessModal: React.FC<RedeemSuccessModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }} // Slide down when closing
                    transition={{ duration: 0.4 }}
                    className="fixed bottom-0 left-0 right-0 p-4 bg-[#151515] rounded-t-[1rem] shadow-lg max-w-[700px] max-h-[80vh] overflow-y-auto m-auto"
                >
                    <div className="relative flex flex-col items-center">
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 text-white hover:text-neutral-200"
                            aria-label="Close"
                            style={{ transform: 'scale(1.3)', transition: 'transform 0.2s ease-in-out' }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        >
                            ✕
                        </button>
                        <img
                            src="https://res.cloudinary.com/detatjujs/image/upload/v1724040581/e506dcb74d3a33e0f3c8d923f1c20147_m1mv6k.png"
                            alt="Success"
                            className="w-full mt-4 max-w-[350px]"
                        />
                        <h3 className="Montserrat bg-gradient-to-r from-[#FFD868] to-[#FFFFFF] bg-clip-text px-4 text-center text-[2rem] font-semibold uppercase text-transparent lg:text-3xl mt-4">
                            Congratulations!<br />Parabéns!
                        </h3>
                    </div>
                    <p className="mt-4 text-white OpenSans text-center">
                        You have completed all required tasks. Please approach any KingMidas staff member to claim your prize!
                    </p>
                    <p className="mt-4 text-[#BABABA] OpenSans text-center mb-[50px]">
                        Completaste todas as tarefas. Por favor, fala com qualquer membro da equipa KingMidas para receber o teu prémio!
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default RedeemSuccessModal;
