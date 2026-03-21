import { motion } from "motion/react";

export const AchievementsSection = () => {
  const achievements = [
    {
      title: "Dean's List Scholar",
      desc: "Secured a prestigious spot on the Dean’s List, representing the top 10% of the University for exceptional academic excellence.",
      highlight: "Top 10%",
    },
    {
      title: "Analytical Leaderboard",
      desc: "Recognized in the top 5% on the College Analytical Leaderboard for exceptional performance in quantitative reasoning and problem-solving.",
      highlight: "Top 5%",
    },
    {
      title: "Problem Solving Enthusiast",
      desc: "Solved 300+ problems on LeetCode with 5 Badges and 150+ problems on GeeksforGeeks, reflecting consistent dedication, discipline and logical rigor.",
      highlight: "300+ LeetCode",
    },
    {
      title: "AIESEC Hackathon Qualifier",
      desc: "Qualified till Round 3 of the AIESEC Hackathon under GeeksforGeeks, collaborating on real-world problem statements and showcasing creativity, teamwork and technical problem-solving under pressure.",
      highlight: "Round 3",
    },
  ];

  return (
    <div id="Achievements" className="flex justify-center mt-20">
      <div className="w-full px-5 max-w-[60rem] h-full">
        <div className="flex relative justify-center items-center mb-10 py-10">
          <div className="bg-color1/40 rounded-full absolute size-40 md:size-60 blur-[60px] z-10"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="z-30 text-white text-5xl md:text-7xl font-extrabold uppercase tracking-wide text-center"
          >
            Achievements
          </motion.div>
        </div>

        <div className="flex flex-col gap-6">
          {achievements.map((achieve, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col md:flex-row items-start md:items-center gap-4 hover:border-color1/40 transition-colors backdrop-blur-sm"
            >
              <div className="md:w-1/4 flex-shrink-0">
                <span className="text-color2 text-2xl font-bold bg-white/5 px-4 py-2 rounded-lg block text-center border border-color2/20">
                  {achieve.highlight}
                </span>
              </div>
              <div className="md:w-3/4 flex flex-col">
                <h3 className="text-xl text-color1 font-bold mb-2">{achieve.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm">{achieve.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
