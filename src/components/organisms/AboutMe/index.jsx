"use client";
import TitleSection from "@/components/atoms/TitleSection";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";

export default function AboutMe() {
  const onSubmit = () => {
    const cv = "/doc/cv.pdf";

    if (typeof window !== "undefined") {
      window.open(cv, "_blank");
    }
  };
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="transform translate-y-1/3 relative">
          <Image
            src="/images/profile.jpg"
            alt="profile"
            width={300}
            height={440}
            className="rounded-sm z-0"
          />
          <div className="w-[300px] h-[440px] border-4 border-indigo-500 absolute ml-8 -translate-y-[95%] z-[-1]" />
        </div>

        <div className="transform translate-y-1/3 relative">
          <div className="title-name flex flex-col gap-10">
            <div className=" flex flex-col gap-3">
              <span className=" text-5xl font-bold text-white">
                Muhammad Fadly Hidayat
              </span>
              <div className="flex items-center gap-2 text-white">
                <span className="font-semibold">
                  <CiLocationOn className="w-5 h-5" />{" "}
                </span>
                <a> Magelang, Indonesia.</a>
              </div>
            </div>
            <div className="flex flex-col gap-10 items-start ">
              <div className="title-desc text-justify gap-2 text-lg text-muted ">
                Alumni of Information Systems student from Amikom Yogyakarta.
                Has a deep interest in Web Programming especially as Backend Web
                Development. Have experience using programming languages such as
                JavaScript, PHP and frameworks Laravel and NodeJs (ExpressJS) as
                well as using relational and non-relational databases. Dreaming
                to become a{" "}
                <span className="font-bold text-sky-500">
                  Fullstack Web Developer
                </span>
                , for that I am focusing on{" "}
                <span className="font-bold text-indigo-500">MERN</span> or
                JavaScript frameworks now.
              </div>
              <div onClick={onSubmit}>
                <Button className="bg-gradient-to-r from-sky-500 to-indigo-500  hover:bg-gradient-to-l hover:text-white">
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
