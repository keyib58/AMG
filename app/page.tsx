import Head from 'next/head';
import HomeContainer from "@/components/home/HomeContainer";

export default async function Home() {
  const title = 'Welcome to KingMidas!';
  const description = 'Join us to explore amazing opportunities and claim your goodie bag!';
  const shareUrl = 'https://km2024-jul.vercel.app/'; // Replace with your actual URL
  const imageUrl = 'https://res.cloudinary.com/detatjujs/image/upload/v1723533256/demoslot_newsletter_thumbnail_iwlz9s.jpg';

  return (
    <>
      <Head>
        <title>{title}</title>
        {/* Open Graph Meta Tags */}
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:url" content={shareUrl} />
      </Head>
      <HomeContainer />
    </>
  );
}
