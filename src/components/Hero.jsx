import profilePic from "../assets/dilankaProfile.webp";
import { HERO_CONTENT } from "./../constants/index";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const Hero = () => {
  return (
    // <div className=" pb-4 lg:mb-36">
    // <div className=" pb-4 lg:mb-36 relative h-screen flex items-center justify-center text-white overflow-hidden flex-col ">
    <div className="pb-8 lg:pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8 p-4 sm:p-6">
            <motion.img
              src={profilePic}
              alt="Dilanka Prasad"
              // className="border border-stone-900 rounded-3xl"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start px-6 sm:px-8 lg:px-4"
          >
            <motion.h2
              variants={childVariants}
              className="pb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tighter text-center lg:text-left w-full"
            >
              Dilanka Liyanagama
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-xl sm:text-2xl md:text-3xl tracking-tight text-transparent text-center lg:text-left w-full mb-4"
            >
              Graphic designer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-3 max-w-xl py-2 sm:py-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-tight text-center lg:text-left w-full"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Luxury Dark Theme Button - Elegant & Sophisticated */}
            <motion.a
              variants={childVariants}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 mb-8 sm:mb-10 overflow-hidden rounded-lg bg-gradient-to-br from-stone-900 via-zinc-900 to-black border border-stone-700/50 backdrop-blur-sm transition-all duration-500 hover:border-stone-500/80 hover:shadow-2xl hover:shadow-stone-500/20 w-fit mx-auto lg:mx-0"
            >
              {/* Elegant gold shimmer overlay on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>

              {/* Subtle top highlight */}
              <span className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-400/30 to-transparent"></span>

              {/* Button content */}
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                <FiDownload className="w-4 h-4 sm:w-5 sm:h-5 text-stone-300 transition-all duration-500 group-hover:text-amber-400 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                <span className="font-medium text-stone-200 tracking-wide text-xs sm:text-sm uppercase group-hover:text-white transition-colors duration-500">
                  Download Resume
                </span>
              </span>

              {/* Luxury shine effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-stone-400/20 to-transparent skew-x-12"></span>

              {/* Bottom shadow accent */}
              <span className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
