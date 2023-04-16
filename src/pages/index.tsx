import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import ProfilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "../components/AnimatedText";
import Hireme from "../components/Hireme";
import { LinkArrow } from "../components/icons";
export default function Home() {
  return (
    <>
      <Head>
        <title>my portfolio</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen '>
        <Layout className='pt-0'>
          <div className='flex  items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image
                src={ProfilePic}
                alt='kiran kuyate'
                className='w-full h-auto'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText
                text='Turning Vision Into Reality With Code And Design. '
                className='!text-6xl !text-left'
              />
              <p className='my-4 text-base font-medium'>
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link
                  href='/dummy.pdf'
                  target={"_blank"}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark '
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href='mailto:kiranrkuyate2021@gmail.com'
                  target={"_blank"}
                  className='ml-4 text-lg font-medium capitalize text-dark underline'
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <Hireme />
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBulb} alt='kiran.dev' className='w-full h-auto' />
        </div>
      </main>
    </>
  );
}
