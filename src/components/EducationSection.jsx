import { motion } from "motion/react";

export const EducationSection = () => {
  const educationData = [
    {
      institution: "Lovely Professional University",
      location: "Phagwara, India",
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      duration: "Aug’ 23 – Present",
      score: "CGPA: 8.55",
    },
    {
      institution: "Army Public School",
      location: "Jalandhar, India",
      degree: "Intermediate",
      field: "PCM",
      duration: "Mar’ 22 – May’ 23",
      score: "Percentage: 89.2%",
    },
    {
      institution: "Army Public School",
      location: "Jalandhar, India",
      degree: "Matriculation",
      field: "General",
      duration: "Mar’ 20 – May’ 21",
      score: "Percentage: 96%",
    },
  ];

  return (
    <div id="Education" className="flex justify-center mt-20">
      <div className="w-full px-5 max-w-[60rem] h-full">
        {/* Title */}
        <div className="flex relative justify-center items-center mb-10 py-10">
          <div className="bg-color1/40 rounded-full absolute size-40 md:size-60 blur-[60px] z-10"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="z-30 text-white text-5xl md:text-7xl font-extrabold uppercase tracking-wide"
          >
            Education
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-6 relative before:absolute before:inset-0 before:ml-5 md:before:ml-[50%] before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 group-hover:bg-color1 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-20 transition-colors">
                 <div className="w-3 h-3 bg-color2 rounded-full"></div>
              </div>
              <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/5 border border-white/10 p-6 rounded-xl shadow-lg backdrop-blur-sm hover:border-color1/50 transition-colors`}>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="font-bold text-color1 text-xl">{edu.institution}</h3>
                  <span className="text-white/60 text-xs mt-1 md:mt-0 bg-white/10 px-3 py-1 rounded-full w-fit">
                    {edu.duration}
                  </span>
                </div>
                <div className="text-white font-medium mb-1">{edu.degree}</div>
                <div className="text-white/80 text-sm mb-1">{edu.field} | {edu.location}</div>
                <div className="text-color2 text-sm font-semibold">{edu.score}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
