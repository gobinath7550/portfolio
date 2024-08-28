import { Inter } from "next/font/google";
import "./assets/globals.css";
import "./assets/custom.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gobinath M",
  description:
    "Transforming ideas into reality through innovative web development, I am dedicated to creating seamless and engaging user experiences. Crafting beautiful and functional websites with a focus on user-centric design, I strive to bring creativity and technical expertise together to build impactful web solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
