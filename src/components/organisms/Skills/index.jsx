import GridSkill from "@/components/atoms/GridSkill";
import TitleSection from "@/components/atoms/TitleSection";
import { Separator } from "@/components/ui/separator";

export default function Skill() {
  return (
    <div className="flex flex-col gap-5" data-aos="fade-up">
      <TitleSection title="My Skills" />
      <Separator className="my-4 bg-black" />
      <div className=" grid grid-cols-6 pb-2 gap-4 ">
        <GridSkill url="/images/html.png" title="HTML" />
        <GridSkill url="/images/css.png" title="CSS" />
        <GridSkill url="/images/javascript.png" title="JavaScript" />
        <GridSkill url="/images/nodejs.png" title="NodeJS" />
        <GridSkill url="/images/express.png" title="ExpressJS" />
        <GridSkill url="/images/reactjs.png" title="ReactJS" />
        <GridSkill url="/images/nextjs.png" title="NextJS" />
        <GridSkill url="/images/mongodb.png" title="MongoDB" />
        <GridSkill url="/images/mysql.png" title="MySQL" />
        <GridSkill url="/images/postgresql.png" title="PostgreSQL" />
        <GridSkill url="/images/prisma.png" title="Prisma" />
        <GridSkill url="/images/mongoose.png" title="Mongoose" />
        <GridSkill url="/images/git.png" title="Git" />
      </div>
    </div>
  );
}
