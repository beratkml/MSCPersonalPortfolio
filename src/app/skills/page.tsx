"use client";
import { NextPage } from "next";
import Layout from "../../components/general/general/Layout";
import React from "react";
import SkillBody from "@/components/general/skills/SkillBody";

const Skills: NextPage = () => {
  return (
    <Layout>
      <SkillBody />
    </Layout>
  );
};

export default Skills;
