'use client'
import { motion } from "framer-motion"
import React from 'react'
import SkillButton from './SkillButton'

const customAnimation = {
    initial: {
        y: -100,
        opacity: 0
    },
    animate: (index: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.1 * index,
        }
    })
    ,
}

export default function Skill() {



    const skills_data = ["Kubernetes", "Docker", "NextJS", "React", "Python", "Java", "C", "C++", "Data Science", "MongoDB", "Redis", "AWS", "TypeScript", "Java Script",
        "Jenkins", "GitLab CI/CD", "Github Actions", "Solidity", "Hardhat", "AI/ML"]

    return (
        <div className="w-full py-52 px-2 flex justify-center">
            <motion.div className='w-full lg:w-3/5 flex justify-center flex-wrap'>
                {skills_data.map((skill, index) => <motion.div custom={index} variants={customAnimation} initial="initial" whileInView="animate" viewport={{ once: true }} key={index}><SkillButton skill={skill} /></motion.div>)
                }
            </motion.div>
        </div>
    )
}
