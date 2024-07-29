import React, { useEffect } from 'react';

type BackgroundOverlayProps = {
    url: string;
};

const BackgroundOverlay: React.FC<BackgroundOverlayProps> = ({ url }) => {
    useEffect(() => {
        const overlay = document.getElementById('background-overlay');
        if (overlay) {
            overlay.style.backgroundImage = url ? `url(${url})` : '';
        }
        return () => {
            if (overlay) {
                overlay.style.backgroundImage = '';
            }
        };
    }, [url]);

    return <div id="background-overlay" className="fixed top-0 left-0 w-full h-full bg-cover bg-center opacity-10 pointer-events-none z-[-1]"></div>;
};

export default BackgroundOverlay;
