import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import jeerad from "../public/jeerad.png";
import aboutbottom from "../public/aboutbottom.png";

function About() {
  return (
    <div className=" text-center lg:p-10 lg:pb-0 w-100 h-100 flex flex-wrap justify-center items-start">
      <div>
        <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl font-montserratB">
          Jerad Griffin
        </h2>
        <h3 className=" text-2xl py-2 md:text-3xl text-gray-600 dark:text-white font-montserratSemi">
          Designer and Developer.
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl dark:text-gray-400 font-montserrat">
          Freelancer providing services for UX designing and front end web
          development needs.
        </p>
        <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600 sm:mb-20">
          <a
            href="https://www.linkedin.com/in/jeradgriffin/"
            target={"_blank"}
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
      <div className=" max-[640px]:mt-20 max-[500px]:h-[300px] max-[500px]:w-[300px] md:h-80 md:w-80 mx-auto bg-gradient-to-l from-teal-500 rounded-full w-80 h-80 relative overflow-hidden">
        <Image
          alt="Jerad"
          src={jeerad}
          layout="fill"
          objectFit="cover"
          className=" w-[320px] h-[320px] opacity-70"
        />
      </div>
      <div className=" absolute bottom-0 w-[300px] max-[500px]:w-[150px] max-[500px]:left-10 max-[725px]:left-10 max-[725px]:w-[150px] max-[1024px]:left-20 max-[1296px]:w-[200px] max-[1296px]:left-40 ">
        <Image
          alt="Build"
          src={aboutbottom}
          className=" w-[200px] opacity-70"
        />
      </div>
    </div>
  );
}

export default About;
