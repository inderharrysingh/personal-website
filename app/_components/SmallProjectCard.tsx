"use client"

import { motion, useTransform, useScroll } from "framer-motion"
import Image from 'next/image'
import React from 'react'
import { useRef } from 'react'


import imagePath from "@/public/image1.jpg"
import { Eye, Github } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ProjectInvertface {
    heading: string,
    description: string
    tags: string[],
}

export function SmallProjectCard({ dummy, className }: { dummy: ProjectInvertface, className: string }) {


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
            id='card' className={cn("flex justify-center  w-full px-12 group ", className)}>

            <div className="w-10/12 h-80 flex flex-col gap-4 text-center items-center relative overflow-hidden rounded-md bg-foreground/10 p-4  ">
                <h2 className="text-2xl ">{dummy.heading}</h2>
                <p className="text-muted-foreground">{dummy.description.slice(0, 100)}...</p>
                <div className="flex justify-center gap-4 ">
                    <div className="flex justify-center items-center transition-all hover:scale-105 bg-foreground/5 hover:bg-foreground/10 h-8 w-8 rounded-full" >
                        <Github />
                    </div>
                    <div className="flex justify-center items-center transition-all hover:scale-105 bg-foreground/5 hover:bg-foreground/10 h-8 w-8 rounded-full" >
                        <Eye />
                    </div>
                </div>
                <div className="absolute transition-all  group-hover:translate-y-[100px] duration-500  top-16 h-full w-11/12 ">
                    <Image src={imagePath} alt="imageproject" width={1} height={1}
                        className="object-cover w-full h-full rounded-t-md" unoptimized />
                </div>
            </div>

        </motion.div>
    )
}

