"use client"
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faBowlingBall } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
  const handleClick = (e) => {
    // e.preventDefault()
    console.log(e.target.style)
    e.target.style.color = "#FFD43B"
  }


  return (
    <div className='flex flex-col'>
      <nav className='border-b flex items-center justify-between px-8'>
              <a href="/"><img src="playtogether.jpg" className='w-40 h-20 object-cover'/></a>
              <Input type="text" placeholder='Find your favourite sport' className='max-w-sm' />
              
              <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <hr/>
              
        </nav>
        <div className=' flex flex-row m-5 gap-5 ml-20' >
        
          <a href='/' onClick={handleClick}>
            <FontAwesomeIcon icon={faFutbol} className='fa-2xl' />
          </a>
          <a href='/'>
            <FontAwesomeIcon icon={faBowlingBall} className='fa-2xl'/>
          </a>
          
          </div>
        <hr/>
    </div>
   
  )
}

export default Navbar