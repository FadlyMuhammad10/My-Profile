import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Certification() {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Certification</h1>
        </div>
        <div className="inline-flex items-center text-primary font-semibold cursor-pointer gap-3">
          <span>View All</span>
          <HiOutlineArrowNarrowRight />
        </div>
      </div>
      <Separator className="my-4 bg-black" />
      <div className="grid md:grid-cols-2  gap-4 ">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="shadow-sm bg-white/10 p-1">
            <Image
              src="/images/msib.jpg"
              alt="msib"
              width={650}
              height={400}
              quality={100}
              className="w-full min-h-[400px]"
            />
          </div>
        ))}
      </div>
    </>
  );
}
