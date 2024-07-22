// SocialMedia.jsx
import React from 'react';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            <a href="https://linkedin.com" className="text-[#0d0d0d] bg-[#868686] p-2 rounded-[50%]">
                <FaLinkedin size={20} />
            </a>
            <a href="https://facebook.com" className="text-[#0d0d0d] bg-[#868686] p-2 rounded-[50%]">
                <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" className="text-[#0d0d0d] bg-[#868686] p-2 rounded-[50%]">
                <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" className="text-[#0d0d0d] bg-[#868686] p-2 rounded-[50%]">
                <FaInstagram size={20} />
            </a>
            <a href="https://youtube.com" className="text-[#0d0d0d] bg-[#868686] p-2 rounded-[50%]">
                <FaYoutube size={20} />
            </a>
            <a href="https://tiktok.com" className="text-[#0d0d0d] bg-[#868686] p-2 rounded-[50%]">
                <FaTiktok size={20} />
            </a>
        </div>
    );
};

export default SocialMedia;
