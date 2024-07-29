// LetsTalk.jsx
import React from 'react';
import Link from 'next/link';

const LetsTalk = () => {
    return (
        <div className="flex flex-col items-center justify-center h-60 text-center text-white p-4">
            <h3 className="text-5xl font-bold mb-2 text-[#FFD868] Montserrat">LET’S TALK!</h3>
            <p className="mb-4 text-xl OpenSans">We’re more than just your game provider, but also your partner in <br></br>game development.</p>
            <Link style={{ background: 'linear-gradient(90deg, #FFA100 0%, #FFDD00 100%)' }} className="px-8 OpenSans py-2 rounded-[20px] text-black font-bold hover:bg-gray-200" href="/contact">
                CONNECT WITH US
            </Link>
        </div>
    );
}

export default LetsTalk;
