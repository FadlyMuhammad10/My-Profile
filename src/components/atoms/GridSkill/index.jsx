import Image from "next/image";
import React from "react";

export default function GridSkill({ url, title }) {
  return (
    <div className="child-grid-skill  flex flex-col gap-2 shadow-md items-center">
      <Image src={url} alt={url} width={48} height={48} />
      <span className="text-xl font-bold">{title}</span>
    </div>
  );
}