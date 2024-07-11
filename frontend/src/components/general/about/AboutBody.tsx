import React from "react";
import about_data from "../data.json";
import { Reveal } from "../motion/Reveal";

interface AboutData {
  title: string;
  content: string;
  other: { [key: string]: string }[];
  bg_color?: string;
}

export const AboutBody: React.FC = () => {
  const about_data_ar: AboutData[] = about_data.about_data;
  return (
    <>
      {about_data_ar.map((e, i) => (
        <div key={i} className={`${i % 2 == 0 ? "bg-stone-950" : "bg-neutral-400"}`}>
          <Reveal>
            <SectionComponent content={e.content} title={e.title} other={e.other} />
          </Reveal>
        </div>
      ))}
    </>
  );
};

const SectionComponent: React.FC<AboutData> = ({ title, content, other, bg_color }) => {
  return (
    <>
      <div className={`min-h-screen flex justify-center items-center`}>
        <div className="text-center w-1/2">
          <h1 className="text-5xl">{title}</h1>
          <p className="text-lg">{content}</p>
        </div>
      </div>
    </>
  );
};
