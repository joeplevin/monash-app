import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Nav from "./components/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getSession } from "next-auth/react";
import StudentNav from "./components/StudentNav";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body>
        <Providers>
          <Nav />
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
