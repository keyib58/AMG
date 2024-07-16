import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import SessionWrapper from "@/components/SessionWrapper";

export const metadata = {
  title: "Kingmidas Games",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable, "bg-[#0d0d0d]")}>
        <SessionWrapper>
          <Suspense fallback="...">
            <Nav />
            <main className="flex w-full flex-col items-center  py-32">
              {children}
            </main>
            <Footer />
          </Suspense>
          <VercelAnalytics />
        </SessionWrapper>
      </body>
    </html>
  );
}
