import TitleSection from "@/components/atoms/TitleSection";
import { Separator } from "@/components/ui/separator";
import { IoSchool } from "react-icons/io5";

export default function Education() {
  return (
    <div className="flex flex-col gap-5" data-aos="fade-right">
      <TitleSection title="Educations" />
      <Separator className="my-4 bg-sky-500 text-sky-500 border-sky-500" />
      <div className="flex flex-row gap-5 items-start text-white ">
        <IoSchool className="text-3xl" />
        <div> 2020 - 2024</div>
        <div className="flex flex-col gap-2 ">
          <div className="text-xl font-bold">
            Bachelor of Information Systems
          </div>
          <div className="text-lg">Amikom Yogyakarta University</div>
          <div className="text-md font-bold text-muted-foreground">
            GPA 3.64
          </div>
        </div>
      </div>
    </div>
  );
}
