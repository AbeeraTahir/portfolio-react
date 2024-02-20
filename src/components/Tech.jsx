import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import Tilt from "react-tilt";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechCard = ({ index, name, icon }) => (
  <Tilt className="xs:w-[170px] w-[135px] max-[320px]:w-[120px]">
    <motion.div
      variants={fadeIn("right", "tween", index * 0.25, 0.5)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] px-5 py-1 h-[170px] gap-5 flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[16px] xs:text-[20px] font-bold text-center">
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My tech stack</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      </motion.div> */}

      <div className="w-full flex">
        <p
          // variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[16px] sm:text-[18px] max-w-3xl leading-[30px]">
          Here's a glimpse of the skills and technologies I bring to the table!
        </p>
      </div>
      <div className="mt-12 flex flex-row flex-wrap justify-center xs:gap-11 gap-6 max-[359px]:gap-3">
        {technologies.map((technologies, index) => (
          <TechCard key={index} index={index} {...technologies} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
