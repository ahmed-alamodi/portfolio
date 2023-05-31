import React from 'react'
import { motion } from 'framer-motion'
import { backgroundInformation } from '@/utils/data'


const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex flex-col relative text-center md:text-start md:flex-row max-w-7xl px-4 justify-evenly mx-auto items-center max-sm:justify-center sm:px-10'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl'>
        About
      </h3>
      <motion.img
        src="IMG_1220.jpg"
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        loading="lazy"
        className="mb-0 sm:mb-20 md:mb-0 flex-shrink-0 w-44 h-4w-44 rounded-full object-cover md:rounded-lg md:w-[300px] md:h-[400px] xl:w-[400px] xl:h-[500px]"
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-3xl font-semibold sm:text-4xl'>
          Here is a <span className='underline decoration-[#f7ab0a]/50'>little</span>
          {" "}
          background
        </h4>
        <p className='text-sm sm:text-base !mt-4 sm:!mt-10'>{backgroundInformation}</p>
      </div>
    </motion.div>
  )
}

export default About