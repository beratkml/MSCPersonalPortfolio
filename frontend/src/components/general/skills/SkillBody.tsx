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
  technologies: string[];
  github_link: string;
}
const SkillBody: NextPage = () => {
  const skills_arr: SkillsProps = skills_data.skills_data;
  return (
    <>
      <div className="bg-stone-950">
        <Reveal>
          <SectionComponent actual_skills={skills_arr.actual_skills} projects={[]} />
        </Reveal>
      </div>

      <div className="bg-neutral-300">
        <Reveal>
          <SectionComponent actual_skills={[]} projects={skills_arr.projects} />
        </Reveal>
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
    <div className="min-h-screen w-full text-center flex flex-col justify-center items-center py-16">
      <h1 className="text-4xl p-8 text-center text-white">Hard Skills</h1>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 justify-items-center">
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
  );
};

const SkillItemGrid: React.FC<ActualSkillsData> = (data) => {
  return (
    <>
      <div className=" m-4 bg-neutral-300 rounded-lg shadow w-full">
        <div className="p-6 ">
          <div className="flex justify-center mb-2">
            <Image
              width={80}
              height={80}
              alt={`logo`}
              src={data.image_url || "/default-image.png"}
              className="object-contain h-32"
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
      <div className="min-h-screen bg-neutral-300 w-full flex justify-center items-center py-16">
        <h1 className={`text-4xl pb-8 text-stone-950`}>Projects</h1>
      </div>
    </>
  );
};

export default SkillBody;
