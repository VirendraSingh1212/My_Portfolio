import { assets, workData } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react"

const Work = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
          whileInView={{opacity: 1}}
          transition={{duration:1}}
    id="work" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]">
      <motion.h4 
      initial={{y: -20, opacity:0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.3, duration: 0.5}}
      className="text-center mb-2 text-lg font-Ovo">My Portfolio</motion.h4>
      <motion.h2 
      initial={{y: -20, opacity:0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.3, duration: 0.5}}
      className="text-center text-5xl font-Ovo">My Latest Work</motion.h2>
      <motion.p 
      initial={{opacity:0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.7, duration: 0.5}}
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my Web Development Portfolio! I am a software engineering student passionate about building innovative solutions and continuously learning new technologies.
      </motion.p>
      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.9, duration: 0.6}}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center mx-auto max-w-[900px]">
  {workData.map((project, index) => (
    <motion.div
      whileHover={{scale: 1.05}}
      transition={{duration: 0.3}}
      key={index}
      className="max-w-[200px] aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
      style={{ backgroundImage: `url(${project.bgImage})` }}
    >
      <div>
        <div className="bg-white w-8/10 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-2 px-4.5 flex items-center justify-between text-center duration-500 group-hover:bottom-7">
          <h2 className="text-xs font-semibold">{project.title}</h2>
          <p className="text-sm text-gray-700">{project.description}</p>
        </div>
        <div className="border rounded-full border-black absolute bottom-10 right-7 aspect-square flex-item items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
          <Image src={assets.send_icon} alt="Send Icon" className="w-4" />
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>
   <motion.a 
   initial={{opacity:0}}
   whileInView={{opacity: 1}}
   transition={{delay: 1.1, duration: 0.5}}
   href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-500 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500'>Show More <Image src={assets.right_arrow_bold} alt='Right Arrow' className='w-4'/> </motion.a>
    </motion.div>
  );
};

export default Work;
