'use client';

import { useState, FormEvent } from 'react';
import { LoadingSpinner } from '../shared/icons'; // Ensure this import path is correct

const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false); // State for loading spinner

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true); // Show loading spinner

    try {
      const response = await fetch('/api/subscribe', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      setMessage(result.message);
    } catch (error) {
      console.error('Error subscribing:', error);
      setMessage('An error occurred while subscribing. Please try again later.');
    } finally {
      setIsLoading(false); // Hide loading spinner after API call completes
    }
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
        {!isLoading ? (
          <button
            type="submit"
            className="py-2 max-w-[170px] px-14 md:ml-4 rounded-[25px] font-medium bg-gradient-to-r from-yellow-400 to-yellow-200 text-black OpenSans transition duration-300 w-full md:w-auto whitespace-nowrap"
            style={{ background: 'linear-gradient(90deg, #FFA100 0%, #FFDD00 100%)' }}
          >
            JOIN
          </button>
        ) : (
          <LoadingSpinner /> // Display spinner while loading
        )}
      </div>
      {message && <p className="mt-4 text-center text-white">{message}</p>}
    </form>
  );
};

export default SubscribeForm;
