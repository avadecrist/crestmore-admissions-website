import type { Metadata } from "next";
import { Geist, Geist_Mono, Abhaya_Libre, Alegreya_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./_ui/components/navbar";
import Footer from "./_ui/footer/footer";


const abhayaLibre = Abhaya_Libre({
  variable: "--font-abhaya",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const alegreyaSans = Alegreya_Sans({
  variable: "--font-alegreya",
  subsets: ["latin"],
  weight: ["400",],
});

export const metadata: Metadata = {
  title: "Crestmore Admissions",
  description: "Officiate website for the Crestmore Admissions Podcast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${abhayaLibre.variable} ${alegreyaSans.variable} antialiased`}>
      <body className='min-h-screen flex flex-col bg-offwhite overscroll-none'>
        <Navbar />
        <main className='flex-1 bg-background'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
