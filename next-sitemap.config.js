// next-sitemap.config.js
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://kingmidasgames.com', // Replace with your actual domain
    generateRobotsTxt: true, // Optional: generate a robots.txt file
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/internal/*'],
  };
  