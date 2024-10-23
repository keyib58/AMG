import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = [
    {
      url: "https://precedent.dev",
      lastModified: new Date(),
    },
    {
      url: "https://precedent.dev/about",
      lastModified: new Date(),
    },
    {
      url: "https://precedent.dev/contact",
      lastModified: new Date(),
    },
    // Add more static URLs as needed
  ];

  return staticUrls;
}
