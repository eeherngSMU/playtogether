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

const EventCard = ({cardImg, cardTitle, cardPrice, cardAvailability, cardDateTime }) => {
  return (
    // <div>
    //     <img src={cardImg} className='card-img-top object-cover img-fluid' style={{height: '200px'}} />
    //     <div className='list-group border-0 '>
    //         <div className='list-group-item border-0 py-2'>
    //             <div className='card-text opacity-50'>{cardDateTime}</div>
    //             <div className='card-text opacity-50'>{cardTitle}</div>
    //         </div>
    //         <div className='list-group-item bg-secondary bg-opacity-10 border-0 py-2'>
    //             <div className='card-text opacity-75'>{cardPrice}</div>
    //             <div className='card-text opacity-75'>{cardAvailability}</div>
    //         </div>
            
            
    //     </div>
        
    // </div>

    <div className='flex flex-col'>
    <CardHeader>
    <img src={cardImg} className='object-cover h-52 w-52' />
      <CardDescription>
        {cardTitle}<br/>
        {cardDateTime}<br/>
        {cardPrice}<br/>
        {cardAvailability}
      
      </CardDescription>
    </CardHeader>
    <Button className='mx-auto'>Book Now</Button>
    </div>
    
  )
}

export default EventCard