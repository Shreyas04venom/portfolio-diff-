import React from "react";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import myImage from "../assets/Shreyas.png";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
<section className="Home">
  <div className="text-co">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a first-year engineering student, studying in FRCRCE. I am passionate
 about developing my technical skills and applying them in practical ways to 
solve real-world problems. My journey in engineering has just begun, and I am 
excited to learn more about the different fields of technology, particularly in
web development and app development.I have a strong foundation in problem-solving,
 critical thinking, and analytical skills that I am continuously improving through
 my academic coursework, hands-on projects, and self-learning.This is my portfolio
of skills and experiences that I have till now......
        </motion.p>
        </div>

      <div className="circular-rainbow-wrapper">
        <img 
        src={myImage}
        alt="profile"
        className='circular-rainbow-img'
        />
        </div>
      </section>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
