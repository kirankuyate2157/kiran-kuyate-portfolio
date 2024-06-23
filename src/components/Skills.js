import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark py-3 sm:py-1 sm:text-xs  px-5 sm:px-3 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1 md:px-2 sm:bg-transparent sm:dark:bg-transparent sm:text-dark sm:dark:text-light xs:font-bold'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>
        Skills
      </h2>
      <div className='w-full h-screen relative  text-xs sm:text-sm md:text-md flex items-center justify-center rounded-full dark:bg-circularDark bg-circularLight  lg:h-[80vh] sm:h-[60vh] xs:h-[43vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
        <motion.div
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark py-3 sm:py-1 sm:text-xs  px-5 sm:px-3 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1 md:px-2 sm:bg-transparent sm:dark:bg-transparent sm:text-dark sm:dark:text-light xs:font-bold p-3 sm:p-8 lg:p-6 md:p-4 xs:text-xs xs:p-2'
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name='HTML' x='-13vw' y='2vw' />
        <Skill name='NextJs' x='-21vw' y='-2vw' />
        <Skill name='CSS' x='-8vw' y='-5vw' />
        <Skill name='Tailwindcss' x='28vw' y='3vw' />
        <Skill name='GraphQL' x='22vw' y='8vw' />
        <Skill name='AWS' x='-19vw' y='10vw' />
        <Skill name='Spring Boot' x='-25vw' y='14vw' />
        <Skill name='Javascript' x='14vw' y='6vw' />
        <Skill name='MERN' x='18vw' y='-15vw' />
        <Skill name='Data Analysis' x='3vw' y='-13vw' />
        <Skill name='python' x='0vw' y='12vw' />
        <Skill name='Git/Github' x='-12vw' y='-10vw' />
        <Skill name='Java' x='-21vw' y='-15vw' />
        <Skill name='C/C++' x='8vw' y='-5vw' />
        <Skill name='SQL' x='-29vw' y='-6vw' />
        <Skill name='DSA' x='-29vw' y='5vw' />
        <Skill name='ElectronJs' x='-5vw' y='-19vw' />
        <Skill name='AppWrite' x='-15vw' y='17vw' />
        <Skill name='Firebase' x='1vw' y='20vw' />
        <Skill name='Figma' x='8vw' y='24vw' />
        <Skill name='Canvas' x='17vw' y='15vw' />
        <Skill name='Django' x='17vw' y='-3vw' />
        <Skill name='Leadership' x='28vw' y='-7vw' />
      </div>
    </>
  );
};

export default Skills;
