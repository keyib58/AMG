import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const LetsTalk = ({ className }: { className: string }) => {
    return (
        <div className={clsx("flex flex-col items-center justify-center text-center text-white", className)}>
            <h3 className="text-5xl font-bold mb-2 text-[#FFD868] title-font">We Back You Up</h3>
            <p className="mb-4 content-font max-w-[800px]"> Our professional, robust, and creative logistics team is located worldwide, ready around the clock to provide technical support and expert problem-solving solutions.</p>
            <Link
                style={{ background: 'linear-gradient(90deg, #FFA100 0%, #FFDD00 100%)' }}
                className="px-8 menu-btn-font py-2 rounded-[20px] text-black font-bold hover:bg-gray-200"
                href="/contact"
            >
                CONNECT WITH US
            </Link>
        </div>
    );
}

export default LetsTalk;
