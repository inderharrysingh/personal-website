

import React from 'react'
import Heading from '../Heading'
import { SmallProjectCard, ProjectInvertface } from '../SmallProjectCard'
import { LargeProjectCard } from '../LargeProjectCard'


const data: ProjectInvertface[] = [
  {
    "heading": "Panda",
    "description": "flajsdfl ;sdjf la;sdjdfl;as djflasdjf lka;sdjf las;djfk;las jfklsad; jfkals kdfj",
    "tags": ["Next", "React", "TypeScript"]
  },
  {
    "heading": "Panda",
    "description": "flajsdfl ;sdjf la;sdjdfl;as djflasdjf lka;sdjf las;djfk;las jfklsad; jfkals kdfj",
    "tags": ["Next", "React", "TypeScript"]
  }
]


export default function Projects() {
  return (
    <div className='min-w-full h-full mt-10'>
      <Heading title='Projects' />
      <div className='flex space-y-20 flex-col justify-center items-center'>
        {data.map((Card, index) =>

          <LargeProjectCard className='' key={index} dummy={Card} />

        )}
      </div>
    </div>
  )
}
