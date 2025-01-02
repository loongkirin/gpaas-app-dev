import React from 'react'
import { cn } from '@/lib/utils'

const Container = ({
  ref,
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div 
      ref={ref} 
      className={cn("rounded-md shadow-sm p-2 m-auto w-full border", className)} 
      {...props} 
    />
  )
}

export default Container