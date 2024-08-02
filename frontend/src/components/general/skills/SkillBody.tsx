import React from "react";
import { NextPage } from "next";
import skills_data from "../data.json";
import { Reveal } from "../motion/Reveal";
import Image from "next/image";

interface SkillsProps {
  actual_skills: ActualSkillsData[];
  projects: ProjectsData[];
}

interface ActualSkillsData {
  name: string;
  xp: number;
  image_url: string;
}

interface ProjectsData {
  name: string;
  description: string;
  technologies: string[];
  github: {
    repos: string[];
    types: string[];
  };
}
const SkillBody: NextPage = () => {
  const skills_arr: SkillsProps = skills_data.skills_data;
  return (
    <>
      <div className="bg-stone-950">
        <SectionComponent actual_skills={skills_arr.actual_skills} projects={[]} />
      </div>

      <div className="bg-neutral-300">
        <SectionComponent actual_skills={[]} projects={skills_arr.projects} />
      </div>
    </>
  );
};

const SectionComponent: React.FC<SkillsProps> = ({ actual_skills, projects }) => {
  if (actual_skills.length > 0) {
    return <ActualSkillsLayout actual_skills={actual_skills} />;
  }
  if (projects.length > 0) {
    return <ProjectsLayout projects={projects} />;
  }
};

interface ActualLayoutProperties {
  actual_skills: ActualSkillsData[];
}

interface ProjectsLayoutProperties {
  projects: ProjectsData[];
}

const ActualSkillsLayout: React.FC<ActualLayoutProperties> = ({ actual_skills }) => {
  return (
    <Reveal>
      <div className="min-h-screen w-full text-center flex flex-col justify-center items-center py-16">
        <h1 className="text-4xl p-8 text-center text-white">Hard Skills</h1>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 justify-items-center mb-16">
          {actual_skills
            .sort((a, b) => b.xp - a.xp)
            .map((e, i) => (
              <div key={i} className="w-full max-w-[250px]">
                {" "}
                <SkillItemGrid {...e} />
              </div>
            ))}
        </div>
      </div>
    </Reveal>
  );
};

const SkillItemGrid: React.FC<ActualSkillsData> = (data) => {
  return (
    <>
      <div className=" m-4 bg-neutral-300 rounded-lg shadow-md h-full flex flex-col shadow-stone-500">
        <div className="p-6 ">
          <div className="flex justify-center mb-2">
            <Image
              width={80}
              height={80}
              alt={`logo`}
              src={data.image_url || "/default-image.png"}
              className="object-contain "
            />
          </div>
          <h5 className="mb-4 text-lg font-bold tracking-tight text-stone-900 text-center">
            {data.name}
          </h5>
          <p className="mb-4 text-sm font-normal text-stone-700 text-center">Experience</p>
          <div className="flex justify-center">
            {Array(5)
              .fill(0)
              .map((e, i) => (
                <div key={i} className="mx-1">
                  {i < data.xp ? (
                    <div className="w-2 h-2 bg-stone-900 rounded-full"></div>
                  ) : (
                    <div className="w-2 h-2 bg-stone-100 rounded-full"></div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

const ProjectsLayout: React.FC<ProjectsLayoutProperties> = ({ projects }) => {
  return (
    <>
      <div className="min-h-screen bg-neutral-300 w-full flex flex-col items-center py-16">
        <Reveal>
          <h1 className={`text-4xl text-center pb-8 text-stone-950`}>Projects</h1>
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {projects.map((e, i) => (
              <div key={i}>
                <ProjectGrid {...e} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </>
  );
};

const ProjectGrid: React.FC<ProjectsData> = (data) => {
  return (
    <>
      <div className="max-w-sm h-[500px] p-2 rounded bg-stone-950 overflow-hidden shadow-md shadow-stone-500 flex flex-col">
        <div className="px-6 py-4 flex-1">
          <div className="font-bold text-xl mb-2">{data.name}</div>
          <p
            className="text-gray-400 text-sm mb-4"
            dangerouslySetInnerHTML={{
              __html: data.description.replace(/\n/g, "<br />"),
            }}
          ></p>
          {data.github.repos.length !== 0 ? (
            data.github.types.length !== 0 ? (
              <div>
                <p className="text-md">Github repositories</p>
                <ol>
                  {data.github.types.map((e, i) => (
                    <div key={i}>
                      <li className="text-gray-400 flex text-sm">
                        <a target="_blank" href={data.github.repos[i]}>
                          {e}
                        </a>
                      </li>
                    </div>
                  ))}
                </ol>
              </div>
            ) : (
              <div>
                <p>Github repository</p>
                <p className="text-gray-400 flex text-sm mb-4">
                  {data.github.repos.map((e, i) => (
                    <a target="_blank" key={i} href={e}>
                      MSCYoutubeSummarizer
                    </a>
                  ))}
                </p>
              </div>
            )
          ) : (
            ""
          )}
        </div>
        <div className="px-6 pt-4 pb-2">
          <p className="text-gray-300 text-sm font-medium mb-2">Technologies</p>
          <div className="flex flex-wrap">
            {data.technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillBody;
