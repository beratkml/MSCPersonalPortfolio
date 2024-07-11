"use client";
import { NextPage } from "next";
import React from "react";
import Layout from "@/components/general/general/Layout";
import { Reveal } from "@/components/general/motion/Reveal";
import { MainBody } from "../../components/general/main/MainBody";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <div className="area">
        <ul className="circles">
          {Array(10)
            .fill(0)
            .map((e, i) => (
              <li key={i}></li>
            ))}
        </ul>
      </div>
      <Reveal>
        <MainBody />
      </Reveal>
    </Layout>
  );
};

export default HomePage;
