"use client";
import React, { useEffect } from "react";
import AOS from "aos";

export default function ProjectLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
    });
  }, []);
  return <div className="min-h-screen">{children}</div>;
}
