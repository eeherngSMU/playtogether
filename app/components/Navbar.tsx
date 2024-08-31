import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"



const Navbar = () => {
  return (
    <nav className='border-b flex items-center justify-between px-8'>
        <a href="/"><img src="playtogether.jpg" className='w-40 h-20 object-cover'/></a>
        <Input type="text" placeholder='Find your favourite sport' className='max-w-sm' />
        
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    </nav>
  )
}

export default Navbar