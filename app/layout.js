import "./globals.css";
import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"], variable: "--font-bebas" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bebas.variable}>{children}</body>
    </html>
  );
}
