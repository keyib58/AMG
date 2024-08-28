'use client';

import { useState, FormEvent, useEffect } from 'react';
import { getCountryOptions } from '@/lib/utils';
import AcknowledgementModal from './AcknowledgementModal';
import { LoadingSpinner } from '../shared/icons'; // Assuming LoadingSpinner is an icon component

const LuckyDrawForm: React.FC = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        country: '65', // Default to Singapore's country code
        mobilephone: '',
        agreeToCommunications: false, // State for the first checkbox
        agreeToDataProcessing: false, // State for the mandatory checkbox
    });

    const [responseMessage, setResponseMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // Manage body overflow based on modal state
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            document.body.style.overflow = ''; // Restore scrolling
        }

        // Clean up by restoring the body's overflow style when the component unmounts
        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: (e.target as HTMLInputElement).checked,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/luckydraw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            setResponseMessage(result.message);

            if (response.ok) {
                setFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    country: '65',
                    mobilephone: '',
                    agreeToCommunications: false,
                    agreeToDataProcessing: false,
                });

                setIsModalOpen(true); // Open the modal on successful submission
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setResponseMessage('An error occurred while submitting the form.');
        } finally {
            setIsLoading(false);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="w-full mx-auto p-4">
                {/* First Name Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium OpenSans text-white">First Name / Primeiro nome *</label>
                    <input
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                        className="w-full OpenSans p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                    />
                </div>

                {/* Last Name Field */}
                <div className="mb-4">
                    <label className="block OpenSans text-sm font-medium text-white">Last Name / Sobrenome *</label>
                    <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                        className="w-full OpenSans p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                    />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label className="OpenSans block text-sm font-medium text-white">Email *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full OpenSans p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                    />
                </div>

                {/* Country and Phone Number Fields */}
                <div className="flex flex-row gap-4 mt-4">
                    <div className="mb-4 w-1/2">
                        <label className="block OpenSans text-sm font-medium text-white">Country / Código do país</label>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full OpenSans p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                        >
                            {getCountryOptions().map((country, index) => (
                                <option className='OpenSans' key={`${country.code}-${index}`} value={country.code}>
                                    {country.name} (+{country.code})
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='mb-4 w-1/2'>
                        <label className="block OpenSans text-sm font-medium text-white">Phone No. / Telefone</label>
                        <input
                            type="tel"
                            name="mobilephone"
                            value={formData.mobilephone}
                            onChange={handleChange}
                            className="w-full p-2 mt-1 border OpenSans border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Checkboxes and Disclaimer */}
                <div className="mb-4">
                    <label className="flex text-white">
                        <input
                            type="checkbox"
                            name="agreeToCommunications"
                            checked={formData.agreeToCommunications}
                            onChange={handleChange}
                            className="mr-2 mt-2 rounded"
                        />
                        I agree to receive other communications from KingMidas Games / Concordo em receber outras comunicações da KingMidas Games
                    </label>
                </div>
                <div className="mb-4">
                    <label className="flex text-white">
                        <input
                            type="checkbox"
                            name="agreeToDataProcessing"
                            checked={formData.agreeToDataProcessing}
                            onChange={handleChange}
                            required // This checkbox is mandatory
                            className="mr-2 mt-2 rounded"
                        />
                        I agree to allow KingMidas Games to store and process my personal data. / Concordo em permitir que a KingMidas Games armazene e processe meus dados pessoais.*
                    </label>
                </div>
                <p className="text-sm text-white">
                    Please tick the checkbox below if you consent to us storing and processing your personal data in order to provide you the content requested.
                    / Marque a caixa de seleção abaixo se você consente que armazenemos e processemos seus dados pessoais para fornecer o conteúdo solicitado.
                </p>
                <p className="text-sm text-white">
                    You can unsubscribe from these communications at any time. / Você pode cancelar a assinatura dessas comunicações a qualquer momento.
                </p>

                {/* Submit Button */}
                <div className="mt-4">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full max-w-md cursor-pointer rounded-full bg-gradient-to-r from-[#FFA100] to-[#FFDD00] px-8 py-2 uppercase text-black shadow-md"
                    >
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </button>
                </div>

                {responseMessage && <p className="mt-4 font-bold text-white">{responseMessage}</p>}
            </form>

            {/* Acknowledgement Modal */}
            <AcknowledgementModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default LuckyDrawForm;
