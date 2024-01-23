import Image from "next/image"

import me from "@/public/me.jpeg"
import { Linkedin, Github, Instagram, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function Me() {
    return (
        <>
            <div className="w-full p-12 h-full flex text-center flex-col justify-center  items-center ">
                <h1 className="w-full lg:w-4/5 text-[30px] md:text-[35px] lg:text-[40px]   ">Hi I am <span className="text-pink-600 font-bold ">Inderjot Singh</span> <br /> Full-Stack Developer with Experience in Cloud and Devops.
                    I love <span className="text-purple-400 font-bold">Next JS</span>   and <span className="text-purple-400 font-bold " >Kubernetes</span>     </h1>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center mb-32 gap-10">
                <Image src={me} width={150} height={150} quality={95} alt="god's image" className="rounded-full border-4 border-black dark:border-white " />
                <div className="flex w-full justify-center gap-10" >
                    <Linkedin height={40} width={40} className="hover:scale-110 transition-all" />
                    <Github height={40} width={40} className="hover:scale-110 transition-all" />
                    <Instagram height={40} width={40} className="hover:scale-110 transition-all" />
                </div>
                <div>
                    <Link href={"/"} className="text-2xl bg-purple-400 p-3 px-8 rounded-full
                    
                    transition-all hover:bg-purple-500 resume_shadow">Resume</Link>
                </div>
            </div>


        </>

    )
}


