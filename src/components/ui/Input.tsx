import React from 'react'
import { cn } from '@/lib/utils'

const Input = ({
  ref, 
  className, 
  type, 
  ...props 
} : React.ComponentProps<"input">) => {
  return (
    <input
      type={type}
      className={cn(
        "rounded-sm border bg-transparent px-2 py-1 text-base shadow-sm transition-colors",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium", 
        "placeholder:text-muted-foreground ", 
        "focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring", 
        "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
}

export default Input