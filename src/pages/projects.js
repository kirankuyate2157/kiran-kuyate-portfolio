import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/icons";
import p1 from "../../public/images/projects/p1.png";
import p2 from "../../public/images/projects/p2.png";
import p3 from "../../public/images/projects/p3.png";
import p4 from "../../public/images/projects/p4.png";
import p5 from "../../public/images/projects/p5.png";
import p6 from "../../public/images/projects/p6.png";
import p7 from "../../public/images/projects/p7.png";
import p8 from "../../public/images/projects/p8.png";
import p9 from "../../public/images/projects/p9.png";
import p10 from "../../public/images/projects/p10.png";
import p11 from "../../public/images/projects/p11.png";
import p12 from "../../public/images/projects/p12.png";
import p13 from "../../public/images/projects/p13.png";
import p14 from "../../public/images/projects/p14.webp";
import p15 from "../../public/images/projects/p15.png";
import p16 from "../../public/images/projects/p16.png";
import p17 from "../../public/images/projects/p17.png";
import p18 from "../../public/images/projects/p18.png";
import p19 from "../../public/images/projects/p19.png";
import { motion } from "framer-motion";
import TransitionEffect from "../components/TransitionEffect";
const FramerImage = motion(Image);
const FeaturedPrject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full relative flex md:flex-col items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light shadow-2xl p-10 dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
      <Link
        href={link}
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          priority
          sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-4xl font-bold  text-dark dark:text-light sm:text-sm'>
            {title}
          </h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-xs'>
          {summary}
        </p>
        <div className='flex items-center mt-2'>
          <Link href={github} target='_blank' className='w-10 sm:w-6 lg:w-8'>
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-dark text-light  dark:bg-light dark:text-dark p-2 px-6 text-md font-semibold sm:px-4 sm:text-xs'
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
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light  bg-light p-6 relative  dark:bg-dark xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[1.4rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]  ' />
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
          priority
          sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
        />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary  dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-3xl font-bold text-dark dark:text-light lg:text-2xl sm:text-lg'>
            {title}
          </h2>
        </Link>

        <div className=' w-full justify-between flex items-center mt-2'>
          <Link
            href={link}
            target='_blank'
            className=' rounded-lg  ml-1 font-semibold md:text-base '
          >
            <span className='underline'>Visit</span> 🔗
          </Link>
          <Link href={github} target='_blank' className='w-8 md:w-6'>
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
        <TransitionEffect />
        <Layout className='pt-16'>
          <AnimatedText
            text='Imagination Trump Knowledge'
            className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'
          />
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedPrject
                title='Zomato web Application'
                summary='A full-stack web application built with React, Node.js, Express, and MongoDB. Features include authentication, restaurant search, image sliders, payment integration, and more.'
                type='Full-stack Project (MERN)'
                img={p1} // Image of your project
                link='https://zomato-project-b1bx.vercel.app/' // Link to your deployed app
                github='https://github.com/kirankuyate2157/zomato-project' // Link to your GitHub repository
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Object Detection and Recognition'
                type='python Project'
                img={p3} // Image of your project
                link='https://github.com/kirankuyate2157/Object-detecion-and-recognition'
                github='https://github.com/kirankuyate2157/Object-detecion-and-recognition'
              />
            </div>
            <div className='col-span-6  sm:col-span-12'>
              <Project
                title='MyAttendance System'
                type='python Project'
                img={p4} // Image of your project
                link='https://github.com/kirankuyate2157/MyAttendace-System-'
                github='https://github.com/kirankuyate2157/MyAttendace-System-' // Link to your GitHub repository
              />
            </div>
            <div className='col-span-12'>
              <FeaturedPrject
                title='Book My Show web Application'
                summary='My first React project - a clone of the Book My Show website. Built with React, Redux, and Tailwind CSS. Integrates with APIs to display movies and details. Includes Razorpay integration for secure online payments.'
                type='React Project'
                img={p2} // Image of your project
                link='https://book-my-show-seven-taupe.vercel.app' // Link to your deployed app
                github='https://github.com/kirankuyate2157/book-my-show' // Link to your GitHub repository
              />
            </div>
            <div className='col-span-6  sm:col-span-12'>
              <Project
                title='HooBank Website'
                type='UI project'
                img={p6}
                link='https://morden-bank-app.vercel.app/'
                github='https://github.com/kirankuyate2157/morden-bank-app'
              />
            </div>
            <div className='col-span-6  sm:col-span-12'>
              <Project
                title='GERICHT Restaurant'
                type='feature project'
                img={p7}
                link='https://amazing-restaurant.vercel.app/'
                github='https://github.com/kirankuyate2157/amazing-restaurant'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedPrject
                title='The Nari'
                summary='A collaborative project built during the SheBuild Hackathon in just 24 hours, bringing together talents from team-4  2 VIT, 1 IIT, and me . This platform, powered by React and a variety of tools including Map, Authentication, Email Services, Firebase, and Figma, is dedicated to empowering and supporting women.'
                type='Hackathon Project'
                img={p5}
                link='https://the-nari.vercel.app/'
                github='https://github.com/kirankuyate2157/the-Nari'
              />
            </div>
            <div className='col-span-6  sm:col-span-12'>
              <Project
                title='Pulse Rate Monitor'
                type='Ardino project'
                img={p8}
                link='https://drive.google.com/file/d/1wK11Y1pGWyWA8vmotRT_TMXYF4AGjHDY/view?usp=drivesdk'
                github='https://github.com/kirankuyate2157/PulseMonitoringSys'
              />
            </div>
            <div className='col-span-6  sm:col-span-12'>
              <Project
                title='Air Pollution Monitoring '
                type='Ardino project'
                img={p9}
                link='https://github.com/kirankuyate2157/AirPollutionMonitoringSys'
                github='https://github.com/kirankuyate2157/AirPollutionMonitoringSys'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedPrject
                title='Dragon VS (Video Steganography)'
                summary='Securing Confidential communication and data transmission through video steganography. This technique hides any kind of file into a cover video file, making use of the video-based steganography.'
                type='Java cryptography project'
                img={p10}
                link='https://github.com/kirankuyate2157/Dragon-VS-video-stenography-'
                github='https://github.com/kirankuyate2157/Dragon-VS-video-stenography-'
              />
            </div>
            <div className='col-span-6  sm:col-span-12'>
              <Project
                title='OpenAI - GPT-3 web'
                type='Ui react project'
                img={p11}
                link='https://ai-gpt3-mu.vercel.app/'
                github='https://github.com/kirankuyate2157/Ai-gpt3'
              />
            </div>
            <div className='col-span-6  sm:col-span-12'>
              <Project
                title='Pokemon Project'
                img={p12}
                type='API fetching static page'
                link='http://pokemon-web-swart.vercel.app/'
                github='https://github.com/kirankuyate2157/pokemon-web'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedPrject
                title='Bus Ticket System'
                summary="Welcome to the Bus Booking System! This project offers a comprehensive overview of features including user login, route selection, location information, ticket booking, SQL database management, and seat booking visualization. Built using Python's Tkinter library, the application provides a seamless experience for searching and booking bus tickets."
                type='python project'
                img={p13}
                github='https://github.com/kirankuyate2157/Bus-Ticket-Sys'
                link='https://github.com/kirankuyate2157/Bus-Ticket-Sys'
              />
            </div>
            <div className='col-span-6  sm:col-span-12'>
              <Project
                title='Rennzon Social Web App'
                type='django python project'
                img={p14}
                github='https://github.com/kirankuyate2157/rennzonsocial'
                link='https://placeholder'
              />
            </div>
            <div className='col-span-6  sm:col-span-12'>
              <Project
                title='ApnaTodo Web App'
                type='React JavaScript Project'
                img={p15}
                github='https://github.com/kirankuyate2157/ApnaTodo'
                link='https://apna-todo.vercel.app/'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedPrject
                title='Tribute Page of Arijit Singh'
                summary="Explore Arijit Singh's musical journey, style, and impact. Engaging scrollable design, responsive layout, interactive animations, and captivating cards."
                type='Web Development Project'
                img={p16}
                github='https://github.com/kirankuyate2157/tribute-page-v2'
                link='https://arijit-tribute-page.vercel.app/'
              />
            </div>
            <div className='col-span-6  sm:col-span-12'>
              <Project
                title='Zomato Restaurants Analysis'
                type='Data Analysis Project'
                img={p17}
                link='https://www.kaggle.com/code/procomp/zomato-restaurants-analysis'
                github='https://www.kaggle.com/code/procomp/zomato-restaurants-analysis'
              />
            </div>
            <div className='col-span-6  sm:col-span-12'>
              <Project
                title='Bike Analysis'
                type='Data Analysis Project'
                img={p18}
                link='https://www.kaggle.com/code/procomp/bike-analysis'
                github='https://www.kaggle.com/code/procomp/bike-analysis'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedPrject
                title='Kiran Kuyate Portfolio'
                summary='My personal portfolio website built with Next.js, Framer Motion, and Tailwind CSS. Explore my projects, skills, and journey through interactive animations and a user-friendly interface.'
                type='Personal Portfolio'
                img={p19}
                link='https://kiran-kuyate-portfolio.vercel.app/'
                github='https://github.com/kirankuyate2157/kiran-kuyate-portfolio'
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
