import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer"
import Navbar from "@/components/navbar"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Goutham | Portfolio",
  description: "Portfolio",
  icons:{
    icon:"https://i.postimg.cc/c4yP918b/Screenshot-2024-09-26-185953.png"
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="bg-black text-white min-h-screen">
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
