import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { socials } from '@/utils/data'

type Props = {
  // socials: Social[]
}

const Header = ({ }: Props) => {
  return (
    <header className='sticky top-0 flex p-5 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        className='flex flex-row items-center'
        initial={{
          opacity: 0,
          x: -500,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.5
        }}
      >
        {/* social icons */}
        {socials.map(social => (
          <SocialIcon
            key={social}
            target="_blank"
            url={social}
            fgColor='gray'
            bgColor='transparent'
          />
        ))}
      </motion.div>

      {/* <Link href='#contact'> */}
      <motion.div
        className='flex flex-row items-center text-gray-300 cursor-pointer'
        initial={{
          opacity: 0,
          x: 500,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.5
        }}
      >
        {/* <a href="#contact"> */}
        <SocialIcon
          network='email'
          fgColor='gray'
          bgColor='transparent'
          className='cursor-pointer'
        />
        <p className='uppercase hidden md:inline-flex text-gray-500'>get in touch</p>
        {/* </a>   */}
      </motion.div>
      {/* </Link> */}
    </header>
  )
}

export default Header