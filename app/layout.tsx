import { Questrial } from "next/font/google";
import "./globals.css";

const questrial = Questrial({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Launch Your Ecommerce business - Build Online Store with QPe",
  description:
    "Ecommerce platform QPe helps users start business online without any coding skills. Easily create your online store or website. Get started today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={questrial.className}>{children}</body>
    </html>
  );
}
