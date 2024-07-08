import React from "react";
import { AppProps } from "next/app";
import Layout from "@/components/general/general/Layout";
import HomePage from "./home/page";
const Home: React.FC = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default Home;
