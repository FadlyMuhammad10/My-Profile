import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import axios from "../../configs/axios";

export default async function Projects() {
  const data = await axios.get("/api/project");

  return (
    <div className="container py-5  flex flex-col gap-5 ">
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex flex-row gap-5 items-center mt-5 ${
            index % 2 !== 0 ? "flex-row-reverse" : ""
          }`}
        >
          <div className="w-1/3">
            <div className="flex flex-col gap-5">
              <div className="text-3xl font-bold text-white">{item.title}</div>
              <p className="text-muted-foreground">{item.description}</p>
              <div className="inline-flex gap-2">
                {item.techStack.map((stack, index) => (
                  <Badge key={index} variant="default">
                    {stack}
                  </Badge>
                ))}
              </div>
              <div className="inline-flex items-center gap-2">
                <ArrowRight className="text-sky-500" />
                <Link
                  href={item.github}
                  target="_blank"
                  className="text-white hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:px-1 hover:rounded-sm"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="w-2/3">
            <div className="w-[450px] h-[260px] relative">
              <div className="w-[450px] h-[260px] border-8 border-indigo-500 rounded-sm translate-x-[30%]" />
              <div className="absolute translate-x-[40%] translate-y-[-10%] top-0 z-0 ">
                <Image
                  src={item.imageUrl}
                  alt={item.imageUrl}
                  width={300}
                  height={260}
                  className="rounded-sm z-0 w-[450px] h-[260px] object-fill"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
