'use client';

import { useState, FormEvent } from 'react';
import { LoadingSpinner } from '../shared/icons'; // Ensure this import path is correct

const ContactForm: React.FC = () => {
    const initialFormData = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        department: 'sales',
        subject: '',
        message: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [responseMessage, setResponseMessage] = useState<string>('');
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false); // State for loading spinner

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            console.log('API Response:', result); // Log the API response

            if (response.ok) {
                setResponseMessage(result.message);
                setIsSuccess(true); // Indicate success
                setFormData(initialFormData); // Reset form fields
            } else {
                setResponseMessage(result.message);
                setIsSuccess(false); // Indicate failure
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setResponseMessage('An error occurred while submitting the form.');
            setIsSuccess(false);
        } finally {
            setIsLoading(false); // Hide loading spinner after API call completes
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full rounded-xl p-6 lg:p-10 bg-[#151515]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block OpenSans font-medium text-white">First Name *</label>
                    <input
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:border-transparent"
                    />
                </div>
                <div>
                    <label className="block OpenSans font-medium text-white">Last Name *</label>
                    <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:border-transparent"
                    />
                </div>
                <div>
                    <label className="block OpenSans font-medium text-white">Email *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:border-transparent"
                    />
                </div>
                <div>
                    <label className="block OpenSans font-medium text-white">Phone *</label>
                    <input
                        type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => {
                            const regex = /^[0-9+()\- ]*$/;
                            if (regex.test(e.target.value)) {
                                handleChange(e);
                            }
                        }}
                        required
                        inputMode="numeric"
                        className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:border-transparent"
                    />
                </div>
            </div>

            <div className="mb-4">
                <div className="mb-4">
                    <label className="block OpenSans font-medium text-white">Department *</label>
                    <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:border-transparent"
                    >
                        <option value="sales">Sales</option>
                        <option value="marketing">Marketing</option>
                        <option value="general">General Enquiries</option>
                    </select>
                </div>
                <label className="block OpenSans font-medium text-white">Subject *</label>
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:border-transparent"
                />
            </div>

            <div className="mb-4">
                <label className="block OpenSans font-medium text-white">Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:border-transparent"
                />
            </div>

            <div className="flex justify-center lg:justify-end">
                {!isLoading ? (
                    <button
                        type="submit"
                        className="py-2 max-w-[170px] px-4 rounded-[25px] font-medium bg-gradient-to-r from-yellow-400 to-yellow-200 text-black OpenSans transition duration-300 w-full md:w-auto whitespace-nowrap"
                        style={{ background: 'linear-gradient(90deg, #FFA100 0%, #FFDD00 100%)' }}
                    >
                        SEND MESSAGE
                    </button>
                ) : (
                    <LoadingSpinner /> // Display spinner while loading
                )}
            </div>

            {responseMessage && (
                <p className={`mt-4 text-center ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>
                    {responseMessage}
                </p>
            )}
        </form>
    );
};

export default ContactForm;
