"use client";
import AboutMe from "@/components/organisms/AboutMe";
import Experience from "@/components/organisms/Experience";
import Education from "../Education";
import Skill from "../Skills";

export default function Hero() {
  return (
    <div className="flex flex-col gap-10 pb-16">
      <div className="container relative">
        <AboutMe />
      </div>
      <div className="container">
        <Experience />
      </div>
      <div className="container ">
        <Education />
      </div>
      <div className="container overflow-hidden">
        <Skill />
      </div>
      {/* <div className="container text-primary">
        <Certification />
      </div>
      <div className="container text-primary">
        <Portfolio />
      </div> */}
    </div>
  );
}
