import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import SessionProviderAuth from "./components/sessionProviderAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Youtube-HLD",
  description: "Youtube Project To Demo HLD Consepts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProviderAuth>
      <body className={inter.className}>{children}</body>
      </SessionProviderAuth>
    </html>
  );
}
