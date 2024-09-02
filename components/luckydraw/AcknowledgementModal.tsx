// components/AcknowledgementModal.tsx

import React from 'react';

type AcknowledgementModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const AcknowledgementModal: React.FC<AcknowledgementModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Close the modal when clicking on the overlay
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOverlayClick}>
            <div className="bg-[#151515] p-6 rounded-md shadow-lg w-96">
                <h2 className="text-xl Montserrat text-white font-bold mb-4 Mi">Thank You!</h2>
                <p className="mb-2 OpenSans text-white">Thank you for your participation! Good luck and check your email regularly for the lucky draw results!</p>
                <p className="mb-4 OpenSans text-white">Obrigado pela tua participação! Boa sorte e fica atento ao teu email para os resultados do sorteio!</p>
                <p className="mb-2 OpenSans text-white">We look forward to meeting you at our booth, A450, at SBC Summit 2024!</p>
                <p className="mb-4 OpenSans text-white">Estamos ansiosos por te encontrar no nosso stand, A450, na SBC Summit 2024!</p>
                <p className="mb-4 OpenSans text-white">Check out our latest games <a href="https://kingmidasgames.com/games" className="underline font-bold text-white">here</a> and contact us for business discussions <a href="https://kingmidasgames.com/contact/" className="text-white font-bold underline">here</a>!</p>
                <p className="mb-4 OpenSans text-white">Confira nossos jogos mais recentes <a href="https://kingmidasgames.com/games" className="underline font-bold text-white">aqui</a> e entre em contato conosco para discussões de negócios <a href="https://kingmidasgames.com/contact/" className="text-white font-bold underline">aqui</a>!</p>
                <button onClick={onClose} className="mt-4 cursor-pointer rounded-full bg-gradient-to-r from-[#FFA100] to-[#FFDD00] px-8 py-2 uppercase text-black">
                    Close
                </button>
            </div>
        </div>
    );
};

export default AcknowledgementModal;
