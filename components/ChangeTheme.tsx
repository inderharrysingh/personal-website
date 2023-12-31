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
 

    function changeTheme(newTheme : string ){
        setTheme(newTheme)
    }

  return (
    <Select >
        <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent >
            <SelectItem value="light" onClick={() => changeTheme("light")}><Sun className="inline" ></Sun> Light</SelectItem>
            <SelectItem value="dark" onClick={() => changeTheme("dark")}><Moon className="inline" /> Dark</SelectItem>
            <SelectItem value="system" onClick={() => changeTheme("system")}><Monitor className="inline" /> System</SelectItem>
        </SelectContent>
</Select>

  )
}


