import React, { useEffect } from "react";
import { NextPage } from "next";
import skills_data from "../data.json";
import { Reveal } from "../motion/Reveal";
import Image from "next/image";

interface SkillsProps {
  actual_skills: ActualSkillsData[];
  projects: ProjectsData[];
  soft_skills: SoftSkillsData[];
}

interface ActualSkillsData {
  name: string;
  xp: number;
  image_url: string;
}

interface SoftSkillsData {
  name: string;
  description: string;
}

interface ProjectsData {
  name: string;
  description: string;
  technologies: string[];
  estimated_date: string;
  github: {
    repos: string[];
    types: string[];
  };
}
const SkillBody: NextPage = () => {
  const skills_arr: SkillsProps = skills_data.skills_data;
  return (
    <>
      <div className="bg-zinc-950">
        <SectionComponent actual_skills={skills_arr.actual_skills} projects={[]} soft_skills={[]} />
      </div>

      <div className="bg-neutral-300">
        <SectionComponent actual_skills={[]} projects={skills_arr.projects} soft_skills={[]} />
      </div>

      <div className="bg-zinc-950">
        <SectionComponent soft_skills={skills_arr.soft_skills} actual_skills={[]} projects={[]} />
      </div>
    </>
  );
};

const SectionComponent: React.FC<SkillsProps> = ({ actual_skills, projects, soft_skills }) => {
  if (actual_skills.length > 0) {
    return <ActualSkillsLayout actual_skills={actual_skills} />;
  }
  if (projects.length > 0) {
    return <ProjectsLayout projects={projects} />;
  }
  if (soft_skills.length > 0) {
    return <SoftSkillsLayout soft_skills={soft_skills} />;
  }
};

interface ActualLayoutProperties {
  actual_skills: ActualSkillsData[];
}

interface ProjectsLayoutProperties {
  projects: ProjectsData[];
}

interface SoftSkillsLayoutProperties {
  soft_skills: SoftSkillsData[];
}

const ActualSkillsLayout: React.FC<ActualLayoutProperties> = ({ actual_skills }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-16">
      <Reveal>
        <p className="text-5xl pb-8 text-neutral-100 font-normal text-left">Hard Skills</p>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          {actual_skills
            .sort((a, b) => b.xp - a.xp)
            .map((e, i) => (
              <div key={i}>
                <SkillItemGrid {...e} />
              </div>
            ))}
        </div>
      </Reveal>
    </div>
  );
};

const SkillItemGrid: React.FC<ActualSkillsData> = (data) => {
  return (
    <div className="xs:w-[350px] lg:w-[273px] h-[250px] p-2 rounded bg-stone-200 overflow-hidden shadow-md shadow-stone-500 flex flex-col">
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-center mb-2 h-[80px]">
          <Image
            width={70}
            height={70}
            alt={`logo`}
            src={data.image_url || "/default-image.png"}
            className="object-contain"
          />
        </div>
        <h5 className="mb-4 text-lg font-bold tracking-tight text-stone-900 text-center">
          {data.name}
        </h5>
        <div className="flex-grow"></div>
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
  );
};

const ProjectsLayout: React.FC<ProjectsLayoutProperties> = ({ projects }) => {
  return (
    <>
      <div className="min-h-screen bg-stone-200 w-full flex flex-col items-center py-16">
        <Reveal>
          <p className={`text-5xl pb-8 text-stone-950 md:text-left text-center font-normal`}>
            Projects
          </p>
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {projects
              .sort((a, b) => {
                const dateA = new Date(a.estimated_date);
                const dateB = new Date(b.estimated_date);
                return dateB.getTime() - dateA.getTime();
              })
              .map((e, i) => (
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
      <div className="max-w-sm h-[500px] p-2 rounded bg-zinc-950 overflow-hidden shadow-md shadow-stone-500 flex flex-col">
        <div className="px-6 py-4 flex-1">
          <div className="flex flex-col">
            <p className="text-sm">{data.estimated_date}</p>
            <h1 className="font-bold text-xl mb-2">{data.name}</h1>
          </div>

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
                      {e.split("/").pop()}
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
            {data.technologies.map((e, i) => (
              <span
                key={i}
                className="inline-block bg-stone-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const SoftSkillsLayout: React.FC<SoftSkillsLayoutProperties> = ({ soft_skills }) => {
  return (
    <>
      <Reveal>
        <div className="min-h-screen w-full flex justify-center items-center py-16">
          <div className="text-left w-[78%]">
            <p className="text-5xl pb-8 text-neutral-100 font-normal">Soft Skills</p>
            <ol className="list-decimal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {soft_skills.map((e, i) => (
                <li key={i}>
                  <SoftSkillItem {...e} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Reveal>
    </>
  );
};

const SoftSkillItem: React.FC<SoftSkillsData> = (data) => {
  return (
    <>
      <p className="text-3xl pb-2 text-left">{data.name}</p>
      <p className="text-neutral-300 text-md flex mb-4">{data.description}</p>
    </>
  );
};

export default SkillBody;
