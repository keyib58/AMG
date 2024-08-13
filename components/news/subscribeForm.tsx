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
    <form onSubmit={handleSubmit} className="m-auto rounded-md shadow-md">
      <label className="block mb-2 text-lg font-medium text-white">
        Email *
      </label>
      <div className="flex flex-col md:flex-row items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 mb-4 md:mb-0 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:border-transparent"
        />
        <button
          type="submit"
          className="py-2 max-w-[170px] px-4 md:ml-4 rounded-[25px] font-medium bg-gradient-to-r from-yellow-400 to-yellow-200 text-black OpenSans transition duration-300 w-full md:w-auto whitespace-nowrap"
          style={{ background: 'linear-gradient(90deg, #FFA100 0%, #FFDD00 100%)' }}
        >
          JOIN FREE
        </button>
      </div>
      {message && <p className="mt-4 text-center text-white">{message}</p>}
    </form>
  );
};

export default SubscribeForm;
