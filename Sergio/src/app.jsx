import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import ProjectModal from "./sections/ProjectModal";
import FloatingButtons from "./components/FloatingButtons";
import { projects } from "./data/projects";

const idFromPath = () => {
  const id = window.location.pathname.replace(/^\/|\/$/g, "").toLowerCase();
  return projects.some((p) => p.id === id) ? id : null;
};

export default function App() {
  const [openId, setOpenId] = useState(idFromPath);

  useEffect(() => {
    const onPop = () => setOpenId(idFromPath());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const open = useCallback((id) => {
    window.history.pushState({}, "", `/${id}`);
    setOpenId(id);
  }, []);

  const close = useCallback(() => {
    if (window.location.pathname !== "/") window.history.pushState({}, "", "/");
    setOpenId(null);
  }, []);

  const project = projects.find((p) => p.id === openId);

  return (
    <div className="overflow-x-clip">
      <main>
        <Hero onOpen={open} />
        <Projects onOpen={open} />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <FloatingButtons />
      <AnimatePresence>
        {project && <ProjectModal key={project.id} project={project} onClose={close} />}
      </AnimatePresence>
    </div>
  );
}
