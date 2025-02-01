import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Footer from "@/components/Footer"
import Work from "@/components/Work"
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
        <div className="w-full cursor-pointer">
          <div className="bg-gradient-to-r from-[#0d1224] to-[#0a0d37] border border-[#1b2c68a0] overflow-hidden shadow-2xl">
            <div className="fixed z-50 w-full">
              <div className="flex flex-row">
                <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 via-slate-500 to-violet-600"></div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#0d1224] to-[#0a0d37]">
                <Routes/>
                <div>
                    <a
                      href="mailto:goutham4126@gmail.com"
                    >
                      <img src="https://avatars.githubusercontent.com/u/155656523?v=4" alt="Goutham" className="w-10 h-10 rounded-full border-2 border-slate-400"/>
                    </a>
                </div>
              </div>
            </div>
            <div>
                <div className="h-full mt-16">
                {children}
                </div>
                <Work/>
                <Footer/>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
