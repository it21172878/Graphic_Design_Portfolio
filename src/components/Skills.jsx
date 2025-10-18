import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skills = [
  "Brand Identity",
  "Logo Creation",
  "Typography",
  "Photo Editing",
  "Illustration",
  "Social Media Design",
  "Packaging Design",
  "Creative Direction",
];

const Skills = () => {
  return (
    <section id="skills" className="pb-16 sm:pb-20 lg:pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-8 sm:mb-10 text-center text-2xl sm:text-3xl font-semibold"
      >
        Skills
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-5 max-w-5xl mx-auto"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            variants={itemVariants}
            className="group relative inline-flex w-auto px-4 py-2.5 rounded-full border border-stone-400/40 bg-transparent text-center text-stone-100/90 text-sm sm:text-base tracking-tight transition-colors duration-300 hover:border-amber-400/70 hover:text-amber-300 cursor-pointer m-0"
            animate={{ scale: [1, 1.13, 1] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "loop",
              delay: i * 0.18,
              ease: "easeInOut",
            }}
          >
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 rounded-full" />
            <span className="relative z-10 block truncate text-sm sm:text-base md:text-[1.05rem] tracking-tight group-hover:text-amber-300">
              {skill}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
