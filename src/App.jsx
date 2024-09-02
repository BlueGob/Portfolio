import Blogs from "./components/Blogs";
import ContactMe from "./components/ContactMe";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import WhatIdo from "./components/WhatIDo";
import WorkExperience from "./components/WorkExperience";

export default function App() {
  return (
    <div>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <Navbar/>
      <Hero/>
      <WhatIdo/>
      <Education/>
      <WorkExperience/>
      <Projects/>
      <Blogs/>
      <ContactMe/>
    </div>
  )
}