"use client";
import React from "react";
import { Reveal } from "../motion/Reveal";

export const ContactBody: React.FC = () => {
  return (
    <>
      <div className="bg-zinc-950">
        <SectionComponent />
      </div>
    </>
  );
};

const SectionComponent: React.FC = () => {
  const platforms = [
    { name: "Email", link: "#" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/berat-kamali/" },
    { name: "Github", link: "https://github.com/beratkml" },
  ];
  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center py-16">
        <Reveal>
          <div className="text-center md:text-left w-full">
            <div className="text-center w-full">
              <h1 className={`text-5xl pb-4`}>{`Let's Connect!`}</h1>
            </div>
            <div className="text-center w-full">
              <p className=" pb-2 ">
                Whether you have questions, comments, or just want to connect, feel free to use any
                of these platforms to get in touch.
              </p>
            </div>

            <div className="flex flex-row space-x-8 items-center justify-center">
              {platforms.map((e, i) => (
                <div key={i}>
                  <a
                    className="hover:text-zinc-400"
                    href={`${e.name === "Email" ? "mailto:berat.kamali@outlook.com" : e.link}`}
                    target="_blank"
                  >
                    <span>{e.name}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
};
