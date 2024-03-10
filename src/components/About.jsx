import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] sm:text-[18px] max-w-[45rem] leading-[30px]">
        I'm a full-stack developer, who loves to craft seamless websites with
        the expertise in JavaScript, React, Nextjs, Redux, and MongoDB. I have a
        Computer Science background and 1+ years of experience in creating 20+
        interactive and user-friendly web applications. Look through some of my
        work and experience! If you like what you see and have a project you
        need coded, please don’t hestiate to contact me. Thank you!
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
