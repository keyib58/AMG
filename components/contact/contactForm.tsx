'use client';

import { useState, FormEvent } from 'react';
import { LoadingSpinner } from '../shared/icons';

const ContactForm: React.FC = () => {
    const initialFormData = {
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [responseMessage, setResponseMessage] = useState<string>('');
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' });

    const validateForm = () => {
        const errors = { name: '', email: '', message: '' };
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = 'Name is required.';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            errors.email = 'Email is required.';
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            errors.email = 'Please enter a valid email address.';
            isValid = false;
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required.';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            console.log('API Response:', result);

            if (response.ok) {
                setResponseMessage(result.message);
                setIsSuccess(true);
                setFormData(initialFormData);
                setFormErrors({ name: '', email: '', message: '' }); // Reset errors on success
            } else {
                setResponseMessage(result.message);
                setIsSuccess(false);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setResponseMessage('An error occurred while submitting the form.');
            setIsSuccess(false);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full rounded-xl p-6 lg:p-10 bg-[#151515]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block content-font font-medium text-white">Name *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:border-transparent"
                    />
                    {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>
                <div>
                    <label className="block content-font font-medium text-white">Email *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:border-transparent"
                    />
                    {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>
                <div>
                    <label className="block content-font font-medium text-white">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        inputMode="numeric"
                        className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:border-transparent"
                    />
                </div>
                <div>
                    <label className="block content-font font-medium text-white">Company</label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:border-transparent"
                    />
                </div>
            </div>

            <div className="mb-4">
                <label className="block content-font font-medium text-white">Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:border-transparent"
                />
                {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
            </div>

            <div className="flex justify-center lg:justify-end">
                {!isLoading ? (
                    <button
                        type="submit"
                        disabled={!formData.name || !formData.email || !formData.message}
                        className="py-2 max-w-[170px] px-4 rounded-[25px] font-medium text-white content-font transition duration-300 w-full md:w-auto whitespace-nowrap cursor-pointer"
                        style={{ background: 'linear-gradient(90deg, #693365 0%, #a64ca6 100%)' }}
                    >
                        SEND MESSAGE
                    </button>
                ) : (
                    <LoadingSpinner />
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
