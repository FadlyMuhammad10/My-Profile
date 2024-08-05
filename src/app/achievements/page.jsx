"use client";
import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
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
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Achievements</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 border border-primary p-5 rounded-sm "
            data-aos="zoom-in-right"
          >
            <div className="mx-auto font-bold text-center">{item.title}</div>
            <div
              className="border border-primary cursor-zoom-in rounded-sm hover:scale-105"
              onClick={() => onSubmit(item.imageUrl)}
            >
              <Image
                src={item.imageUrl}
                alt={item.imageUrl}
                width={450}
                height={0}
                quality={100}
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
