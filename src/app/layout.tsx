import type { Metadata } from "next";
import { Abhaya_Libre, Alegreya_Sans } from "next/font/google";
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
  metadataBase: new URL("https://crestmoreadmissions.com"),
  title: {
    default: "Crestmore Admissions",
    template: "%s | Crestmore Admissions",
  },
  description:
    "An original Audio Fiction podcast series created by students, for students.",
  openGraph: {
    title: "Crestmore Admissions",
    description:
      "An original Audio Fiction podcast series created by students, for students. Inspired by the real-life experiences of student workers in college admissions offices.",
    url: "https://crestmoreadmissions.com",
    siteName: "Crestmore Admissions",
    images: [
      {
        url: "/hero.webp", 
        width: 1600,
        height: 1600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
