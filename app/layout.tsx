import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "./component/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AYJEF",
  description: "Info page", // work on this milki
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <NavigationBar />
        {children}
        <footer className="bg-gray-900 text-gray-300 py-6 ">
          <div className="container ">
            {/* Left side */}
            <p className="text-sm text-center">
              © {new Date().getFullYear()} AYJEF PLC. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
