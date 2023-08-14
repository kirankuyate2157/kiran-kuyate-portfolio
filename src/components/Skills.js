import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name='HTML' x='-20vw' y='2vw' />
        <Skill name='CSS' x='-8vw' y='-10vw' />
        <Skill name='Tailwindcss' x='10vw' y='24vw' />
        <Skill name='AWS' x='-13vw' y='20vw' />
        <Skill name='Javascript' x='20vw' y='6vw' />
        <Skill name='MERN' x='18vw' y='-15vw' />
        <Skill name='Data Analysis' x='3vw' y='-27vw' />
        <Skill name='python' x='0vw' y='12vw' />
        <Skill name='Git/Github' x='-27vw' y='-25vw' />
        <Skill name='Java' x='-18vw' y='-15vw' />
        <Skill name='SQL' x='-32vw' y='-8vw' />
        <Skill name='DSA' x='-32vw' y='12vw' />
        <Skill name='ElectronJs' x='-15vw' y='-35vw' />
        <Skill name='AppWrite' x='-22vw' y='30vw' />
        <Skill name='Firebase' x='4vw' y='38vw' />
        <Skill name='Canvas' x='29vw' y='22vw' />
        <Skill name='Django' x='32vw' y='-7vw' />
        <Skill name='Leadership' x='24vw' y='-25vw' />
      </div>
    </>
  );
};

export default Skills;
