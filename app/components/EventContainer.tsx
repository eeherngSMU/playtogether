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

const EventCarousel = ({ eventName }) => {
    let tmpEventDB = [
        {
            cardImg: "rainforestFootballPitch.jpg",
            cardTitle: "Arena at Kovan(11 a-side)",
            cardPrice: "S$10.00",
            cardAvailability: "Max players: 30 pax",
            cardDateTime: "Thu 29 Aug | 8:00pm-10:00pm"
        },
        {
            cardImg: "pasirRisFootballPitch.jpg",
            cardTitle: "Pasir Ris Primary(11 a-side)",
            cardPrice: "S$12.00",
            cardAvailability: "Max players: 30 pax",
            cardDateTime: "Fri 30 Aug | 6:00pm-8:00pm"
        },
        {
            cardImg: "rosythPrimaryFootballPitch.jpg",
            cardTitle: "Rosyth Primary(11 a-side)",
            cardPrice: "S$12.00",
            cardAvailability: "Max players: 30 pax",
            cardDateTime: "Fri 30 Aug | 7:45pm-10:00pm"
        },
        {
            cardImg: "stwilfriedFootballPitch.jpg",
            cardTitle: "St Wilfried Secondary(11 a-side)",
            cardPrice: "S$10.00",
            cardAvailability: "Max players: 30 pax",
            cardDateTime: "Sat 31 Aug | 5:45pm-07:45pm"
        },
        {
            cardImg: "evergreenPriFootballPitch.png",
            cardTitle: "Evergreen Primary(11 a-side)",
            cardPrice: "S$12.00",
            cardAvailability: "Max players: 30 pax",
            cardDateTime: "Sat 31 Aug | 7:45pm-10:00pm"
        }
    ]
    

  return (
    <div className='container max-w-4xl mx-auto flex flex-col gap-1'>
        <div>
            <h2 className="text-4xl">{eventName}</h2>
            <p>Join us to embrace the World Cup fever</p>
        </div>
        <div>
        

        <Carousel className="w-full max-w-4xl">
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
  )
}

export default EventCarousel

// EventCard 
// <EventCard cardImg="rainforestFootballPitch.jpg" cardTitle="Arena at Kovan(11 a-side)" cardPrice="$10.00" cardAvailability="Max players: 30 pax" cardDateTime="Fri 30 Aug | 7:45pm-10:00pm" />



