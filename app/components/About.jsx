import { assets, infoList, toolsData } from '@/assets/assets';
import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import { motion } from 'motion/react';

const About = () => {
  return (
    <motion.div id="about" className="w-full px-[12%] py-10 scroll-mt-20"
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1}}
    >
      <motion.h4
      initial={{opacity:0, y: -20}}
      whileInView={{opacity:1, y: 0}}
      transition={{duration: 0.5, delay: 0.3}}
       className="text-center mb-2 text-lg font-Ovo">Introduction</motion.h4> {/* Fixed typo in class */}
      <motion.h2
            initial={{opacity:0, y: -20}}
            whileInView={{opacity:1, y: 0}}
            transition={{duration: 0.5, delay: 0.5}}
      className="text-center text-5xl font-Ovo">About Me</motion.h2>
      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration: 0.8}}
      className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <motion.div
        initial={{opacity:0, scale:0.9}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration: 0.6 }}
        className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.user_image} alt="user" className='w-full rounded-4xl' /></motion.div>
          <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration: 0.6, delay:0.8 }}
          className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>I am a dedicated software engineering student with a passion for coding and problem-solving. I enjoy collaborating with like-minded individuals, sharing knowledge, and exploring innovative technologies. Constantly striving to enhance my skills, I seek opportunities to learn, grow, and contribute to impactful projects in the tech industry.</p>
              
            <motion.ul
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:1.5, duration: 0.6}}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <motion.li
                whileInHover={{scale: 1.05}}
                  key={index}
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:shadow-black hover:-translate-y-1 duration-500"
                >
                  <Image src={icon} alt={title} className="w-7 mt-3" />
                  <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                </motion.li>
              ))}
            </motion.ul>
            <motion.h4 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:1.3, duration: 0.5}}
            className='my-6 text-grey-700 fontOvo'>Tools I use</motion.h4>
            <motion.ul 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration: 0.8, delay:1}}
            className='flex items-center gap-3 sm:gap-5' >
              {toolsData.map((tools, index) => (
                <motion.li 
                whileInView={{scale:1.1}}
                className='flex items-center justify-center w-12 sm:-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                  <Image src={tools} alt="tool" className="w-5 sm:w-7"/>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
  );
};

export default About;
