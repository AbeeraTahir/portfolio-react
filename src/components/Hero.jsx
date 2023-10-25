import { motion } from "framer-motion";
import { styles } from "../styles";
import { socialMediaIcons } from "../constants";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
import { HeroVariant, HeroItemsVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="sm:px-20 px-6 absolute transform -translate-y-1/2 top-1/2 max-w-7xl max-auto flex flex-row items-start gap-5">
        <motion.div variants={HeroVariant} initial="hidden" animate="visible">
          <motion.h1
            variants={HeroItemsVariant}
            className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Abeera</span>
          </motion.h1>
          <motion.h2
            variants={HeroItemsVariant}
            className={`${styles.heroSubText} mt-2 text-white-100`}>
            I’m a Full-Stack Web Developer <br className="sm:block hidden" />{" "}
          </motion.h2>
          <motion.p
            variants={HeroItemsVariant}
            className="text-secondary text-[16px] sm:text-[20px] mt-4 max-w-[45rem] sm:leading-[32px] leading-[28px]">
            I'm your facilitator in turning your tech visions into reality.
            Enthusiastic about problem-solving and creating exceptional user
            experiences. Let's build something remarkable together!
          </motion.p>
          <motion.ul
            variants={HeroItemsVariant}
            className="flex items-center gap-5 mt-6">
            {socialMediaIcons.map(({ id, name, icon, url }, index) => (
              <Tooltip
                key={id}
                title={name}
                position="bottom"
                arrow={true}
                size="small">
                <motion.li className="w-[40px] green-pink-gradient p-[5px] rounded-full flex items-center shadow-card transition-all duration-200 transform hover:scale-110">
                  <a href={url} target="__blank">
                    <img src={icon} width={40} alt={name} />
                  </a>
                </motion.li>
              </Tooltip>
            ))}
          </motion.ul>
        </motion.div>
      </div>
      <div className="absolute sm:bottom-5 bottom-8 w-full flex justify-center items-center">
        <a href="#about">
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
