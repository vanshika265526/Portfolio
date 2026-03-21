import { motion } from "motion/react";
import { useState, useEffect } from "react";
import heroIllustration from "../assets/images/Gemini_Generated_Image_snto6qsnto6qsnto.png";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import leetcode from "../assets/icons/leetcode.svg";
import gmail from "../assets/icons/gmail.svg";
import scrollIcon from "../assets/icons/scroll-animation.svg";
export const HeroSect = () => {
  const [word, setWord] = useState("Developer");
  const words = ["Developer", "Engineer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWord((prev) => (prev === words[0] ? words[1] : words[0]));
    }, 3000);

    return () => clearInterval(interval);
  });
  return (
    <>
      <div id="Home" className="flex justify-center w-full">
        <div className="hero-section w-full h-[80vh] flex justify-between relative px-6 md:px-16">
          <div className="heroText h-full w-full z-30 flex flex-col md:justify-center">
            <div className="flex flex-col text-white pl-5 tracking-wide md:gap-1">
              <span className="font-semibold text-2xl md:text-4xl">
                Hi! I&apos;m Vanshika,
              </span>
              <span className="font-semibold text-2xl md:text-4xl flex">
                A Web&nbsp;
                <motion.span
                  key={word}
                  initial={{ width: 0 }}
                  whileInView={{ width: "fit-content" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="bg-fontBlue text-transparent bg-clip-text overflow-hidden mr-1 will-change-transform will-change-opacity"
                >
                  {word}
                </motion.span>
                <motion.span
                  className="h-full w-[1px] bg-fontBlue whileInView-pulse"
                  initial={{ opacity: 1 }}
                  whileInView={{ opacity: 0 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.span>
              </span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-[#989898] font-normal text-[10px] md:text-sm md:w-[50%]"
              >
                Full-Stack Developer & GenAI Enthusiast, <br />crafting
                intelligent, scalable, and user-centered <br />web solutions.
              </motion.span>
            </div>
            <div className="buttons max-sm:absolute bottom-10 w-full flex max-sm:items-center max-md:flex-col text-white gap-3 text-[10px] tracking-widest pl-4 md:pl-5 mt-5">
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                href="#Projects"
              >
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-color1 hover:bg-color1Hover w-[14rem] md:w-[12rem] rounded-3xl uppercase text-center font-semibold cursor-pointer py-2"
                >
                  Explore Projects
                </motion.button>
              </motion.a>
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                href="#Contact"
              >
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-color2 border-2 border-color2 hover:bg-color2 hover:text-color3 rounded-3xl w-[14rem] md:w-[12rem] uppercase text-center font-semibold cursor-pointer py-2"
                >
                  Get in Touch
                </motion.button>
              </motion.a>
            </div>
            <div className="social-icons flex items-center gap-4 h-10 mt-6 ml-5">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className=""
                href="https://www.linkedin.com/in/vanshika--"
                target="_blank"
              >
                <img
                  className="w-7 cursor-pointer hover:scale-125 duration-100 transition-all"
                  src={linkedin}
                  alt="LinkedIn"
                />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className=""
                href="https://github.com/vanshika265526"
                target="_blank"
              >
                <img
                  className="w-7 cursor-pointer hover:scale-125 transition-all"
                  src={github}
                  alt="GitHub"
                />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className=""
                href="https://leetcode.com/u/vanshika2976910b/"
                target="_blank"
              >
                <img
                  className="w-7 cursor-pointer hover:scale-125 transition-all"
                  src={leetcode}
                  alt="LeetCode"
                />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className=""
                href="mailto:vanshika29769@gmail.com"
                target="_blank"
              >
                <img
                  className="w-7 cursor-pointer hover:scale-125 transition-all"
                  src={gmail}
                  alt="Gmail"
                />
              </motion.a>
            </div>
          </div>
          <div className="heroIllustration flex flex-col items-center w-full h-full absolute">
            <motion.img
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ y: [0, -20, 0] }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                opacity: { duration: 1 },
                scale: { duration: 1 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="min-w-[20rem] max-sm:w-[25rem] absolute top-10 md:-top-24 sm:-top-10 right-4 md:right-10 xl:right-20 md:w-2/3 will-change-transform will-change-opacity"
              src={heroIllustration}
              alt="Hero Illustration"
            />
        <div className="absolute bottom-40 md:bottom-5">
              <div className="scroll-icon">
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="w-5"
                  src={scrollIcon}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
