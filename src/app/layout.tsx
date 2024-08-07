import '../app/luxarybook.theme.css'
import "./globals.css";
import Navigation from "./components/navigation";
import { Inter } from "next/font/google";
import React from 'react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kshamta Purohit",
  description: "Generated by Kshamta Purohit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
