"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "../../configs/axios";

const onSubmit = async (imageUrl) => {
  if (typeof window !== "undefined") {
    window.open(imageUrl, "_blank");
  }
};

export default function Achievements() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/api/achievement");
        setData(result);
      } catch (error) {
        console.error("Error fetching experience data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container py-5  flex flex-col gap-5">
      <div className="grid grid-cols-3 gap-5 text-white">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative p-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-sm shadow-lg shadow-sky-500/50"
            data-aos="zoom-in-right"
          >
            <div className="flex flex-col gap-3 bg-slate-900  p-5 rounded-sm shadow-lg shadow-indigo-500/50">
              <div className="mx-auto font-bold text-center">{item.title}</div>
              <div
                className="cursor-zoom-in hover:scale-105"
                onClick={() => onSubmit(item.imageUrl)}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.imageUrl}
                  width={450}
                  height={0}
                  quality={100}
                  className="w-full rounded-sm"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
