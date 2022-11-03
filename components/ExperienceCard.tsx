import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { Experience } from '../typings'
import { urlFor } from '../sanity'
type Props = {experience: Experience}

function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
          <motion.img 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1}}
            viewport={{ once: true}}
            transition={{duration: 1.5}}
            src={urlFor(experience?.companiImage).url()} 
            className="h-32 w-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-top">

        </motion.img>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
        <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
              <div className='flex space-x-2 my-2'>
                {/* Technologies used: icons */}
                  
                  {experience.technologies.map(technology => (
                    <img className='h-10 w-10 rounded-full'  src={urlFor(technology.image).url()} key={experience._id} alt="" />
                  ))}
        
              </div>
        <p className='uppercase py-5 text-gray-300'>
        {new Date(experience.dateStarted).toDateString()} 
        - 
        {experience.IsCurrentlyWorking ? 'Present' : new Date(experience.dateEnded).toDateString()}</p>
              <ul className='list-disc space-y-4 ml-5 text-lg h-96'>
                {experience.points.map((point, i) => (
                  <li key={i}>{point}</li> 
                ))}
              </ul>
        </div>
    </article>
  )
}
// http://www.kopernik.me/upload/resize_cache/iblock/234/270_175_140cd750bba9870f18aada2478b24840a/234506ff343db1a89d17efb59e8c8d52.png

// https://cdn-ru.bitrix24.ru/b8548463/landing/d33/d33a7b5b5ced3fdaf6c50e6537a9b121/Bez_imeni-2_1x.png
export default ExperienceCard