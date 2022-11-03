import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    className='relative flex justify-center items-center'
    initial = {{
        opacity: 0.
    }}
    animate = {{
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%']
    }}
    transition = {{
        duration: 2.5
    }}
    >
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='border border-[#333333] rounded-full h-[300px] absolute w-[300px] mt-52'/>
        <div className='border border-[#333333] rounded-full h-[500px] absolute w-[500px] mt-52'/>
        <div className='rounded-full border border-[#ffb820] opacity-20  w-[650px] h-[650px] absolute mt-52 animate-pulse'/>
        <div className='border border-[#333333] rounded-full h-[800px] absolute w-[800px] mt-52' />
    </motion.div>
  )
}