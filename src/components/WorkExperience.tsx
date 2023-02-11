import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/utils/data";

const WorkExperience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-start md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-[1]">
        WorkExperience
      </h3>

      <div className={`w-full flex space-x-5 overflow-x-scroll p-10 pb-[16px] snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin ${experiences.length > 1 ? 'justify-start':'justify-center'}`}>
        {experiences.map((experience, i) => (
          <ExperienceCard key={i} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
