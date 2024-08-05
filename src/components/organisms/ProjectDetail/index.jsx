import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineCodeBracket } from "react-icons/hi2";

export default function ProjectDetail({ data }) {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Details</Button>
        </DialogTrigger>
        <DialogContent className="container sm:max-w-4xl h-[90vh] overflow-auto">
          <div className="flex flex-col gap-5">
            <div className="text-3xl font-bold">{data.title}</div>
            <Image
              src={data.imageUrl}
              alt={data.imageUrl}
              width={750}
              height={600}
              className=" w-auto rounded-lg"
            />
            <div className="inline-flex gap-2 p-3 items-center mx-auto">
              {data.techStack.map((stack, index) => (
                <Badge key={index} variant="default">
                  {stack}
                </Badge>
              ))}
            </div>
            <div className="text-justify">{data.description}</div>
            <div className="inline-flex gap-5 items-center mx-auto">
              <Link href={data.url} target="_blank">
                <HiOutlineCodeBracket className="w-6 h-6" />
              </Link>
              <Link href={data.github} target="_blank">
                <AiOutlineGithub className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
