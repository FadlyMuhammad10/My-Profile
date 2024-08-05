"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    // Periksa path saat ini dan atur menu aktif
    if (pathname.startsWith("/projects")) {
      setActiveMenu("projects");
    } else if (pathname.startsWith("/achievements")) {
      setActiveMenu("achievements");
    } else {
      setActiveMenu("home");
    }
  }, [pathname]);

  return (
    <header className="container mx-auto py-5 flex flex-row items-center justify-between text-secondary">
      <div className="inline-flex items-center gap-4">
        <Link href="/">
          <div className="font-bold text-lg">Fadly</div>
        </Link>

        <div className="inline-flex items-center">
          <Link href="mailto:davit9747@gmail.com" target="_blank">
            <AiOutlineMail className="w-6 h-6" />
          </Link>
        </div>
        <div className="inline-flex items-center">
          <Link href="https://www.instagram.com/fadly_muhmmd/" target="_blank">
            <AiOutlineInstagram className="w-6 h-6" />
          </Link>
        </div>
        <div className="inline-flex items-center">
          <Link
            href="https://www.linkedin.com/in/fadly-muhammad10/"
            target="_blank"
          >
            <AiOutlineLinkedin className="w-6 h-6" />
          </Link>
        </div>
        <div className="inline-flex items-center">
          <Link href="https://github.com/FadlyMuhammad10" target="_blank">
            <AiOutlineGithub className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className="inline-flex items-center gap-4">
        <Link href="/">
          <div
            className={`font-medium cursor-pointer hover:underline ${
              activeMenu === "home" && "underline underline-offset-4ya"
            }`}
          >
            Home
          </div>
        </Link>
        <Link href="/projects">
          <div
            className={`font-medium cursor-pointer hover:underline ${
              activeMenu === "projects" && "underline underline-offset-4"
            }`}
          >
            Projects
          </div>
        </Link>
        <Link href="/achievements">
          <div
            className={`font-medium cursor-pointer hover:underline ${
              activeMenu === "achievements" && "underline underline-offset-4 "
            }`}
          >
            Achievements
          </div>
        </Link>
      </div>
    </header>
  );
}
