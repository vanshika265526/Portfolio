import { easeInOut, motion } from "motion/react";
import doc from "../assets/doc/Vanshika General CV.pdf";
import femaleAvatar from "../assets/images/image.png";
export const AboutMe = () => {
  return (
    <>
      <div id="About" className="flex justify-center">
        <div className="w-full px-3 max-w-[60rem] h-full">
          <div className="project-title text-5xl md:text-8xl h-screen tracking-wide font-extrabold leading-snug uppercase text-white flex max-md:justify-center items-center">
            <div className="bg-color1/40 rounded-full absolute size-80 blur-[100px] z-10"></div>
            <motion.div className="z-30 ">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="will-change-transform will-change-opacity"
              >
                The
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="will-change-transform will-change-opacity"
              >
                developer
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                className="will-change-transform will-change-opacity"
              >
                behind
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                className="will-change-transform will-change-opacity"
              >
                the code
              </motion.div>
            </motion.div>
          </div>
          <div className="Me h-screen relative flex max-md:flex-col items-center py-5 md:mt-20">
            <div className="w-full md:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, filter: "blur(50px)", scale: 0 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ amount: 0.7 }}
                className="image w-full max-w-[25rem] flex justify-center z-20 relative will-change-transform will-change-opacity"
              >
                <img
                  className="w-2/3 max-w-[20rem] z-20"
                  src={femaleAvatar}
                  alt=""
                />
                <div className="absolute w-full h-full z-10 bg-color1 custom-radius"></div>
              </motion.div>
            </div>
            <div className="AboutMeText p-5 flex flex-col mt-5 gap-y-3 md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: easeInOut }}
                viewport={{ amount: 0.7 }}
                className="text-white text-3xl font-semibold "
              >
                About Me
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: easeInOut }}
                viewport={{ amount: 0.3 }}
                className="about-me text-white text-sm leading-relaxed mt-3 text-justify flex flex-col gap-y-4"
              >
                <p>
                  Hello! I’m a passionate web development enthusiast who loves building modern and user-friendly applications. I enjoy turning ideas into real projects and constantly learning new technologies to improve my skills.
                </p>
                <p>
                 I’m currently pursuing my studies in computer science, where I’ve developed a strong foundation in both frontend and backend development. My goal is to become a skilled full-stack developer and work on impactful projects that solve real-world problems.
                </p>
                <p>
                 What makes me stand out is my curiosity and eagerness to explore new ideas. I enjoy working on creative projects, especially those involving cloud platforms and AI, and I’m always excited to take on new challenges and grow as a developer.
                </p>
              </motion.div>
              <motion.a 
                href={doc} 
                download="Vanshika_General_CV.pdf"
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7, ease: easeInOut }}
              >
                <button
                  className="bg-color1 text-white hover:bg-color1Hover rounded-3xl text-center font-semibold cursor-pointer w-2/3 h-[5vh] tracking-widest text-sm mt-5"
                >
                  Download CV
                </button>
              </motion.a>
            </div>
            <div className="button"></div>
          </div>
        </div>
      </div>
    </>
  );
};
