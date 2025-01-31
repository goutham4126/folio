import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Footer from "@/components/Footer"
import Routes from "@/components/Routes"
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
        <div className="w-full">
          <div className="bg-gradient-to-r from-[#0d1224] to-[#0a0d37] border border-[#1b2c68a0] overflow-hidden shadow-2xl">
            <div className="flex flex-row">
              <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 via-slate-500 to-violet-600"></div>
            </div>
            <div className="flex items-center justify-between px-6 py-4">
              <Routes/>
              <div className="hidden lg:flex">
                  <a
                    href="mailto:goutham4126@gmail.com"
                    className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200"
                  >
                    Contact Me <span aria-hidden="true" className="ml-2">&rarr;</span>
                  </a>
              </div>
            </div>
            <div>
                <div className="h-screen">
                {children}
                </div>
                <Footer/>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
