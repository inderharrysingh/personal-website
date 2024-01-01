"use client"
import * as React from "react"

import { Sun, Moon , Monitor } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useTheme } from "next-themes"

export function ChangeTheme() {

    const { themes , setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)
   

    React.useEffect(() => {
      setMounted(true)
    }, [])
  
   
    if (!mounted) {
      return null
    }
  

 

  return (
    <Select >
        <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent >
            <SelectItem value="light" onClick={() => setTheme("light")}><Sun className="inline" ></Sun> Light</SelectItem>
            <SelectItem value="dark" onClick={() => setTheme("dark")}><Moon className="inline" /> Dark</SelectItem>
            <SelectItem value="system" onClick={() => setTheme("system")}><Monitor className="inline" /> System</SelectItem>
        </SelectContent>
</Select>

  )
}


