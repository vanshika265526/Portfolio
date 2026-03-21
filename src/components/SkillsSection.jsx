import { motion } from "motion/react";
import { RadarChart } from "./radarChart";
import js from "../assets/icons/skills-icon/javascript.svg";
import cpp from "../assets/icons/skills-icon/cpp.svg";
import css from "../assets/icons/skills-icon/css.svg";
import md from "../assets/icons/skills-icon/mongodb.svg";
import node from "../assets/icons/skills-icon/nodejs.svg";
import py from "../assets/icons/skills-icon/python.svg";
import react from "../assets/icons/skills-icon/react-js.svg";
import tailwind from "../assets/icons/skills-icon/tailwindcss.svg";

export const SkillsSection = () => {
  const skillIcons = [js, cpp, py, md, node, react, tailwind, css];

  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "Python", "C", "JavaScript"],
    },
    {
      title: "Tools & Platforms",
      skills: ["MongoDB", "Bootstrap", "Tailwind CSS", "Git", "GitHub", "Postman", "VSCode", "Firebase", "Render", "Netlify"],
    },
    {
      title: "Soft Skills",
      skills: ["Team Collaboration", "Adaptability", "Critical Thinking", "Leadership"],
    },
  ];

  return (
    <div id="Skills" className="flex justify-center mt-20">
      <div className="w-full px-5 max-w-[60rem] h-full">
        {/* Title */}
        <div className="flex relative justify-center items-center mb-10 py-10">
          <div className="bg-color1/40 rounded-full absolute size-60 blur-[80px] z-10"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="z-30 text-white text-5xl md:text-7xl font-extrabold uppercase tracking-wide"
          >
            Skills
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* Radar & Icons */}
          <div className="flex w-full md:w-1/2 flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.5 }}
              className="w-full h-fit flex justify-center will-change-transform will-change-opacity"
            >
              <RadarChart />
            </motion.div>
            
            <div className="skill-icons flex justify-center items-center w-full px-2">
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 w-full justify-items-center bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                {skillIcons.map((icon, index) => (
                  <motion.img
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    key={index}
                    className="size-8 hover:scale-125 transition-transform"
                    src={icon}
                    alt="Skill Icon"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Categorized Skills */}
          <div className="flex w-full md:w-1/2 flex-col gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-color1/40 transition-colors backdrop-blur-sm"
              >
                <h3 className="text-xl text-color1 font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="text-white text-sm bg-white/10 px-3 py-1.5 rounded-full hover:bg-color2 hover:text-black transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
