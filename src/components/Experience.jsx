import React from 'react'
import {motion} from 'framer-motion'
import Reveal from './Reveal'
import {UserExperiences} from "../config.js";


const Experience = () => {
    return (
        <div className='p-8 max-w-[1000px] mx-auto'>
            <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
            <motion.div
                className='h-full flex-wrap w-[100%] gap-4 relative flex  items-stretch'
                initial="hidden"
                animate="visible"
            >
                {UserExperiences.map((experience, index) => (
                    <Reveal width='450px' height={'full'} key={index}>
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false, amount: 0.3}}
                            transition={{duration: 1}}
                            className='flex flex-col h-full items-center gap-4 border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10 w-[100%]'
                        >
                            <div className='flex items-center justify-between  '>
                                <img src={experience.logo} alt={experience.company}
                                     className='w-48 h-48 min-w-48 min-h-48 object-contain rounded-full'/>
                            </div>
                            <div className='flex flex-col items-start '>
                                <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                                <p className='text-gray-300'>{experience.period}</p>
                                <p className='text-gray-400 mt-4'>{experience.description}</p>
                                <p
                                    style={{lineHeight: '1.3'}}
                                    className='text-gray-400 text-md mt-4'>{experience.subDescription}</p>
                            </div>


                        </motion.div>
                    </Reveal>
                ))}

            </motion.div>


        </div>
    )
}

export default Experience