const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
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
        destination: "https://github.com/",
        permanent: false,
      },
    ];
  },
});

module.exports = nextConfig;
