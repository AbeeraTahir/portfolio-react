import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { github, liveLink } from "../assets";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  const projectIcons = [
    { name: "Source Code", icon: github, link: source_code_link },
    { name: "Live Link", icon: liveLink, link: live_link },
  ];
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[455px] flex flex-col gap-4">
        <div className="relative w-full h-[150px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex gap-1 justify-end m-2 card-img_hover h-9">
            {projectIcons.map(({ name, icon, link }, index) => (
              <Tooltip
                key={index}
                title={name}
                position="top"
                arrow={true}
                size="small">
                <div
                  onClick={() => window.open(link, "_blank")}
                  className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer">
                  <img
                    src={icon}
                    alt={name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </Tooltip>
            ))}
          </div>
        </div>

        <div className="">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[16px] sm:text-[18px] max-w-3xl leading-[30px]">
          Explore the tangible evidence of my skills and experience in the
          following projects!
        </motion.p>
      </div>

      <div className="mt-12 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
