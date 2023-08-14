import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-1 sm:py-3  px-2 sm:px-6 shadow-dark cursor-pointer absolute'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      // viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative  text-xs sm:text-sm md:text-md flex items-center justify-center rounded-full bg-circularLight2 sm:bg-circularLight'>
        <motion.div
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-3 sm:p-8 shadow-dark cursor-pointer'
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name='HTML' x='-13vw' y='2vw' />
        <Skill name='CSS' x='-8vw' y='-5vw' />
        <Skill name='Tailwindcss' x='28vw' y='5vw' />
        <Skill name='AWS' x='-20vw' y='10vw' />
        <Skill name='Javascript' x='14vw' y='6vw' />
        <Skill name='MERN' x='18vw' y='-15vw' />
        <Skill name='Data Analysis' x='3vw' y='-11vw' />
        <Skill name='python' x='0vw' y='12vw' />
        <Skill name='Git/Github' x='-12vw' y='-10vw' />
        <Skill name='Java' x='-21vw' y='-15vw' />
        <Skill name='SQL' x='-29vw' y='-6vw' />
        <Skill name='DSA' x='-29vw' y='5vw' />
        <Skill name='ElectronJs' x='-5vw' y='-19vw' />
        <Skill name='AppWrite' x='-15vw' y='17vw' />
        <Skill name='Firebase' x='1vw' y='20vw' />
        <Skill name='Canvas' x='17vw' y='15vw' />
        <Skill name='Django' x='17vw' y='-3vw' />
        <Skill name='Leadership' x='28vw' y='-7vw' />
      </div>
    </>
  );
};

export default Skills;
