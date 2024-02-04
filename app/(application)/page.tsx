import Me from "@/app/_components/Me"
import { Fragment } from "react"
// import BackColor from "@/app/_components/BackColor"
import About from "@/app/_components/Sections/About"
import Projects from "@/app/_components/Sections/Projects"
import StickyTheme from "@/app/_components/StickyTheme"
import BackgroudAnimate from "@/app/_components/BackgroudAnimation"
import Skill from "@/app/_components/Skills"
import Experience from "@/app/_components/Experience"
export default async function Home() {

  return (
    <div className="flex flex-col w-full h-full">
      <Me />
      <About />
      <Projects />
      <StickyTheme />
      < Skill />
      <Experience />
    </div>
  )


}