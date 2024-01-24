'use client'
// import './App.css'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import SvgComponent from './Svg'
import LighSvg from "./LightSvg"
import { useTheme } from 'next-themes'
function AnimationComponent() {

  const [number, setNumber] = useState(0)
  const { theme } = useTheme()
  const variants = {
    "one": [
      {
        translateX: 0,
        translateY: 0,
        translateZ: 0,
      },
      {
        translateX: 0,
        translateY: "60%",
        translateZ: 0,
      },
      {
        translateX: "-30%",
        translateY: "110%",
        translateZ: 0,
      },

    ],

    "two": [
      {
        translateX: 0,
        translateY: 0,
        translateZ: 0,
      },
      {
        translateX: "50%",
        translateY: "-50%",
        translateZ: 0,
      },
      {
        translateX: "100%",
        translateY: "-60%",
        translateZ: 0,
      },
    ],


    "three": [
      {
        translateX: 0,
        translateY: 0,
        translateZ: 0,
      },
      {
        translateX: "-100%",
        translateY: "-20%",
        translateZ: 0,
      },
      {
        translateX: "-140%",
        translateY: "-70%",
        translateZ: 0,
      }]
  }

  useEffect(() => {

    const timeoutid = setTimeout(() => { setNumber((prev) => (prev + 1) % 3) }, 5000)

    return () => clearTimeout(timeoutid)

  }, [number])

  return (

    <div className='absolute inset-0 overflow-hidden pointer-events-none blur-3xl backdrop-blur-3xl -z-10'>

      <motion.div className='w-full max-w-[1200px] min-w-[600px] absolute -top-[50%] -left-[50%] lg:-top-[120%] lg:-left-[30%]'
        animate={variants.one[number]}
        transition={{ duration: 3 }}
      >
        {theme == "dark" ? <SvgComponent /> : <LighSvg />}
      </motion.div>

      <motion.div className='w-full max-w-[1200px] min-w-[600px] absolute top-[10%] left-0 lg:top-0 lg:left-0'
        animate={variants.two[number]}
        transition={{ duration: 3 }}
      >
        {theme == "dark" ? <SvgComponent /> : <LighSvg />}
      </motion.div>

      <motion.div className='w-full max-w-[1200px] min-w-[600px] absolute -bottom-[70%] -right-[40%]'
        animate={variants.three[number]}
        transition={{ duration: 3 }}
      >
        {theme == "dark" ? <SvgComponent /> : <LighSvg />}
      </motion.div>
    </div>

  )
}

export default AnimationComponent
