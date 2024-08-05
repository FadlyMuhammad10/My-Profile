import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineLink } from "react-icons/hi2";
export default function Portfolio() {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Portfolio</h1>
        </div>
        <div className="inline-flex items-center text-primary font-semibold cursor-pointer gap-3">
          <span>View All</span>
          <HiOutlineArrowNarrowRight />
        </div>
      </div>
      <Separator className="my-4 bg-black" />
      <div className="grid md:grid-cols-3  gap-4 ">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="shadow-sm bg-white/10 p-2 flex flex-col gap-4"
          >
            <Image
              src="/images/msib.jpg"
              alt="msib"
              width={450}
              height={0}
              quality={100}
              className="w-full md:min-h-[350px] "
            />
            <div className="flex flex-col gap-3">
              <div className="mx-auto flex flex-row gap-3">
                <div className="inline-flex items-center">
                  <Link href="https://github.com/FadlyMuhammad10">
                    <AiOutlineGithub className="w-8 h-8" />
                  </Link>
                </div>
                <div className="inline-flex items-center">
                  <Link href="/">
                    <HiOutlineLink className="w-7 h-7 text-primary" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
