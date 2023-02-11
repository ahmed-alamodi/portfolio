import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from 'sanity';
import { PageInfo } from 'typing';
import BackgroundCircles from './BackgroundCircles';

type Props = {
  pageInfo: PageInfo
}

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [`hi, name\'s ${pageInfo.name}`, 'love typescript', '<html />'],
    delaySpeed: 2000,
    loop: true,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
      />
      <div className='z-20'>

        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo.role}</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
          <span>{text}</span>
          <Cursor cursorColor='#f7ab0a' />
        </h1>

        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>about</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero