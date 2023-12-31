"use client"

import { ThemeProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

function NextTheme({ children, ...pageProps } : ThemeProviderProps) {
  return (
    <ThemeProvider {...pageProps}>
     {children}
    </ThemeProvider>
  )
}

export default NextTheme