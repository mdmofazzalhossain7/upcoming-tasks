import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Upcoming Tasks",
  description: "Get all upcoming tasks in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="fixed bottom-0 left-0 right-0 sm:top-0 sm:left-0 sm:right-0">
          <Navbar />
        </div>
        <div className="pb-[40px] sm:pt-[40px] overflow-scroll">{children}</div>
      </body>
    </html>
  );
}
