import Me from "@/app/_components/Me"
import { Fragment } from "react"
import BackColor from "./_components/BackColor"
import Heading from "./_components/Heading"

export default async function Home() {
  
  return( 
         <Fragment>
             <div>
               <Me />
               <BackColor />
               < Heading title="About Me" /> 
             </div>
        </Fragment>
  ) 
  

}