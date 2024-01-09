import { motion } from 'framer-motion'

export default function SkillButton({ skill }: { skill: string }) {
    return (
        <div className=' p-4 rounded-2xl bg-slate-300/40 dark:bg-slate-50/10 text-lg mt-2 mx-2 '>{skill} </div>
    )
}
