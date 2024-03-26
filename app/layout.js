import "./globals.css";
import { Bebas_Neue, Playfair_Display } from "next/font/google";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"], variable: "--font-bebas" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400"], variable: "--font-playfair" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
