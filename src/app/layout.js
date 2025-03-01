import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Upwork Job Scraper - Find Your Next Opportunity",
  description: "Easily find and track Upwork jobs with our modern job scraping tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.variable} font-sans min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5`}>
        {children}
      </body>
    </html>
  );
}
