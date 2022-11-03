import {motion} from 'framer-motion'
import { urlFor } from '../sanity'
import { Project } from '../typings'

type Props = {
  projects: Project[]
}

function Projects({projects}: Props) {
  return (
    <motion.div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
          <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
            {projects?.map((project, i) => (
                <div key={i} className='w-screen flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img 
                    initial={{
                      y: -300,
                      opacity: 0
                    }}
                    transition={{
                      duration: 1.2
                    }}
                    whileInView = {{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    src={urlFor(project?.image).url()} alt="project image" />

                    <div className='space-y-10 px-0 md:px-0 max-w-6xl'>
                        <h4 className="text-4xl font-semibold text-center">
                            <span className='underline decoration-[#f7bb1a]/50'>Case: study {i + 1} of {projects.length}: </span>
                             {project?.title}
                        </h4>
                        
                        <div className='flex items-center space-x-2 justify-center'>
                    {project.technology.map(tech => (
                      <img src={urlFor(tech.image).url()} key={tech._id} alt=""
                        className='w-10 h-10' />
                    ))}

                    <p className='text-lg text-center md:text-left'>
                      {project?.summary}</p>
                        </div>
                    </div>
                </div>
            ))}
          </div>
        

          <div className='w-full absolute top-[30%] bg-[#f7bb1a]/20 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects