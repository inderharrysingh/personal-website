import Me from "@/app/_components/Me"
import { Fragment } from "react"
import BackColor from "./_components/BackColor"
import About from "./_components/Sections/About"
import Projects from "./_components/Sections/Projects"
import StickyTheme from "./_components/StickyTheme"
import BackgroudAnimate from "./_components/BackgroudAnimation"
import Skill from "./_components/Skills"
import Experience from "./_components/Experience"
export default async function Home() {

  return (
    <Fragment>
      <div>
        <Me />
        <BackColor />
        <About />
        <Projects />
        <StickyTheme />
        < Skill />
        <Experience />
      </div>
    </Fragment>
  )


}