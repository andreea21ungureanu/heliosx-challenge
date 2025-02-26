import Image from "next/image";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Consultation for pear allergy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <div className="flex justify-center p-4 bg-[#053e80]">
          <Image
            src="/med-express.png"
            width={300}
            height={300}
            className="w-48 md:w-64"
            alt="MedExpress Logo"
          />
        </div>
        {children}
        <footer className="flex flex-col md:flex-row justify-between p-4 mt-auto bg-[#053e80] text-white">
          <div>Looking for more treatments? Reach out to us directly!</div>
          <div>Contact Us</div>
        </footer>
      </body>
    </html>
  );
}
