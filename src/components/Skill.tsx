import React from "react";
import { motion } from "framer-motion";
import { Skill } from "typing";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const Skill = ({
  directionLeft,
  skill: { image, progress },
}: Props) => {
  const Img = image;
  return (
    <div className="group relative flex">
      <motion.div
        initial={{
          x: directionLeft ? -100 : 100,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        // style={{ backgroundColor: bgColor }}
        className='rounded-full p-2 border object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out max-sm:w-16 max-sm:h-16 max-sm:p-1'
      >
        <Img loading="lazy" className="!h-[100%] !w-[100%] rounded-full" />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-black opacity-100 sm:text-3xl">
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
