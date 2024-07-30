/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "vercel.com",
      "api.dicebear.com",
      "res.cloudinary.com",
      "media.giphy.com",
      "publiccdn.kingdomhall729.com",
      "kingmakergames-public.s3.ap-southeast-1.amazonaws.com",
    ],
    dangerouslyAllowSVG: true,
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/steven-tey/precedent",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
