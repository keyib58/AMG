'use client';

import { useState, FormEvent } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        department: 'sales',
        subject: '',
        message: '',
    });
    const [responseMessage, setResponseMessage] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        setResponseMessage(result.message);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block OpenSans font-medium text-white">Name *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
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
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:border-transparent"
                    />
                </div>
                <div>
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
            </div>

            <div className="mb-4">
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
                <label className="block OpenSans font-medium text-white">Message *</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:border-transparent"
                />
            </div>

            <div className="flex justify-center lg:justify-end">
                <button
                    type="submit"
                    className="py-2 max-w-[170px] px-4 rounded-[25px] font-medium bg-gradient-to-r from-yellow-400 to-yellow-200 text-black OpenSans transition duration-300 w-full md:w-auto whitespace-nowrap"
                    style={{ background: 'linear-gradient(90deg, #FFA100 0%, #FFDD00 100%)' }}
                >
                    SEND MESSAGE
                </button>
            </div>

            {responseMessage && <p className="mt-4 text-center text-white">{responseMessage}</p>}
        </form>
    );
};

export default ContactForm;
