"use client";
import { NextPage } from "next";
import Layout from "../../components/general/general/Layout";
import React from "react";
import { AboutBody } from "@/components/general/about/AboutBody";
import { Reveal } from "../../components/general/motion/Reveal";

const About: NextPage = () => {
  return (
    <Layout>
      <AboutBody />
    </Layout>
  );
};

export default About;
