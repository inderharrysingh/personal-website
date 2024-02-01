"use client"

import { motion, useTransform, useScroll } from "framer-motion"
import Image from 'next/image'
import React from 'react'
import { useRef } from 'react'


import imagePath from "@/public/image1.jpg"
import { Eye, Github } from "lucide-react"

export interface ProjectInvertface {
    heading: string,
    description: string
    tags: string[],
}

export function LargeProjectCard({ dummy, className }: { dummy: ProjectInvertface, className: string }) {


    const cardRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["0 1", "1.33 1"]
    })

    const cardScale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const cardOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 1])







    return (

        <motion.div
            ref={cardRef}
            initial="hidden"
            style={{
                scale: cardScale,
                opacity: cardOpacity
            }}
            transition={{ duration: 2 }}
            id='card' className={`flex justify-center rounded-md h-full  w-full px-12 ${className}`}>

            <div className=" w-[40%] h-80 grid grid-cols-4 bg-emerald-50 rounded-md">
                <div className=" bg-slate-300 rounded-md">
                    fajslkdfj lk
                </div>
                <div className="col-span-3 rounded-r-md h-full w-full overflow-hidden bg-yellow-100 relative">
                    <Image src={imagePath} unoptimized width={1} height={1} className="w-full h-full object-cover absolute" alt="bithch" />
                </div>
            </div>

        </motion.div>
    )
}

