import Nav from "./components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Webtion",
  description: "Create beautiful website as per your needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
