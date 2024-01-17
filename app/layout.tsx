import "@/style/globals.css";
import type { Metadata } from "next";
import type { NextFont } from "next/dist/compiled/@next/font";
import { Outfit } from "next/font/google";
import type { ReactNode } from "react";

const outfit: NextFont = Outfit({
  weight: ["300", "400", "600"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NFT Preview Card Component",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} flex h-screen w-screen items-center justify-center bg-darkblueMain`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
