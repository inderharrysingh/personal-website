import Image from 'next/image'
import React from 'react'
import imagePath from "@/public/image1.jpg"

export interface ProjectInvertface {
    heading: string,
    description: string
    tags: string[],
}

export default function ProjectCard({ dummy }: { dummy: ProjectInvertface }) {
    return (

        <div id='card' className='w-8/12 md:w-2/5 h-80 flex lg:justify-center flex-col lg:flex-row rounded-sm border gap-6  bg-gray-50 hover:bg-gray-100  group dark:hover:bg-gray-900 dark:bg-gray-800/70'>
            <div id="text-container" className="group-odd:lg:order-2  md:group-odd:text-right  md:group-even:text-left sm:text-center  h-1/5 lg:h-full flex flex-col lg:w-1/3   p-4  lg:p-8 gap-6  group-even:lg:pr-0  group-odd:lg:pl-0" >
                <h1 className='text-2xl font-medium'>{dummy.heading}</h1>
            <p className='text-base  leading-relaxed hidden lg:block'>{dummy.description.substring(0, 200) + "...."}</p>
            </div>
            <div id='imageContainer' className='w-full h-4/5 lg:block overflow-hidden p-4 pt-0 sm:p-0 sm:h-full lg:pt-4' >

                <div className='w-full h-full relative   lg:group-even:-right-10 lg:group-odd:-left-10 shadow-lg'>
                    <Image src={imagePath} alt='ProjectImage' className='
                                                               
                                                               object-cover  absolute  rounded-sm 
                                                               lg:transition 
                                                                lg:group-hover:scale-[1.02]
                                                                 lg:group-hover:-translate-x-2
                                                               lg:group-hover:translate-y-2
                                                                lg:group-hover:-rotate-1
                                                       
                                                               lg:group-odd:group-hover:translate-x-2
                                                             lg:group-odd:group-hover:translate-y-2
                                                              lg:group-odd:group-hover:rotate-1
                                                       
                                                               lg:group-even:right-[initial] group-even:-left-40
                                                               ' fill={true} quality={100} />
                </div>
            </div>
        </div>
    )
}



