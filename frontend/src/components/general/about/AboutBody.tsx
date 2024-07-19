import React, { useCallback, useEffect, useState } from "react";
import about_data from "../data.json";
import { Reveal } from "../motion/Reveal";

interface AboutData {
  title: string;
  content: string;
  text_color?: string;
  education?: TimelineInfo[];
  work?: TimelineInfo[];
}

interface TimelineProps {
  education: TimelineInfo[];
  work: TimelineInfo[];
}

interface TimelineInfo {
  company?: string;
  city?: string;
  expertise?: string;
  school?: string;
  years_active?: string;
  education?: string;
  context?: string;
}

export const AboutBody: React.FC = () => {
  const about_data_ar: AboutData[] = about_data.about_data;

  return (
    <>
      {about_data_ar.map((e, i) => (
        <div key={i} className={`${i % 2 === 0 ? "bg-stone-950" : "bg-neutral-300"}`}>
          <Reveal>
            <SectionComponent {...e} text_color={`${i % 2 !== 0 ? "text-stone-950" : ""}`} />
          </Reveal>
        </div>
      ))}
    </>
  );
};

const SectionComponent: React.FC<AboutData> = ({ title, content, text_color, education, work }) => {
  const formattedContent = content.replace(/\\n/g, "<br>");
  return (
    <>
      <div className="min-h-screen  w-full flex justify-center items-center py-16">
        <div className="text-center w-3/5">
          <h1 className={`text-4xl pb-8 ${text_color}`}>{title}</h1>
          <p
            className={`text-lg text-left ${text_color}`}
            dangerouslySetInnerHTML={{ __html: formattedContent }}
          ></p>
          {education && work && <Timeline education={education} work={work} />}
        </div>
      </div>
    </>
  );
};

const Timeline: React.FC<TimelineProps> = ({ education, work }) => {
  const combined = education.concat(work);
  const extractYear = (years_active?: string) => {
    if (!years_active) {
      return -Infinity;
    }
    if (years_active.includes("Current")) {
      return Infinity;
    }
    const match = years_active.match(/\d+/);
    return match ? parseInt(match[0], 10) : -Infinity;
  };

  combined.sort((a, b) => {
    const yearA = extractYear(a.years_active);
    const yearB = extractYear(b.years_active);
    return yearB - yearA;
  });

  return (
    <>
      <div>
        <ol className="relative mx-auto w-3/4 border-s border-gray-200 dark:border-gray-700">
          {combined.map((e, i) => (
            <div key={i}>
              <SingleTimelineComponent {...e} />
            </div>
          ))}
        </ol>
      </div>
    </>
  );
};

const SingleTimelineComponent: React.FC<TimelineInfo> = (data) => {
  return (
    <>
      <li className="mb-12 ml-8 text-left">
        <div className="absolute w-4 h-4 bg-stone-950 rounded-full mt-1.5 -left-2"></div>
        <time className="mb-1 text-stone-950 leading-none ">{data.years_active}</time>
        <div className="block mt-2 rounded-lg bg-stone-950 p-6 text-surface shadow-md shadow-stone-600 dark:bg-surface-dark dark:text-white">
          <h5 className="mb-0 text-md font-medium leading-tight">
            {data.education || data.expertise}
          </h5>
          <p className="mb-2 text-sm">
            {data.school ? data.school : data.company}, {data.city}
          </p>
          <p className="text-xs italic hidden md:block">{data.context}</p>
        </div>
      </li>
    </>
  );
};
