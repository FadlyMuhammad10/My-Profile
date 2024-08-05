import ProjectDetail from "@/components/organisms/ProjectDetail";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import axios from "../../configs/axios";

export default async function Projects() {
  const data = await axios.get("/api/project");

  return (
    <div className="container py-5  flex flex-col gap-5 ">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Projects</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 p-3 shadow-md hover:shadow-xl hover:scale-105 cursor-pointer"
            data-aos="flip-right"
          >
            <div className="flex flex-col gap-2">
              <div className="inline-flex gap-2 items-center">
                <Image
                  src={`/images/${item.language}.png`}
                  alt={`/images/${item.language}.png`}
                  width={48}
                  height={48}
                />
                <div className="text-2xl font-bold">{item.title}</div>
              </div>
              <div className="text-sm text-gray-500">{item.stack}</div>
              <Separator className="bg-slate-500" />
            </div>
            <div className="text-justify">{item.description}</div>
            <div className="flex justify-end">
              <ProjectDetail data={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
