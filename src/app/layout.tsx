import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Infinit — Next.js App",
  description: "High-quality fashion brand website powered by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-[#111]">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
