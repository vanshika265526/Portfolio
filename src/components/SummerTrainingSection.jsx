import { motion } from "motion/react";

export const SummerTrainingSection = () => {
  return (
    <div id="Training" className="flex justify-center mt-20">
      <div className="w-full px-5 max-w-[60rem] h-full">
        {/* Title */}
        <div className="flex relative justify-center items-center mb-10 py-10">
          <div className="bg-color1/40 rounded-full absolute size-60 blur-[80px] z-10"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="z-30 text-white text-5xl md:text-7xl font-extrabold uppercase tracking-wide text-center"
          >
            Summer Training
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col gap-6 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(128,255,210,0.1)] transition-all"
        >
          <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-3xl font-bold text-color1 mb-1">MERN Stack and GEN AI</h3>
              <div className="text-xl text-white font-medium">W3Grads (FLAMES 2025)</div>
            </div>
            <span className="text-color2 text-sm bg-color2/10 px-4 py-2 rounded-full font-semibold border border-color2/30">
              Jun’ 25 – Aug’ 25
            </span>
          </div>

          <ul className="flex flex-col gap-4 text-white/80 list-disc list-inside marker:text-color1 marker:text-xl border-b border-white/10 pb-6">
            <li className="leading-relaxed">
              <span className="-ml-2">Developed full stack web applications using React, Node, Express and MongoDB with modular and scalable architecture.</span>
            </li>
            <li className="leading-relaxed">
              <span className="-ml-2">Enhanced client-server communication and CRUD pipelines to reduce latency and optimize data handling. Included PDF processing workflows for uploading, extracting, summarizing and downloading assets.</span>
            </li>
            <li className="leading-relaxed">
              <span className="-ml-2">Deployed using cloud pipelines with secure environment configurations, improving reliability and maintainability by 60%.</span>
            </li>
          </ul>

          <div className="project-worked flex flex-col gap-3">
             <h4 className="text-color2 font-bold uppercase tracking-widest text-sm">Project Worked On</h4>
             <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="size-2 bg-color1 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-white font-bold">Swasth AI</div>
                  <div className="text-white/60 text-xs mt-1">AI-powered healthcare assistant for symptom analysis and health guidance.</div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
