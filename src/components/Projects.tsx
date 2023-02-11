import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from 'sanity'
import { Project } from 'typing'
motion

type Props = {
  projects: Project[]
}

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative flex-col overflow-hidden text-start md:flex-row max-w-full md:text-start xl:flex-row justify-evenly xl:px-10 min-h-screen z-0 xl:space-y-0 mx-auto items-center'
    >
      <h3
        className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'
      >
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
        {projects?.map((project, i) => (
          <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='h-44 w-44'
              src={urlFor(project?.image).url()}
              alt=""
            />

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#f7ab0a]/50'>
                  case study {i + 1} of {projects.length}:
                </span>
                {' '}{project.title}
              </h4>

            </div>
            <div className='flex items-center space-x-2 justify-center'>
              {project?.technologies.map(tech => (
                <img
                  key={tech._id}
                  src={urlFor(tech?.image).url()}
                  alt=""
                  className='h-5 w-5'
                />
              ))}
            </div>

            <p className='text-lg text-center md:text-start'>
              {project.summary}
            </p>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects