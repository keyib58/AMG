import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import SessionWrapper from "@/components/SessionWrapper";
import ReduxProvider from "@/components/ReduxProvider";
import SessionLogger from "@/components/shared/SessionLogger";
import { SpeedInsights } from '@vercel/speed-insights/next';

// Metadata API for setting metadata in the app directory
export const metadata = {
  title: "Your Next-Gen Gaming Partner",
  description: "Try out our latest next-gen, classic, and slots games now! Check out what we have to offer and drop us a message for more information!",
  openGraph: {
    type: 'website',
    url: 'https://kingmidasgames.com/',
    title: "Your Next-Gen Gaming Partner",
    description: "Try out our latest next-gen, classic, and slots games now! Check out what we have to offer and drop us a message for more information!",
    images: [
      {
        url: 'https://kingmidasgames.com/sbc-socialmedia-post_link_thumbnail.jpg',
        width: 1600,
        height: 900,
        alt: 'Kingmidas Games',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Your Next-Gen Gaming Partner",
    description: "Try out our latest next-gen, classic, and slots games now! Check out what we have to offer and drop us a message for more information!",
    images: ['https://kingmidasgames.com/sbc-socialmedia-post_link_thumbnail.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable, "bg-[#0d0d0d]")}>
        <ReduxProvider>
          <SessionWrapper>
            <SessionLogger />
            <Suspense fallback="...">
              <Nav />
              <main className="mt-16">
                {children}
              </main>
              <SpeedInsights />
              <Footer className="mt-[100px] lg:mt-[200px]" />
            </Suspense>
            <VercelAnalytics />
          </SessionWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
