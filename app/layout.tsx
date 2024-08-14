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
import Head from "next/head"; // Import Head

export const metadata = {
  title: "Kingmidas Games",
  description: "Join us to explore amazing opportunities and claim your goodie bag!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const imageUrl = '/socialShare.jpg'; // Path to the image in the public folder
  const shareUrl = 'https://km2024-jul.vercel.app/'; // Replace with your actual URL

  return (
    <html lang="en">
      <Head>
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kingmidas Games" />
        <meta property="og:description" content="Join us to explore amazing opportunities and claim your goodie bag!" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="900" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kingmidas Games" />
        <meta name="twitter:description" content="Join us to explore amazing opportunities and claim your goodie bag!" />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:url" content={shareUrl} />
      </Head>
      <body className={cx(sfPro.variable, inter.variable, "bg-[#0d0d0d]")}>
        <ReduxProvider>
          <SessionWrapper>
            <SessionLogger />
            <Suspense fallback="...">
              <Nav />
              <main className="flex w-full flex-col items-center mt-16 " >
                {children}
              </main>
              <Footer className="mt-[100px] lg:mt-[200px]" />
            </Suspense>
            <VercelAnalytics />
          </SessionWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
