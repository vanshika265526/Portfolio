import { motion } from "motion/react";
import doc from "../assets/doc/Vanshika General CV.pdf";

export const ResumeSection = () => {
  const resumeData = {
    name: "Vanshika",
    contact: {
      linkedin: "https://www.linkedin.com/in/vanshika--",
      email: "vanshika29769@gmail.com",
      github: "https://github.com/vanshika",
      mobile: "+91 7696396502"
    },
    skills: {
      languages: "C++, Python, C, JavaScript",
      tools: "MongoDB, Bootstrap, Tailwind CSS, Git, GitHub, Postman, VSCode, Firebase, Render, Netlify",
      softSkills: "Team Collaboration, Adaptability, Critical Thinking, Leadership"
    },
    projects: [
      {
        title: "GoPlanner",
        duration: "Nov’ 25 - Dec’25",
        links: { github: "#", live: "#" },
        points: [
          "Designed and deployed GoPlanner a full-stack map-enabled trip planning platform with AI-driven itinerary creation and automated PDF generation, empowering users to instantly craft, save, and share complete travel plans.",
          "Implemented contact support functionality via email submission, streamlining user feedback and issue resolution.",
          "Optimized backend architecture and database queries, ensuring fast retrieval of user trips, AI-generated itineraries, and personalized preferences."
        ]
      },
      {
        title: "Swasth AI",
        duration: "June’ 25 - Aug’25",
        links: { github: "#", live: "#" },
        points: [
          "Developed a full-stack GenAI powered health guidance platform elevating real-time medical assistance efficiency by 40%.",
          "Engineered secure REST API pipelines that converted unstructured medical inputs into precise, context-aware GenAI insights, enhancing recommendation accuracy by 35%.",
          "Built an intelligent PDF-analysis workflow delivering concise, downloadable health reports and optimized data models in MongoDB."
        ]
      },
      {
        title: "Optify - Resume Optimizer System",
        duration: "Apr’ 25 – May’25",
        links: { github: "#", live: "#" },
        points: [
          "Innovated a comprehensive resume JD analysis engine that benchmarks candidate profiles, computes match scores, detects competency gaps, and generates actionable enhancement insights.",
          "Constructed high performance Flask services capable of processing 500+ text documents per minute using PyMuPDF for rapid content extraction.",
          "Containerized and deployed the platform with modular environment configuration and version control, enabling seamless scaling."
        ]
      }
    ],
    training: {
      title: "W3Grads (FLAMES 2025)",
      period: "Jun’ 25 – Aug’ 25",
      details: "MERN Stack and GEN AI",
      points: [
        "Developed full stack web applications using React, Node, Express and MongoDB with modular and scalable architecture.",
        "Enhanced client-server communication and CRUD pipelines to reduce latency and optimize data handling.",
        "Deployed using cloud pipelines with secure environment configurations, improving reliability by 60%.",
        "Project Worked On: Swasth AI (AI Healthcare Assistant)"
      ]
    },
    certificates: [
      "NodeJS | HackerRank (Oct’ 25)",
      "Frontend Developer (React) | HackerRank (Oct’ 25)",
      "MongoDB Basics | MongoDB (Jul ’ 25)",
      "Computer Communications | Coursera (Nov’ 24)",
      "Responsive Web Design | freeCodeCamp (Oct’ 24)",
      "Bits & Bytes of Computer Networking | Coursera (Sep’ 24)"
    ],
    achievements: [
      "Secured a prestigious spot on the Dean’s List, representing the top 10% of the University for exceptional academic excellence.",
      "Recognized in the top 5% on the College Analytical Leaderboard for exceptional performance in quantitative reasoning and problem-solving.",
      "Solved 300+ problems on LeetCode with 5 Badges and 150+ problems on GeeksforGeeks, reflecting consistent dedication, discipline and logical rigor.",
      "Qualified till Round 3 of the AIESEC Hackathon under GeeksforGeeks, collaborating on real-world problem statements."
    ],
    education: [
      {
        school: "Lovely Professional University",
        location: "Phagwara, India",
        degree: "Bachelor of Technology",
        period: "Aug’ 23 – Present",
        details: "Computer Science and Engineering; CGPA: 8.55"
      },
      {
        school: "Army Public School",
        location: "Jalandhar, India",
        degree: "Intermediate",
        period: "Mar’ 22 – May’ 23",
        details: "PCM; Percentage: 89.2%"
      },
      {
        school: "Army Public School",
        location: "Jalandhar, India",
        degree: "Matriculation",
        period: "Mar’ 20 – May’ 21",
        details: "Percentage: 96%"
      }
    ]
  };

  return (
    <section id="Resume" className="flex justify-center py-20 bg-deepBlue min-h-screen relative overflow-hidden">
        {/* Animated Background Glow */}
        <div className="absolute top-1/4 left-1/4 size-96 bg-color1/20 blur-[120px] rounded-full z-0 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 size-96 bg-color2/20 blur-[120px] rounded-full z-0 animate-pulse delay-1000"></div>

      <div className="w-full px-4 md:px-6 max-w-[70rem] z-10">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-12 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tighter">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-color1 to-color2">Resume</span>
          </h2>
          <p className="text-white/60 mt-4 text-sm md:text-base font-light tracking-widest uppercase">Professional Curriculum Vitae</p>
        </motion.div>

        {/* CV Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl shadow-2xl overflow-hidden relative"
        >
          {/* Accent Line at Top */}
          <div className="h-1.5 w-full bg-gradient-to-r from-color1 via-color2 to-color1"></div>

          <div className="p-6 md:p-10">
            {/* Header / Contact */}
            <header className="flex flex-col md:flex-row justify-between items-start border-b border-white/10 pb-6 gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">{resumeData.name}</h1>
                <p className="text-color2 text-xs font-medium tracking-wide">Full-Stack Developer & GenAI Enthusiast</p>
              </div>
              <div className="flex flex-col gap-1 text-[11px] text-white/80 md:text-right">
                <a href={`mailto:${resumeData.contact.email}`} className="hover:text-color1 transition-colors">{resumeData.contact.email}</a>
                <span className="cursor-default">{resumeData.contact.mobile}</span>
                <div className="flex gap-3 md:justify-end mt-1">
                  <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" className="text-white hover:text-color1 duration-200">LinkedIn</a>
                  <a href={resumeData.contact.github} target="_blank" rel="noreferrer" className="text-white hover:text-color1 duration-200">GitHub</a>
                </div>
              </div>
            </header>

            {/* Main Content Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              
              {/* Skills */}
              <section className="md:col-span-2">
                <h3 className="text-xs font-bold text-color1 uppercase tracking-widest mb-3 border-l-2 border-color1 pl-3">Technical Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-4">
                  <div>
                    <span className="text-color2 text-[10px] font-bold uppercase block mb-0.5">Languages</span>
                    <p className="text-white/90 text-[11px] leading-relaxed">{resumeData.skills.languages}</p>
                  </div>
                  <div>
                    <span className="text-color2 text-[10px] font-bold uppercase block mb-0.5">Tools & Platforms</span>
                    <p className="text-white/90 text-[11px] leading-relaxed">{resumeData.skills.tools}</p>
                  </div>
                  <div>
                    <span className="text-color2 text-[10px] font-bold uppercase block mb-0.5">Soft Skills</span>
                    <p className="text-white/90 text-[11px] leading-relaxed">{resumeData.skills.softSkills}</p>
                  </div>
                </div>
              </section>

              {/* Projects */}
              <section className="md:col-span-1">
                <h3 className="text-xs font-bold text-color1 uppercase tracking-widest mb-4 border-l-2 border-color1 pl-3">Key Projects</h3>
                <div className="space-y-5 pl-4">
                  {resumeData.projects.map((project, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between items-baseline mb-1.5">
                        <h4 className="text-[13px] font-bold text-white group-hover:text-color2 transition-colors">{project.title}</h4>
                        <span className="text-[9px] text-white/40 italic">{project.duration}</span>
                      </div>
                      <ul className="list-disc list-outside ml-3 space-y-1 text-white/70 text-[10px] leading-snug">
                        {project.points.map((pt, j) => <li key={j}>{pt}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Training & Achievements right column */}
              <div className="md:col-span-1 space-y-8">
                {/* Training */}
                <section>
                  <h3 className="text-xs font-bold text-color1 uppercase tracking-widest mb-3 border-l-2 border-color1 pl-3">Training</h3>
                  <div className="pl-4">
                    <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-[13px] font-bold text-white">{resumeData.training.title}</h4>
                        <span className="text-[9px] text-white/40 italic">{resumeData.training.period}</span>
                    </div>
                    <p className="text-color2 text-[10px] font-medium mb-2">{resumeData.training.details}</p>
                    <ul className="list-disc list-outside ml-3 space-y-1 text-white/70 text-[10px] leading-snug">
                        {resumeData.training.points.map((pt, j) => <li key={j}>{pt}</li>)}
                    </ul>
                  </div>
                </section>

                {/* Achievements */}
                <section>
                  <h3 className="text-xs font-bold text-color1 uppercase tracking-widest mb-3 border-l-2 border-color1 pl-3">Achievements</h3>
                  <ul className="list-disc list-outside ml-7 space-y-1.5 text-white/70 text-[10px] leading-relaxed">
                    {resumeData.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                  </ul>
                </section>
              </div>

              {/* Certificates & Education bottom grid */}
              <section className="md:col-span-1">
                <h3 className="text-xs font-bold text-color1 uppercase tracking-widest mb-3 border-l-2 border-color1 pl-3">Certifications</h3>
                <ul className="list-disc list-outside ml-7 space-y-1.5 text-white/70 text-[10px] leading-relaxed">
                  {resumeData.certificates.map((cert, i) => <li key={i} className="hover:text-white transition-colors cursor-default">{cert}</li>)}
                </ul>
              </section>

              <section className="md:col-span-1">
                <h3 className="text-xs font-bold text-color1 uppercase tracking-widest mb-3 border-l-2 border-color1 pl-3">Education</h3>
                <div className="space-y-4 pl-4">
                  {resumeData.education.map((edu, i) => (
                    <div key={i} className="flex justify-between items-start gap-1">
                      <div>
                        <h4 className="text-[11px] font-bold text-white">{edu.school}</h4>
                        <p className="text-white/40 text-[9px]">{edu.location} | {edu.period}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-medium text-color2">{edu.degree}</p>
                        <p className="text-white/60 text-[9px] font-bold uppercase">{edu.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>

             {/* Footer Button inside Card */}
             <div className="mt-10 flex justify-center border-t border-white/10 pt-6">
                <a href={doc} download="Vanshika_General_CV.pdf" target="_blank" rel="noreferrer" className="group relative px-6 py-2.5 bg-color1 hover:bg-color1Hover text-white rounded-full font-bold uppercase tracking-widest text-[9px] transition-all flex items-center gap-2 overflow-hidden">
                    <span className="relative z-10 transition-transform group-hover:-translate-x-1">Download Paper Resume</span>
                    <svg className="relative z-10 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-color1/0 via-white/20 to-color1/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
