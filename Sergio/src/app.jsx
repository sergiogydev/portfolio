import MainLayout from "./layout/MainLayout";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Skills from "./sections/about/Skills";
import Experience from "./sections/experience/Experience";
import Projects from "./sections/experience/Projects";
import Education from "./sections/education/Education";
import Contact from "./sections/education/Certification";

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </MainLayout>
  );
}
