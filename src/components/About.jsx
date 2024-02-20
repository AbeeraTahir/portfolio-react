import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <div className="-mb-36">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] sm:text-[18px] max-w-[45rem] leading-[30px]">
        I'm a full-stack developer with a Computer Science background and 1+
        year of experience in creating 15+ interactive and user-friendly web
        applications. I can help you build a product, feature or website. Look
        through some of my work and experience! If you like what you see and
        have a project you need coded, please don’t hestiate to contact me.
      </motion.p>
    </div>
  );
};

export default SectionWrapper(About, "about");
