import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/shared/NavBar";
import Footer from "@/Components/shared/Footer";
import { Toaster } from "sonner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata = {
  title: "Book Borrowing Platform",
  description: "Book Borrowing Platform",
};

import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable}  h-full antialiased`} data-theme="dark">
      <body className="min-h-full flex flex-col bg-[#0F172A] text-slate-200">
        <Providers>
          <NavBar />
          <main className="grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
          <Toaster position="top-center" richColors />
        </Providers>
      </body>

    </html>
  );
}
