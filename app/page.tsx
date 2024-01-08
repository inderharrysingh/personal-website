import Me from "@/app/_components/Me"
import { Fragment } from "react"
import BackColor from "./_components/BackColor"
import Heading from "./_components/Heading"
import About from "./_components/Sections/About"
import Projects from "./_components/Sections/Projects"
import StickyTheme from "./_components/StickyTheme"

export default async function Home() {
  
  return( 
         <Fragment>
             <div>
                
               <Me />
               <BackColor />
               <About />
               <Projects />
               <StickyTheme /> 
             </div>
        </Fragment>
  ) 
  

}