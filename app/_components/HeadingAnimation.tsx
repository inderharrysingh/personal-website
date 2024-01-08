"use client"

import { motion } from 'framer-motion'
import { Fragment } from 'react'

export default function headingAnimation() {
  return (
    <Fragment>
          <motion.h1  animate={{y : [ -10,  1 ], opacity : [0 , 1]  }} className="text-l text-3xl md:text-4xl ">Hi I am <span className="text-pink-600 font-bold ">Inderjot Singh</span> <br/> Full-Stack Developer with Experience in Cloud and Devops. 
          I love <span className="text-purple-400 font-bold">Next JS</span>   and <span className="text-purple-400 font-bold " >Kubernetes</span>     </motion.h1>
    </Fragment>
  )
}
