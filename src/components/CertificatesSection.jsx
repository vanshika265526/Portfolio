import { motion } from "motion/react";

export const CertificatesSection = () => {
  const certificates = [
    { title: "NodeJS", issuer: "HackerRank", date: "Oct’ 25" },
    { title: "Frontend Developer (React)", issuer: "HackerRank", date: "Oct’ 25" },
    { title: "MongoDB Basics", issuer: "MongoDB", date: "Jul’ 25" },
    { title: "Computer Communications", issuer: "Coursera", date: "Nov’ 24" },
    { title: "Responsive Web Design", issuer: "freeCodeCamp", date: "Oct’ 24" },
    { title: "Bits & Bytes of Computer Networking", issuer: "Coursera", date: "Sep’ 24" },
  ];

  return (
    <div id="Certificates" className="flex justify-center mt-20">
      <div className="w-full px-5 max-w-[60rem] h-full">
        {/* Title */}
        <div className="flex relative justify-center items-center mb-10 py-10">
          <div className="bg-color1/40 rounded-full absolute size-40 md:size-60 blur-[60px] z-10"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="z-30 text-white text-5xl md:text-7xl font-extrabold uppercase tracking-wide text-center"
          >
            Certificates
          </motion.div>
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 flex flex-col justify-between rounded-xl hover:bg-color1/10 hover:border-color1/50 transition-all backdrop-blur-sm shadow-lg group"
            >
              <div>
                <h3 className="text-xl font-semibold text-color1 mb-2 group-hover:text-white transition-colors">{cert.title}</h3>
                <p className="text-white/80">{cert.issuer}</p>
              </div>
              <div className="mt-4">
                <span className="text-color2 text-sm bg-white/5 px-3 py-1 rounded-full">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
