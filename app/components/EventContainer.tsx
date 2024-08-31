import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
  
import React from 'react'

import EventCard from './EventCard'

const EventContainer = ({ eventName }) => {
    

  return (
    <div className='container-fluid'>
        <div>
            <h2>{eventName}</h2>
        </div>
        <div>
        

        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                    <div className="p-1">
                    <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                        <EventCard cardImg="rainforestFootballPitch.jpg" cardTitle="Arena at Kovan(11 a-side)" cardPrice="$10.00" cardAvailability="Max players: 30 pax" cardDateTime="Fri 30 Aug | 7:45pm-10:00pm" />
        {/* 
                        <span className="text-4xl font-semibold">{index + 1}</span> */}
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>




        </div>
    </div>
  )
}

export default EventContainer

// EventCard 
// <EventCard cardImg="rainforestFootballPitch.jpg" cardTitle="Arena at Kovan(11 a-side)" cardPrice="$10.00" cardAvailability="Max players: 30 pax" cardDateTime="Fri 30 Aug | 7:45pm-10:00pm" />



