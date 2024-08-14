import React from "react";
import Head from "next/head";
import Claim from "@/components/claim/Claim";

const ClaimPage: React.FC = () => {
    const title = "Claim Your Goodie Bag with KingMidas!";
    const description =
        'Complete the tasks and claim your mystery goodie bag with KingMidas!';
    const shareUrl = "https://km2024-jul.vercel.app";
    const imageUrl = 'https://res.cloudinary.com/detatjujs/image/upload/v1723533256/demoslot_newsletter_thumbnail_iwlz9s.jpg';

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta property="og:url" content={shareUrl} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:type" content="website" />

                <meta property="og:url" content={shareUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="627" />


                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:url" content={shareUrl} />
            </Head>
            <Claim />
        </>
    )
}
export default ClaimPage;