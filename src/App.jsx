import { Navbar } from "./components/Navbar";
import { HeroSect } from "./components/HeroSect";
import { ProjectSection } from "./components/ProjectSection";
import { AboutMe } from "./components/AboutMe";
import { ContactUs } from "./components/contactUs";
import { ResumeSection } from "./components/ResumeSection";
import { EducationSection } from "./components/EducationSection";
import { SkillsSection } from "./components/SkillsSection";
import { CertificatesSection } from "./components/CertificatesSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { SummerTrainingSection } from "./components/SummerTrainingSection";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <div className="bg-deepBlue flex flex-col w-full h-full font-sora overflow-x-hidden relative">
        <Navbar />
        <HeroSect />
        <AboutMe />
        <ResumeSection />
        <EducationSection />
        <SkillsSection />
        <ProjectSection />
        <CertificatesSection />
        <AchievementsSection />
        <SummerTrainingSection />
        <ContactUs />
      </div>
      <Analytics />
    </>
  );
}

export default App;