import { motion } from "motion/react";
import { useState, useEffect } from "react";
import heroIllustration from "../assets/images/image.png";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import leetcode from "../assets/icons/leetcode.svg";
import gmail from "../assets/icons/gmail.svg";

export const HeroSect = () => {
  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ["web developer", "web designer", "software engineer", "ai enthusiast"];
  const speed = isDeleting ? 50 : 100;

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setRoleText(currentRole.substring(0, roleText.length - 1));
        if (roleText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        setRoleText(currentRole.substring(0, roleText.length + 1));
        if (roleText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const timeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(timeout);
  }, [roleText, isDeleting, roleIndex]);
  return (
    <div id="Home" className="relative min-h-[90vh] flex bg-color3 text-white font-sora overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-color1/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] bg-color2/10 blur-[100px] rounded-full"></div>
      </div>

      {/* Left Sidebar */}
      <div className="hidden md:flex flex-col items-center justify-between py-12 w-20 border-r border-white/5 z-50 bg-color3/50 backdrop-blur-md">
        <div className="flex flex-col items-center gap-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="size-10 rounded-full overflow-hidden border-2 border-color1 p-1 hover:scale-110 transition-transform cursor-pointer"
          >
            <img src={heroIllustration} alt="Avatar" className="w-full h-full object-cover rounded-full" />
          </motion.div>
          <div className="rotate-90 origin-center whitespace-nowrap text-white/30 text-[9px] tracking-[0.2em] mt-16 uppercase font-bold">
            Vanshika.dev
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {[
            { icon: github, url: "https://github.com/vanshika265526" },
            { icon: linkedin, url: "https://www.linkedin.com/in/vanshika--" },
            { icon: leetcode, url: "https://leetcode.com/u/vanshika2976910b/" },
            { icon: gmail, url: "mailto:vanshika29769@gmail.com" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="group relative"
            >
              <img src={item.icon} alt="Social" className="w-4 opacity-40 group-hover:opacity-100 transition-all group-hover:scale-125" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col px-6 md:px-16 pt-20 md:pt-24 pb-10 md:pb-14 relative z-10">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-4 py-2 bg-color1/5 border border-color1/10 rounded-full w-fit mb-8"
        >
          <span className="size-1.5 rounded-full bg-color1 animate-pulse shadow-[0_0_10px_#8b5cf6]"></span>
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-color1">
            Open for Freelance & Collab
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
          {/* Hero Text */}
          <div className="flex-1 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl font-light mb-4 text-white/70"
            >
              Hi, I'm <span className="font-bold text-white relative">
                Vanshika
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-color1/30"></span>
              </span> —
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl sm:text-8xl md:text-[3.5rem] font-black leading-[0.85] mb-8 tracking-tighter uppercase min-h-[1.2rem]"
            >
              <div className="bg-fontBlue text-transparent bg-clip-text">Dedicated</div>
              <div className="text-color1 drop-shadow-[0_10px_20px_rgba(139,92,246,0.3)] flex items-center">
                {roleText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, ease: "steps(2)" }}
                  className="inline-block w-[4px] h-[0.7em] bg-color1 ml-2"
                ></motion.span>
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/50 text-sm md:text-base leading-relaxed mb-10 max-w-lg font-medium"
            >
              Full-Stack Developer & GenAI Enthusiast, crafting intelligent, scalable, and user-centered web solutions. <br className="hidden md:block" />
              Building digital experiences that matter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a href="#Contact" className="group flex items-center gap-2.5 px-6 py-3 bg-color1 hover:bg-color1Hover rounded-full font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-color1/20 hover:shadow-color1/40 hover:-translate-y-1">
                Get in touch
                <span className="text-base group-hover:translate-x-1.5 transition-transform">→</span>
              </a>
              <a href="#Projects" className="px-6 py-3 border border-white/10 hover:border-white/30 hover:bg-white/5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all hover:-translate-y-1">
                View my work
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-10 md:gap-16 border-t border-white/5 pt-10"
            >
              {[

                { val: "10+", label: "Projects" },
                { val: "5+", label: "Side Projects" }
              ].map((stat, i) => (
                <div key={i} className="hover:scale-105 transition-transform">
                  <div className="text-2xl md:text-3xl font-black mb-1 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">{stat.val}</div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column / Let's Connect Card */}
          <div className="hidden xl:flex flex-col items-center relative mt-[-10rem]">
            {/* The Rope */}
            <div className="w-[1.2px] h-48 bg-gradient-to-b from-white/0 via-color1/10 to-color1/50 shadow-[0_0_15px_rgba(139,92,246,0.4)] opacity-60"></div>
            
            {/* The Swinging Card Wrapper */}
            <motion.div
              initial={{ rotate: -3 }}
              animate={{ rotate: [ -3, 3, -3] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ originX: "50%", originY: "0%" }}
              className="w-[18rem]"
            >
              <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-7 backdrop-blur-xl relative overflow-hidden group hover:border-color1/30 transition-all duration-500 shadow-2xl shadow-black/60 translate-y-[-2px]">
                {/* Card Inner Glow */}
                <div className="absolute top-[-20%] right-[-20%] w-full h-full bg-color1/5 blur-[100px] pointer-events-none group-hover:bg-color1/10 transition-all"></div>

                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-color2 shadow-[0_0_10px_#06b6d4]"></span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-color2">Available</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <img src={heroIllustration} alt="" className="size-10 object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all border border-white/10" />
                  </div>
                </div>

                <div className="mb-8">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">Open to work</div>
                  <h3 className="text-4xl font-black leading-none tracking-tighter">Let’s Connect<br /><span className="text-color1"></span></h3>
                </div>

                <ul className="space-y-4 mb-10 text-[12px] font-medium text-white/50">
                  {[
                    "Full-stack development",
                    "AI Integration & GenAI",
                    "Premium UI/UX Design"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <span className="size-1 rounded-full bg-color1/50"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <label
                  href="https://github.com/vanshika265526"
                  className="flex items-center justify-center gap-2.5 w-full py-4 bg-white/5 hover:bg-color1 border border-white/10 hover:border-color1 rounded-xl transition-all duration-300 font-black text-[10px] uppercase tracking-[0.2em] group/btn cursor-pointer shadow-lg shadow-black/20"
                >
                  <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
                  Download CV
                </label>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
