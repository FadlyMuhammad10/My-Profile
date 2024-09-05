import TitleSection from "@/components/atoms/TitleSection";
import ToDo from "@/components/atoms/ToDo";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import axios from "../../../configs/axios";

export default async function Experience() {
  const data = await axios.get("/api/experience");

  return (
    <div className="flex flex-col gap-5 " data-aos="fade-down">
      <TitleSection title="Experiences" />
      <Separator className="my-4 bg-sky-500 text-sky-500 border-sky-500" />

      <div className="grid grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 mx-auto shadow-md border-4 border-primary   p-5 rounded-sm  "
          >
            <div className="text-center justify-center ">
              <Badge variant="outline" className="border-primary text-white ">
                {item.startDate} - {item.endDate}
              </Badge>
            </div>
            <div className=" text-center font-semibold text-sky-500 ">
              <span>
                {item.title} <br />
                {item.tag && <span>({item.tag})</span>}
              </span>
            </div>
            <div className="text-justify tracking-normal text-white">
              {item.description}
            </div>
            <div className="flex flex-col gap-2">
              {item.jobs.map((item, index) => (
                <ToDo key={index} title={item} />
              ))}
            </div>
            <div className="flex flex-row gap-3">
              {item.techStack.map((item, index) => (
                <Badge
                  key={index}
                  variant={"outline"}
                  className={"border-primary text-white"}
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
