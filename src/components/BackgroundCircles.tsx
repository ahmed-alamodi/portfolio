import React from 'react'
import { motion } from 'framer-motion'

const circles = [
  'absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt52 animate-ping top-0',
  'rounded-full border border-[#333333] w-[300px] h-[300px] mt-52 absolute',
  'rounded-full border border-[#333333] w-[500px] h-[500px] mt-52 absolute',
  'rounded-full border border-[#f7ab0] w-[650px] h-[650px] mt-52 absolute opacity-20 animate-pulse',
  'rounded-full border border-[#333333] w-[800px] h-[800px] mt-52 absolute',
];

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className='relative flex justify-center items-center'>
      {circles.map((style, i) => (
        <div key={i} className={style} />
      ))}
    </motion.div>
  )
}

export default BackgroundCircles