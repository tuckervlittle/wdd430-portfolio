import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";


export default function RootLayout({ children }: {children: ReactNode}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
