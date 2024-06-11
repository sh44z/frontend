import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PropertyType from "@/components/PropertyType";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Light Blue House",
  description: "your room is ready ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <PropertyType />
        {children}
        <Footer />
      </body>
    </html>
  );
}
