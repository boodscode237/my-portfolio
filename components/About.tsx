import React from 'react'
import {motion} from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  pageInfo: PageInfo
}
// https://avatars.githubusercontent.com/u/65740750?v=4
function About({pageInfo}: Props) {
  return (
    <motion.div 
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    initial={{opacity:0}}
    transition={{duration: 1.5}}
    whileInView={{opacity:1}}
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
          <motion.img 
          src={urlFor(pageInfo.profilePic).url()} className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
          initial={{
            x: -200,
            opacity: 0,
          }}
          viewport={{once: false}}
          transition={{
            duration: 1.4
          }} 
          whileInView={{
            opacity: 1,
            x: 0
          }}
          />

          <div className='space-y-10 px-0 md:px-10'>
              <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[red]'>little</span> background</h4>
              <p className='text-lg'>
                  {pageInfo.backgroundInformation}
              </p>
          </div>
    </motion.div>
  )
}

export default About