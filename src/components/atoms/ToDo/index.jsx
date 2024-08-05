import React from "react";
import { GoTriangleRight } from "react-icons/go";

export default function ToDo({ title }) {
  return (
    <div className="inline-flex gap-2 items-center">
      <GoTriangleRight />
      <div>{title}</div>
    </div>
  );
}
