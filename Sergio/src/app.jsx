import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import MainLayout from "./layout/MainLayout";

import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Skills from "./sections/about/Skills";
import Experience from "./sections/experience/Experience";
import Projects from "./sections/experience/Projects";
import Education from "./sections/education/Education";
import Certification from "./sections/education/Certification";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function App() {
  const location = useLocation();

  return (
    <MainLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Hero /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
          <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/education" element={<PageWrapper><Education /></PageWrapper>} />
          <Route path="/certifications" element={<PageWrapper><Certification /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </MainLayout>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
