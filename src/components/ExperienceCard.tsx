import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from 'typing'
import { urlFor } from 'sanity'
type Props = {
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  console.log('🚀 > experience', experience);
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={urlFor(experience.companyImage).url()}
        alt=""
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'></h4>
        <p className='font-bold text-2xl mt-1'></p>
        <div className='flex space-x-2 my-2'>
          {experience.technologies.map(techn => (
            <img
              key={techn._id}
              className='h-10 w-10 rounded-full'
              src={urlFor(techn?.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className='uppercase py-5 text-gray-500'>
          {(new Date(experience.dateStarted).toDateString())} -{' '}
          {experience.isCurrentlyWorkingHero ? 'Present' : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg max-h-96 p5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80'>
          {experience.points.map((point, i) => (
            <li
              key={i}
            >
              {point}
              </li>
            
          ))}
          
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard