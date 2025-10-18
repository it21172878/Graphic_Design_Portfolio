import { EDUCATIONS } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="pb-4">
      <motion.h2
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h2>
      <div>
        {EDUCATIONS.map((education, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-stone-400">{education.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold">
                {education.title} -{" "}
                <span className="text-sm text-stone-500">
                  {education.institute}
                </span>
              </h3>
              <p className="mb-4 text-stone-400">{education.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
