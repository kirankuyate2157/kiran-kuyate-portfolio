import React, { useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from "./../components/AnimatedText";
import Layout from "./../components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/rp1.jpg";
import { useMotionValue, useSpring, useInView } from "framer-motion";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import TransitionEffect from "../components/TransitionEffect";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);

  // Convert months to fraction of a year
  const yearFraction = value / 12;

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(yearFraction);
    }
  }, [isInView, yearFraction, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      const formattedValue = (latest * 12).toFixed(1); // Calculate value in years with one decimal place
      const intValue = parseInt(formattedValue, 10); // Parse the integer part

      if (ref.current) {
        // Display the value without decimal if the decimal is zero
        ref.current.textContent = formattedValue.endsWith(".0")
          ? intValue.toString()
          : formattedValue;
      }
    });
  }, [springValue]);

  return <span ref={ref}>{yearFraction.toFixed(1)}</span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Kiran | About Page </title>
        <meta name='description' content='any description' />
      </Head>
      <main className='w-full flex items-center text-dark dark:text-light justify-center'>
        <TransitionEffect />
        <Layout className='pt-16'>
          <AnimatedText
            text='Passion Fuels Purpose !'
            className='mb-16 lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8'
          />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75  dark:text-light/75'>
                Biography
              </h2>
              <p className='font-medium'>
                I&apos;m Kiran Kuyate, an enthusiastic software lover with an
                unquenchable thirst for learning. I&apos;m all about coding and
                solving problems, on an ongoing journey to untangle the
                complexities of technology.
              </p>
              <p className='my-4 font-medium'>
                As a student and eager learner, I&apos;m drawn to the realm of
                software engineering, where every line of code takes us a step
                closer to innovation. With an ever-curious mindset, I
                wholeheartedly welcome new challenges and absorb knowledge like
                a sponge.
              </p>
              <p className='my-4 font-medium'>
                I&apos;m thrilled to connect with fellow enthusiasts, learn, and
                collaborate. Together, we have the power to shape the future of
                software development. Speaking of involvement and inspiration,
              </p>
              <p className=' font-medium'>
                I&apos;ve taken part in leadership roles and engaged in
                hackathons and meetups, where I&apos;ve had the opportunity to
                share my technical understanding and learn from others
              </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4  md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image
                src={profilePic}
                alt='Kiran Kuyate'
                className='w-full h-auto rounded-2xl'
                priority
                sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw'
              />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumber value={3} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  Satisfied clients
                </h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumber value={28} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75  dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  Projects completed
                </h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumber value={0.5} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75  dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
