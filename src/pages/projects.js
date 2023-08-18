import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";
const FramerImage = motion(Image);
const FeaturedPrject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full relative flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light shadow-2xl p-10 dark:bg-dark'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
      <Link
        href={link}
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-4xl font-bold  text-dark dark:text-light'>
            {title}
          </h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
        <div className='flex items-center mt-2'>
          <Link href={link} target='_blank' className='w-10'>
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-dark text-light  dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold'
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, img, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light  bg-light p-6 relative  dark:bg-dark'>
      <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[1.4rem] bg-dark dark:bg-light' />
      <Link
        href={link}
        target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary  dark:text-primaryDark font-medium text-xl'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-3xl font-bold text-dark dark:text-light'>
            {title}
          </h2>
        </Link>

        <div className=' w-full justify-between flex items-center mt-2'>
          <Link
            href={link}
            target='_blank'
            className=' rounded-lg  ml-1 font-semibold '
          >
            <span className='underline'>Visit</span> 🔗
          </Link>
          <Link href={link} target='_blank' className='w-8'>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>Kiran Kuyate | Projects </title>
        <meta name='description' content='my description' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center text-dark/75 dark:text-light/75'>
        <Layout className='pt-16'>
          <AnimatedText text='Imagination Trump Knowledge' className='mb-16' />
          <div className='grid grid-cols-12 gap-24 gap-y-32'>
            <div className='col-span-12'>
              <FeaturedPrject
                title='Crypto Screener Application'
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency.'
                type='feature project'
                img={project1}
                link='https://placeholder'
                github='https://placeholder'
              />
            </div>
            <div className='col-span-6'>
              <Project
                title='Crypto Screener Application'
                type='feature project'
                img={project1}
                link='https://placeholder'
                github='https://placeholder'
              />
            </div>
            <div className='col-span-6'>
              <Project
                title='Crypto Screener Application'
                type='feature project'
                img={project1}
                link='https://placeholder'
                github='https://placeholder'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedPrject
                title='Crypto Screener Application'
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency.'
                type='feature project'
                img={project1}
                link='https://placeholder'
                github='https://placeholder'
              />
            </div>
            <div className='col-span-6'>
              <Project
                title='Crypto Screener Application'
                type='feature project'
                img={project1}
                link='https://placeholder'
                github='https://placeholder'
              />
            </div>
            <div className='col-span-6'>
              <Project
                title='Crypto Screener Application'
                type='feature project'
                img={project1}
                link='https://placeholder'
                github='https://placeholder'
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
