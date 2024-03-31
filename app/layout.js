import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Nav from "./components/nav/Nav3";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
