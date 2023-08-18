import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import {
  TwitterIcon,
  LinkedInIcon,
  PinterestIcon,
  DribbbleIcon,
  GithubIcon,
  SunIcon,
  MoonIcon,
} from "./icons";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block  bg-dark  dark:bg-light absolute  left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <header className='w-full px-32 py-8 font-medium text-black dark:text-light flex items-center justify-between'>
      <nav>
        <CustomLink href='/' title='Home' className='mr-4' />
        <CustomLink href='/about' title='About' className='mx-4' />
        <CustomLink href='/projects' title='Projects' className='mx-4' />
        <CustomLink href='/articles' title='Articles' className='ml-4' />
      </nav>
      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a
          href='http://tweeter.com'
          target='_blank'
          className='w-6 mr-3'
          whileHover={{ y: -5 }}
          whileTap={{ scale: 1 }}
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href='http://tweeter.com'
          target='_blank'
          className='w-6 mx-3'
          whileHover={{ y: -5 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href='http://tweeter.com'
          target='_blank'
          className='w-6 mx-3'
          whileHover={{ y: -5 }}
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href='http://tweeter.com'
          target='_blank'
          className='w-6 mx-3'
          whileHover={{ y: -5 }}
        >
          <DribbbleIcon />
        </motion.a>
        <motion.a
          href='http://tweeter.com'
          target='_blank'
          className='w-6 mx-3'
          whileHover={{ y: -5 }}
        >
          <GithubIcon />
        </motion.a>
        <button
          onClick={() => {
            setMode(mode === "light" ? "dark" : "light");
          }}
          className={`ml-3 flex items-center justify-center rounded-full p-1 ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
        >
          {mode == "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
