import React from "react";
import Layout from "../../components/general/general/Layout";
import { NextPage } from "next";
import { ContactBody } from "@/components/general/contact/ContactBody";

const Contact: NextPage = () => {
  return (
    <Layout>
      <ContactBody />
    </Layout>
  );
};

export default Contact;
