import React from "react";
import Layout from "./Layout";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className='w-full border-t-2  text-dark dark:text-light border-solid border-dark dark:border-light font-medium text-lg'>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className=' flex items-center'>
          Devloped by &nbsp;
          <Link
            href='https://devdreaming.com'
            className='underline underline-offset-2'
            target={"_blank"}
          >
            Kiran2157.Dev
          </Link>{" "}
        </div>
        <Link
          href='https://devdreaming.com'
          className='underline underline-offset-2'
          target={"_blank"}
        >
          Say hello!
        </Link>
      </Layout>
      ;
    </footer>
  );
};

export default Footer;
