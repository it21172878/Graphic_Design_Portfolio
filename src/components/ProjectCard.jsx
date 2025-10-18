import React from "react";
import { motion } from "framer-motion";

// Palette block: show 'View details' even if there are no colors
const Palette = ({ colors = [] }) => {
  const hasColors = Array.isArray(colors) && colors.length > 0;
  const count = hasColors ? colors.length : 0;
  const width = hasColors ? `${100 / count}%` : "0%";
  return (
    <div className="mt-4">
      {hasColors && (
        <>
          {/* Header row: label and count */}
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs text-stone-400">Palette</span>
            <span className="text-[11px] text-stone-400">
              {count} {count === 1 ? "color" : "colors"}
            </span>
          </div>

          {/* Thin segmented color bar */}
          <div
            className="w-full h-2 rounded-full bg-stone-900/80 overflow-hidden ring-1 ring-stone-700/60"
            role="img"
            aria-label={`Color palette with ${count} ${
              count === 1 ? "color" : "colors"
            }`}
          >
            <div className="flex w-full h-full">
              {colors.map((hex, idx) => (
                <span
                  key={`${hex}-${idx}`}
                  className="h-full"
                  style={{ backgroundColor: `#${hex}`, width }}
                  title={`#${hex}`}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {/* Dots + Details button (always render button) */}
      <div
        className={`flex items-center justify-between ${
          hasColors ? "mt-2" : "mt-1"
        }`}
      >
        <div className="flex -space-x-4">
          {hasColors &&
            colors
              .slice(0, 3)
              .map((hex, idx) => (
                <span
                  key={`dot-${hex}-${idx}`}
                  className="inline-block w-8 h-8 rounded-full shadow-md"
                  style={{ backgroundColor: `#${hex}` }}
                  title={`#${hex}`}
                />
              ))}
        </div>
        <button
          type="button"
          className="px-3 py-1 rounded-full text-[11px] font-medium bg-stone-800/70 border border-stone-700 text-stone-300 hover:bg-stone-700/70 hover:text-stone-100 transition-colors"
        >
          View details
        </button>
      </div>
    </div>
  );
};

const categoryAccent = {
  Branding: "from-black/30 via-stone-900/40 to-black/60",
  Packaging: "from-black/30 via-stone-900/40 to-black/60",
  Flyer: "from-black/30 via-stone-900/40 to-black/60",
  Others: "from-black/30 via-stone-900/40 to-black/60",
};

const ProjectCard = ({ project }) => {
  const accent =
    categoryAccent[project?.category] ||
    "from-black/30 via-stone-900/40 to-black/60";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 240, damping: 22, mass: 0.9 }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.995 }}
      className={`group relative rounded-2xl overflow-hidden border border-white/10 ring-1 ring-white/10 group-hover:ring-white/20 bg-black/20 backdrop-blur-3xl backdrop-saturate-150 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] transition-all duration-300 transform-gpu will-change-transform will-change-opacity`}
    >
      {/* Dark glass tint */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-black/30 via-black/20 to-black/30"
      />

      {/* Soft bokeh highlights for glass morphism */}
      <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-3 left-3 h-16 w-16 rounded-full bg-white/20 blur-2xl opacity-30" />
        <div className="absolute top-6 right-5 h-10 w-10 rounded-full bg-white/30 blur-xl opacity-40" />
        <div className="absolute bottom-8 left-8 h-24 w-24 rounded-full bg-white/15 blur-3xl opacity-30" />
        <div className="absolute bottom-10 right-10 h-16 w-28 rounded-full bg-white/20 blur-3xl opacity-25" />
      </div>
      {/* Glass gradient veil (subtle) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-30"
      />
      {/* Subtle glow on hover */}
      <div
        className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${accent}`}
      />

      {/* Image header */}
      <div className="relative w-full h-40 sm:h-44 md:h-48 bg-stone-900/60">
        {project?.image && (
          <img
            src={project.image}
            alt={project?.title || "Project"}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
        {/* Rounded header mask */}
        <div className="absolute inset-0 ring-0" />
      </div>

      {/* Content */}
      <div className="relative p-5">
        <h3 className="text-stone-100 text-lg font-semibold leading-tight mb-1 line-clamp-1">
          {project?.title}
        </h3>
        <p className="text-stone-400 text-xs uppercase tracking-wide mb-3">
          {project?.category}
        </p>
        {project?.description && (
          <p className="text-stone-300/90 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        )}

        {/* Color palette */}
        <Palette colors={project?.colorPalette} />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
