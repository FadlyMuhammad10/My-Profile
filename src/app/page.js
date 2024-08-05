"use client";
import Hero from "@/components/organisms/Hero";
import AOS from "aos";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
    });
  }, []);
  return (
    <>
      <div className="">
        <Hero />
      </div>
    </>
  );
}
