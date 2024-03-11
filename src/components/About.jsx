import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn, textVariant } from "../utils/motion";

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
        I'm a full-stack developer who loves to craft seamless websites with the
        expertise in JavaScript, React, Next.js, Redux Toolkit, and MongoDB. I
        have a Computer Science background and 1+ years of experience in
        creating 20+ interactive and user-friendly web applications. Look
        through some of my work and experience! If you like what you see and
        have a project you need coded, please don’t hestiate to{" "}
        <span className="underline">
          <a href="#contact">contact</a>
        </span>{" "}
        me. Thank you!
      </motion.p>

      <a
        href="https://docs.google.com/document/d/1szdRz0bnOeguos15MYeeZyjd2Mw4PWNLGchKQrzO5g8/edit?usp=sharing"
        target="__blank">
        <motion.button
          variants={slideIn("left", "", 0.2, 1)}
          type="submit"
          className="bg-tertiary mt-6 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
          Get My Resume
        </motion.button>
      </a>
    </>
  );
};

export default SectionWrapper(About, "about");
