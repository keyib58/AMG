import { NextResponse } from 'next/server';

export const runtime = "edge";
export const alt = "Kingmidas Games - Claim Your Goodie Bag Today!";
export const contentType = "image/jpeg";

export default async function OG() {
  // Instead of generating an image, simply redirect or return the static image
  return NextResponse.redirect('https://km2024-jul.vercel.app/sbc-socialmedia-post_link_thumbnail.jpg');
}
