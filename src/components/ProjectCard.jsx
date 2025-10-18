import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const categoryAccent = {
  Branding: "from-black/30 via-stone-900/40 to-black/60",
  Packaging: "from-black/30 via-stone-900/40 to-black/60",
  Flyer: "from-black/30 via-stone-900/40 to-black/60",
  Others: "from-black/30 via-stone-900/40 to-black/60",
};

// Category fallback colors if no palette and image extraction fails
const categoryColors = {
  Branding: ["E63946", "F1FAEE", "A8DADC"],
  Packaging: ["06FFA5", "FFFB00", "FF006E"],
  Flyer: ["7209B7", "F72585", "4CC9F0"],
  Others: ["FF9F1C", "2EC4B6", "E71D36"],
};

const ProjectCard = ({ project }) => {
  const accent =
    categoryAccent[project?.category] ||
    "from-black/30 via-stone-900/40 to-black/60";

  const [dominantColor, setDominantColor] = useState(null);
  const imgRef = useRef(null);

  // Generate color palette bottom border
  const hasColors =
    Array.isArray(project?.colorPalette) && project.colorPalette.length > 0;

  // Use provided palette, or dominant color, or category fallback
  const displayColors = hasColors
    ? project.colorPalette
    : dominantColor
    ? [dominantColor]
    : categoryColors[project?.category] || categoryColors.Others;

  const colorCount = displayColors.length;
  const colorWidth = `${100 / colorCount}%`;

  // Extract dominant color from image if no palette exists
  useEffect(() => {
    if (!hasColors && project?.image && imgRef.current) {
      const img = imgRef.current;

      const extractColor = () => {
        try {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          // Sample from center of image
          const centerX = Math.floor(canvas.width / 2);
          const centerY = Math.floor(canvas.height / 2);
          const imageData = ctx.getImageData(
            centerX - 50,
            centerY - 50,
            100,
            100
          );
          const data = imageData.data;

          let r = 0,
            g = 0,
            b = 0,
            count = 0;

          // Calculate average color
          for (let i = 0; i < data.length; i += 4) {
            // Skip very dark or very light pixels
            const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
            if (brightness > 30 && brightness < 225) {
              r += data[i];
              g += data[i + 1];
              b += data[i + 2];
              count++;
            }
          }

          if (count > 0) {
            r = Math.round(r / count);
            g = Math.round(g / count);
            b = Math.round(b / count);

            // Convert to hex
            const hex = ((r << 16) | (g << 8) | b)
              .toString(16)
              .padStart(6, "0")
              .toUpperCase();
            setDominantColor(hex);
          }
        } catch (error) {
          console.log("Could not extract color from image");
        }
      };

      if (img.complete) {
        extractColor();
      } else {
        img.addEventListener("load", extractColor);
        return () => img.removeEventListener("load", extractColor);
      }
    }
  }, [hasColors, project?.image]);

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlipToggle = () => {
    setIsFlipped(!isFlipped);
  };

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

      {/* Image header - stays fixed */}
      <div className="relative w-full h-40 sm:h-44 md:h-48 bg-stone-900/60">
        {project?.image && (
          <img
            ref={imgRef}
            src={project.image}
            alt={project?.title || "Project"}
            className="w-full h-full object-cover"
            loading="lazy"
            crossOrigin="anonymous"
          />
        )}
        {/* Rounded header mask */}
        <div className="absolute inset-0 ring-0" />
      </div>

      {/* 3D Flip Container for Content Area */}
      <div
        className="relative [perspective:1200px] min-h-[240px] cursor-pointer"
        onClick={handleFlipToggle}
        onTouchStart={handleFlipToggle}
      >
        <div
          className={`relative [transform-style:preserve-3d] transition-transform duration-700 ease-out min-h-[240px] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          } group-hover:[transform:rotateY(180deg)]`}
        >
          {/* Front Side */}
          <div className="relative p-5 pb-0 [backface-visibility:hidden] min-h-[240px] flex flex-col">
            <h3 className="text-stone-100 text-lg font-semibold leading-tight mb-2 line-clamp-1">
              {project?.title}
            </h3>
            <div className="mb-3">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-gradient-to-r from-stone-900/80 via-stone-800/90 to-black/80 border border-stone-700 text-stone-300 shadow-sm tracking-wide">
                {project.category}
              </span>
            </div>
            {project?.description && (
              <p className="text-stone-300/90 text-sm leading-[1.4] line-clamp-2 max-h-[2.5rem] overflow-hidden mb-auto pb-5">
                {project.description}
              </p>
            )}
          </div>

          {/* Back Side */}
          <div className="absolute top-0 left-0 right-0 w-full p-6 pb-0 min-h-[240px] bg-gradient-to-br from-black/95 via-stone-900/95 to-black/95 backdrop-blur-xl rounded-b-2xl flex flex-col justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
            {project?.description && (
              <p className="text-stone-300 text-sm leading-relaxed text-center px-2 pb-6">
                {project.description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Color Palette as Bottom Border - Always shows */}
      <div className="absolute bottom-0 left-0 right-0 h-4 flex z-20">
        {displayColors.map((hex, idx) => (
          <div
            key={`${hex}-${idx}`}
            className="h-full"
            style={{ backgroundColor: `#${hex}`, width: colorWidth }}
            title={`#${hex}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
