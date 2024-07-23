'use client';

import { useState, FormEvent } from 'react';

const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/subscribe', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();
    setMessage(result.message);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-gray-100 rounded-md shadow-md">
      <label className="block mb-2 text-lg font-medium text-gray-700">
        Email Address
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300"
      >
        Submit
      </button>
      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
    </form>
  );
};

export default SubscribeForm;
