'use client'
import Skeleton from '@/components/ui/Skeleton'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/Tooltip'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/Popover'

import React, { useState } from 'react'
import { Separator } from '@/components/ui/Separator'

const TestPage = () => {
  return (
    <div>
      <Skeleton className='h-15'/>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild><button>open tooltip</button></TooltipTrigger>
          <TooltipContent side='top' align='start' sideOffset={4} alignOffset={20}> 
            Tooltip Test
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Separator className='bg-gray-600' orientation='horizontal'/>
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </div>
  )
}

export default TestPage