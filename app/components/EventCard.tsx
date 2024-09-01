import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Badge } from "@/components/ui/badge"


const EventCard = ({cardImg, cardTitle, cardPrice, cardAvailability, cardDateTime, cardBadge }) => {
  return (
    <div className='flex flex-col' style={{ height : '450px'}}>
    <CardHeader>
      <div style={{ position: 'relative'}}>
        <Badge style={{ position: 'absolute', top: '10px', right: '10px'}}>{cardBadge}</Badge>
        <img src={cardImg} style={{ width: '350px', height: '280px'}} className='object-cover' />
      </div>
     <CardDescription className='mx-auto text-md'>
        <span className='font-bold'>{cardTitle}</span><br/>
        {cardDateTime}<br/>
        {cardPrice}<br/>
        {cardAvailability}
      
      </CardDescription>
    </CardHeader>
    <Button className='mx-auto mt-auto'>Book Now</Button>
    </div>
    
  )
}

export default EventCard