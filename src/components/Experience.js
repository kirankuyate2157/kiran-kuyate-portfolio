import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {position}&nbsp;
          <a
            href={companyLink}
            target='_blank'
            className='text-primary dark:text-primaryDark capitalize'
          >
            @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75  dark:text-light/75 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full  md:text-sm'>{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center start"],
  });

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark dark:shadow-primaryDark drop-shadow-2xl  md:w-[2px] md:left-[30px] xs:left-[20px]'
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
         
        <Details
            position='Full stack dev INTERN'
            company='Search-In'
            time='Jan 2024 - May 2024'
            address='Pune (remote)'
            work='Work on end-to-end development for Shopify Vendor, Dropshiper, ensuring
            seamless API integration with Shopify and Shoprocket. Collaborating
            cross-functionally with the team, utilizing MERN stack, AWS, code Reviews, Best practices and UI frameworks for
            efficient development and architecture of app.'
          />

          <Details
            position='SDE INTERN'
            company='GEENIE WEB'
            time='Jan 2023 - May 2023'
            address='Singapore (remote)'
            work='Worked on a desktop application using ElectronJS, conducted research, and implemented
  ideas for UI & Backend API. Collaborated with team members as Team Lead to ensure a
  high-quality end-product and achieved 60% updates in the app.'
          />

          <Details
            position='DATA ANALYST INTERN'
            company='DEVTOWN'
            time='Jun 2021 - Sept 2021'
            address='Mumbai, India'
            work='Worked on Machine learning, NLP, Data Analyzing tools, and libraries to predict
  valuable data for making decisions for students’ course recommendations. Conducted
  daily doubt-solving sessions with 50+ students, fostering better understanding and
  learning.'
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
