import { motion } from "framer-motion";
import { styles } from "../styles";
import { socialMediaIcons } from "../constants";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
import { fadeIn } from "../utils/motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center">
      <div className="absolute sm:px-24 2xl:px-52 px-6 flex flex-col">
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5, delay: 0, ease: "easeInOut" }}
          className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className="text-[#915eff]">Abeera</span>
        </motion.h1>
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5, delay: 0.75, ease: "easeInOut" }}
          className={`${styles.heroSubText} mt-3 text-white-100`}>
          I’m a Full-Stack Developer, <br className="sm:block hidden" /> devoted
          to craft exceptional digital solutions!
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5, delay: 1.25, ease: "easeInOut" }}
          className={`${styles.sectionSubText} mt-6 text-secondary`}>
          Let's Connect:
        </motion.p>
        <motion.ul
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
          className="flex items-center gap-4 mt-4">
          {socialMediaIcons.map(({ id, name, icon, url }) => (
            <motion.li
              key={id}
              variants={{
                hidden: { opacity: 0, x: 10 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 1.5,
                delay: id * 0.75,
                ease: "easeInOut",
              }}>
              <Tooltip title={name} position="bottom" arrow={true} size="small">
                <div className="w-[45px] h-[45px] transition-all duration-200 transform hover:scale-110 shadow-card">
                  <a href={url} target="__blank">
                    <div className="w-full h-full green-pink-gradient p-[1px] rounded-full shadow-card">
                      <div className=" bg-tertiary w-full h-full rounded-full flex items-center justify-center ">
                        {icon}
                      </div>
                    </div>
                  </a>
                </div>
              </Tooltip>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="absolute sm:bottom-5 bottom-8 w-full flex justify-center items-center">
        <a href="#about" aria-label="scroll down">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
