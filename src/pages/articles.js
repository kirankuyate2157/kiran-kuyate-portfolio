import Head from "next/head";
import React from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";

const articles = () => {
  return (
    <>
      <Head>
        <title>kiran kuyate | Article</title>
        <meta name='description' content='any description..' />
      </Head>
      <main>
        <Layout>
          <AnimatedText text='words can change the world!' />
        </Layout>
      </main>
    </>
  );
};

export default articles;
