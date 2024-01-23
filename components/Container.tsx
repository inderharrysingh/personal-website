import React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 w-full h-full">{children}</div>
  )
}
