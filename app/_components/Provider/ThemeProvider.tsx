"use client"

import { ThemeProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

function NextTheme({ children } : ThemeProviderProps) {
  return (
    <ThemeProvider attribute="class">
     {children}
    </ThemeProvider>
  )
}

export default NextTheme