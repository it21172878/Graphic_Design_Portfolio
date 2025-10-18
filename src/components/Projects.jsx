import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../constants";
import ProjectCard from "./ProjectCard";

const CATEGORIES = ["Branding", "Packaging", "Flyer", "Others"];

const Projects = () => {
  const [active, setActive] = useState("Branding");

  const projects = useMemo(
    () => PROJECTS.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-2xl sm:text-3xl font-semibold text-stone-100 mb-8"
      >
        Projects
      </motion.h2>

      {/* Filter buttons: single segmented control with one border */}
      <div className="max-w-2xl mx-auto mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border border-stone-800 rounded-full overflow-hidden bg-stone-900/80 shadow-lg">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`w-full px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-bold transition-all duration-200 focus:z-10 focus:outline-none border border-stone-700 cursor-pointer
                ${
                  active === cat
                    ? "text-amber-300 bg-stone-800/90 shadow-md border-amber-400"
                    : "text-stone-200 bg-transparent hover:bg-stone-800/60 hover:text-amber-200"
                }
                ${idx === 0 ? "rounded-l-full" : ""}
                ${idx === CATEGORIES.length - 1 ? "rounded-r-full" : ""}
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid: 1 col mobile, 2 col small, 3 col md+ */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 max-w-6xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {projects.map((p) => (
            <motion.div
              layout
              key={p.id}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
                mass: 0.9,
              }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
