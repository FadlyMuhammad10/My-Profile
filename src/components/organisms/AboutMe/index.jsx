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
      <div className="flex flex-row gap-8 pt-16">
        <div className="w-full h-[70vh]">
          <Image
            src="/images/profile.jpg"
            alt="profile"
            width={640}
            height={450}
            className="rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="title-name text-5xl font-bold">
              Muhammad Fadly Hidayat
            </span>
            <div className="flex items-center gap-2">
              <span className="font-semibold">
                <CiLocationOn className="w-5 h-5" />{" "}
              </span>
              <a> Magelang, Indonesia.</a>
            </div>
          </div>
          <div className=" flex flex-col gap-10 items-start ">
            <div className=" text-justify gap-2 text-lg text-muted-foreground ">
              Final year Information Systems student from Amikom Yogyakarta. Has
              a deep interest in Web Programming with Practical Work experience
              at Merdeka Campus as Backend Web Development. Recent experience in
              using programming languages such as JavaScript, PHP and frameworks
              Laravel and NodeJs ( ExpressJS ) as well as using relational and
              non-relational databases. Dreaming to become a{" "}
              <span className="font-bold text-primary">
                Fullstack Web Developer
              </span>
              , for that I am focusing on{" "}
              <span className="font-bold text-primary">MERN</span> or JavaScript
              frameworks now.
            </div>
            <div onClick={onSubmit}>
              <Button variant="" className="hover:bg-white hover:text-primary">
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
