"use client";
import { NextPage } from "next";
import Layout from "../../components/general/general/Layout";
import React from "react";
import { AboutBody } from "@/components/general/about/AboutBody";

const About: NextPage = () => {
  return (
    <Layout>
      <AboutBody />
    </Layout>
  );
};

export default About;
