import Navbar from "@/components/layouts/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Fadly Hidayat",
  description: "Web Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative overflow-x-hidden bg-secondary `}
      >
        <div className="shadow-sm bg-primary sticky top-0 right-0 left-0 z-50 ">
          {" "}
          {/* sticky untuk membuat navbar tetap diatas dengan awalnya relative to fixed dan z-50 untuk membuat lapisan */}
          <Navbar />
        </div>
        <main>{children}</main>
        <footer className="bg-slate-900 text-white font-bold">
          <div className="container mx-auto py-16 ">
            <p className="text-center">
              © {new Date().getFullYear()} - Muhammad Fadly Hidayat
            </p>
          </div>
        </footer>
        <ToastContainer position="top-center" />
      </body>
    </html>
  );
}
