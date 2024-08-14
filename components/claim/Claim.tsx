'use client';

import React from 'react';
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    FacebookIcon,
    XIcon,
    LinkedinIcon,
} from 'react-share';

const shareUrl = 'https://km2024-jul.vercel.app/'; // Replace with your actual URL
const title = 'Claim Your Goodie Bag with KingMidas!';
const description =
    'Complete the tasks and claim your mystery goodie bag with KingMidas!';
const imageUrl =
    'https://res.cloudinary.com/detatjujs/image/upload/v1723533256/demoslot_newsletter_thumbnail_iwlz9s.jpg';

const Claim: React.FC = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>CLAIM YOUR GOODIE BAG</h1>
            <p>RECLAMA O TEU GOODIE BAG</p>
            <p>
                Complete the following 3 tasks and approach any KingMidas staff
                member to claim your mystery bag!
            </p>
            <p>
                Completa as seguintes 3 tarefas e fala com qualquer membro da
                equipa KingMidas para receber o teu saco mistério!
            </p>

            <div style={{ marginTop: '20px' }}>
                <FacebookShareButton url={shareUrl} hashtag="#KingMidas" title='tilte' content='sadsads'>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>

                <TwitterShareButton url={shareUrl} title={title} content={description} >
                    <XIcon size={32} round />
                </TwitterShareButton>

                <LinkedinShareButton url={shareUrl} title={title}>
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
            </div>
        </div>
    );
};

export default Claim;
