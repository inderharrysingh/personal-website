"use client"
import { useTheme } from "next-themes"
import * as React from "react"
import { Sun, Moon } from "lucide-react"


export default function StickyTheme() {

    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)


    React.useEffect(() => {
        setMounted(true)
    }, [])


    if (!mounted) {
        return null
    }

    return (
        <div className="fixed border-2 hover:scale-110 border-black p-2 dark:border-white rounded-full mr-5 mb-5 bottom-0 right-0">
            {
                theme == "dark" ?
                    <Sun size={30}  onClick={() => setTheme("light")} />
                    :
                    <Moon size={30} onClick={() => setTheme("dark")} />

            }
        </div>
    )
}
