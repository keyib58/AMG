// SocialMedia.jsx
import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

const SocialMedia = () => {
    return (
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            <a href="https://www.linkedin.com/company/kingmidas-games" className="text-[#0d0d0d] bg-[#868686] p-2 rounded-[50%]">
                <FaLinkedin size={20} />
            </a>
            <a href="https://www.facebook.com/people/KingMidas-Games/100088434542980/" className="text-[#0d0d0d] bg-[#868686] p-2 rounded-[50%]">
                <FaFacebook size={20} />
            </a>
            <a href="https://x.com/officialKMgames" className="text-[#0d0d0d] bg-[#868686] p-2 rounded-[50%]">
                <BsTwitterX size={20} />
            </a>
            <a href="https://www.instagram.com/officialkingmidasgames/" className="text-[#0d0d0d] bg-[#868686] p-2 rounded-[50%]">
                <FaInstagram size={20} />
            </a>
            <a href="https://www.youtube.com/channel/UCQn7Nrh1edW3xb1ucm7g9vQ" className="text-[#0d0d0d] bg-[#868686] p-2 rounded-[50%]">
                <FaYoutube size={20} />
            </a>
            <a href="https://www.tiktok.com/@officialkingmidasgames" className="text-[#0d0d0d] bg-[#868686] p-2 rounded-[50%]">
                <FaTiktok size={20} />
            </a>
        </div>
    );
};

export default SocialMedia;
