import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className="rouded">
      <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="/after.jpg"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[380px]"
        slideMode="drag"
      />
    </div>
  );
}
