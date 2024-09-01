"use client"
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

const EventCarousel = ({ eventName, tmpEventDB }) => {

    

  return (
    <div className="px-10 ">
        <div className='container max-w-fit mx-auto flex flex-col gap-1'>
            <div>
                <h2 className="text-4xl font-semibold">{eventName}</h2>
                <p>Join us to embrace the World Cup fever</p>
            </div>
            <div>
            

            <Carousel className="w-full max-w-fit">
                <CarouselContent className="-ml-1">
                    {tmpEventDB.map((tmpEvent) => (
                    <CarouselItem key={tmpEvent.cardTitle} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                            <EventCard 
                                cardImg={tmpEvent.cardImg} 
                                cardTitle={tmpEvent.cardTitle} 
                                cardPrice={tmpEvent.cardPrice} 
                                cardAvailability={tmpEvent.cardAvailability} 
                                cardDateTime={tmpEvent.cardDateTime}
                                cardBadge={tmpEvent.cardBadge}
                            />
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
    </div>
  )
}

export default EventCarousel

// EventCard 
// <EventCard cardImg="rainforestFootballPitch.jpg" cardTitle="Arena at Kovan(11 a-side)" cardPrice="$10.00" cardAvailability="Max players: 30 pax" cardDateTime="Fri 30 Aug | 7:45pm-10:00pm" />



