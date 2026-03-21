import PropTypes from "prop-types";
import {motion} from "motion/react";
export const ProjectCard = ({
  projectImage,
  title,
  subTitle,
  duration,
  description,
  setOpenInsights,
  githubLink,
  liveLink,
}) => {
  const openInsightsPanel = () => {
    setOpenInsights(true);
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="project-card flex flex-col bg-white/5 w-full max-w-[24rem] h-auto rounded-xl overflow-hidden border border-white/10 hover:border-color1/50 transition-all group backdrop-blur-md will-change-transform will-change-opacity shadow-2xl"
      >
        {/* Project Header Image */}
        <div className="project-image w-full h-52 relative overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={projectImage}
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
              <p className="text-color2 text-[10px] uppercase font-bold tracking-widest">{subTitle}</p>
            </div>
            <span className="text-white/40 text-[9px] italic bg-white/5 px-2 py-1 rounded-full backdrop-blur-sm border border-white/10">
              {duration}
            </span>
          </div>
        </div>

        {/* Project Body */}
        <div className="p-5 flex flex-col gap-4 flex-grow">
          <p className="text-white/70 text-xs leading-relaxed line-clamp-3">
            {description}
          </p>

          <div className="flex flex-col gap-3 mt-auto">
            {/* Primary Action */}
            <button
              onClick={() => openInsightsPanel()}
              className="w-full bg-white/10 hover:bg-color1 text-white hover:text-white transition-all rounded-lg py-2 text-xs font-bold uppercase tracking-widest border border-white/5 hover:border-color1"
            >
              Explore Insights
            </button>

            {/* Secondary Actions (Links) */}
            <div className="flex gap-2">
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-slate-900 border border-white/10 hover:border-color2/50 text-white hover:text-color2 py-1.5 rounded-lg text-[10px] font-bold transition-all"
              >
                <svg className="size-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                Github
              </a>
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-color2 text-black hover:bg-color2/80 py-1.5 rounded-lg text-[10px] font-bold transition-all"
              >
                <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
ProjectCard.propTypes = {
  projectImage: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  duration: PropTypes.string,
  description: PropTypes.string,
  setOpenInsights: PropTypes.func,
  githubLink: PropTypes.string,
  liveLink: PropTypes.string,
};
