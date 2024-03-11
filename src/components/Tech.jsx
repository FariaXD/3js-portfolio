import React from 'react'
import { BallCanvas } from "./canvas"
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies that I learned</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>      
      <div className='flex flex-row flex-wrap justify-center gap-10 my-4'>
        {technologies.map((technology, i) => (
          <div className='w-28 h-28' key={i}>
            <BallCanvas icon={technology.icon} name={technology.name} planet={technology.planet}/>
          </div>
        ))}
      </div>
      <p className={`${styles.sectionSubText} text-center`}>Press ball</p>
    </div>
  )
}

export default SectionWrapper(Tech, "tech")