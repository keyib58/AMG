// SocialMedia.jsx
import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

const SocialMedia = () => {
    return (
        <div className="flex justify-center sm:justify-start gap-4">
            <a target="_blank" href="https://www.linkedin.com/company/104438801/admin/dashboard" className="text-[#0d0d0d] bg-[#868686] p-2 rounded-[50%]" rel="noreferrer">
                <FaLinkedin size={20} />
            </a>
            <a target='_blank' rel="noreferrer" href="https://x.com/acemakergaming" className="text-[#0d0d0d] bg-[#868686] p-2 rounded-[50%]">
                <BsTwitterX size={20} />
            </a>
            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/acemakergaming/" className="text-[#0d0d0d] bg-[#868686] p-2 rounded-[50%]">
                <FaInstagram size={20} />
            </a>
        </div>
    );
};

export default SocialMedia;
