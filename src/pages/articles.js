import Head from "next/head";
import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import a1 from "../../public/images/articles/a1.png";
import a2 from "../../public/images/articles/a2.png";
// import a3 from "../../public/images/articles/a3.avif";
import a4 from "../../public/images/articles/a4.png";
import TransitionEffect from "../components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ img, title, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target='_blank'
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className='capitalize text-xl font-semibold hover:underline md:text-sm xs:text-xs'>
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        priority
        sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
        className='z-10 w-96 h-auto hidden absolute rounded-lg sm:!hidden'
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className='relative w-full p-4 py-6 sm:py-2 my-4 rounded-xl flex items-center justify-between bg-light text-dark dark:bg-dark dark:text-light dark:border-light first:mt:mt-0 border border-solid border-dark border-r-4 border-b-4 sm:flex-col md:text-sm xs:text-xs'
    >
      <MovingImg title={title} img={img} link={link} />
      <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0'>
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className='relative col-span-1 w-full p-4 bg-light text-dark border border-solid border-dark rounded-lg rounded-br-3xl  dark:bg-dark dark:text-light dark:border-light'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[1rem] bg-dark dark:bg-light rounded-br-3xl' />
      <Link
        href={link}
        target='_blank'
        className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
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
      <Link href={link} target='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>
          {title}
        </h2>
      </Link>
      <p p className='text-sm mb-2'>
        {summary}
      </p>
      <span className='text-primary dark:text-primaryDark font-semibold'>
        {time}
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>kiran kuyate | Article</title>
        <meta name='description' content='any description..' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden text-dark'>
        <TransitionEffect />
        <Layout className='pt-16'>
          <AnimatedText
            text='words can change the world!'
            className='mb-16 lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8'
          />
          <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
            <FeaturedArticle
              title='simple Git and GitHub 💖'
              summary='Learn how to use Git and github in your development,basic commands to some advance in simple words'
              time='7 min read'
              img={a1}
              link='https://kiran2157.hashnode.dev/simple-git-and-github'
            />
            <FeaturedArticle
              title='Javascript obfustication and Re-obfustication'
              summary='Obfuscation means making something difficult to understand. Programming code is often obfuscated to protect intellectual property or trade secrets..'
              time='8 min read'
              img={a2}
              link='https://kiran2157.hashnode.dev/javascript-obfustication-and-re-obfustication'
            />
          </ul>
          <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>
            All Articles
          </h2>
          <ul>
            <Article
              title='Features of Object-Oriented Programming.some important concepts and terminologies '
              date='Feb 20,2022'
              link='https://kiran2157.hashnode.dev/features-of-object-oriented-programming'
              img={a4}
            />
            <Article
              title='The Kiran.  Lights, camera, action! cue dramatic music No, no, no, this is not a Bollywood movie. This is my jou… '
              date='Jan  31,2022'
              link='https://kiran2157.hashnode.dev/features-of-object-oriented-programming'
              img={a4}
            />
            <Article
              title='Features of Object-Oriented Programming.some important concepts and terminologies '
              date='Feb 20,2022'
              link='https://kiran2157.hashnode.dev/features-of-object-oriented-programming'
              img={a1}
            />
            <Article
              title='Features of Object-Oriented Programming.some important concepts and terminologies '
              date='Feb 20,2022'
              link='https://kiran2157.hashnode.dev/features-of-object-oriented-programming'
              img={a1}
            />
            <Article
              title='Features of Object-Oriented Programming.some important concepts and terminologies '
              date='Feb 20,2022'
              link='https://kiran2157.hashnode.dev/features-of-object-oriented-programming'
              img={a1}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
