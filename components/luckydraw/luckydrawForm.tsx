'use client';

import { useState, FormEvent } from 'react';
import { getCountryOptions } from '@/lib/utils';

const LuckyDrawForm: React.FC = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        country: '65', // Default to Singapore's country code
        mobilephone: '',
    });

    const [responseMessage, setResponseMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false); // State for loading spinner

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setIsLoading(true); // Show loading spinner

        try {
            // Example API request
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
                }); // Reset form fields on success
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setResponseMessage('An error occurred while submitting the form.');
        } finally {
            setIsLoading(false); // Hide loading spinner after API call completes
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">First Name / Primeiro nome *</label>
                <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Last Name / Sobrenome *</label>
                <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email *</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Country Code / Código do país</label>
                <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                >
                    {getCountryOptions().map((country) => (
                        <option key={country.code} value={country.code}>
                            {country.name} (+{country.code})
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Phone No. / Telefone</label>
                <input
                    type="tel"
                    name="mobilephone"
                    value={formData.mobilephone}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                />
            </div>
            <div className="flex justify-center">
                <button
                    type="submit"
                    disabled={isLoading} // Disable button while loading
                    className="py-2 px-4 rounded-md font-medium bg-gradient-to-r from-yellow-400 to-yellow-200 text-black transition duration-300 w-full"
                >
                    {isLoading ? 'Submitting...' : 'Submit'}
                </button>
            </div>

            {responseMessage && <p className="mt-4 text-center text-gray-700">{responseMessage}</p>}
        </form>
    );
};

export default LuckyDrawForm;
