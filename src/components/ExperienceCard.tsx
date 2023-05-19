import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from 'typing';

// type Props = {
//   experience: Experience
// }

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <article className='flex flex-col min-w-[500px] rounded-lg items-center space-y-7 flex-shrink-0w-[500px] md:w-[500px] xl:w-[800px] snap-center bg-[#292929] py-[16px] hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden max-sm:min-w-[365px]'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={experience.companyImage}
        alt=""
        className='w-[100px] h-[100px] rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
      />
      <div className='px-0 md:px-10 !mt-0 w-[100%]'>
      <h4 className='text-4xl font-light'>WIP...</h4>
        <p className='font-bold text-2xl mt-1'>WIP...</p>
        <div className='flex space-x-2 my-2 max-sm:justify-center'>
          {experience.technologies.map((Techno, i) => (
            <Techno key={i} className='h-[30px] w-[30px]' />
          ))}
        </div>
        <p className='uppercase py-5 text-gray-500 max-sm:px-3'>
          {(new Date(experience.dateStarted).toDateString())} -{' '}
          {experience.isCurrentlyWorkingHero ? 'Present' : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className='w-[100%] list-disc space-y-4 ml-5 text-lg max-h-[225px] p5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80 ps-8 max-sm:m-0 max-sm:px-2'>
          {experience.points.map((point, i) => (
            <li className='mx-[18px]' key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard