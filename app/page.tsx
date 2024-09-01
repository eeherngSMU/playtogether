import Image from "next/image";
import Navbar from "./components/Navbar";
import EventCarousel from "./components/EventCarousel";
import Hero from "./components/Hero";


export default function Home() {

  let tmpEventFBDB = [
    {
        cardImg: "rainforestFootballPitch.jpg",
        cardTitle: "Arena at Kovan(11 a-side)",
        cardPrice: "S$10.00",
        cardAvailability: "Max players: 30 pax",
        cardDateTime: "Thu 29 Aug | 8:00pm-10:00pm",
        cardBadge: "Selling Fast"
    },
    {
        cardImg: "pasirRisFootballPitch.jpg",
        cardTitle: "Pasir Ris Primary(11 a-side)",
        cardPrice: "S$12.00",
        cardAvailability: "Max players: 30 pax",
        cardDateTime: "Fri 30 Aug | 6:00pm-8:00pm",
        cardBadge: "Selling Fast"
    },
    {
        cardImg: "rosythPrimaryFootballPitch.jpg",
        cardTitle: "Rosyth Primary(11 a-side)",
        cardPrice: "S$12.00",
        cardAvailability: "Max players: 30 pax",
        cardDateTime: "Fri 30 Aug | 7:45pm-10:00pm",
        cardBadge: "Selling Fast"
    },
    {
        cardImg: "stwilfriedFootballPitch.jpg",
        cardTitle: "St Wilfried Secondary(11 a-side)",
        cardPrice: "S$10.00",
        cardAvailability: "Max players: 30 pax",
        cardDateTime: "Sat 31 Aug | 5:45pm-07:45pm",
        cardBadge: "Selling Fast"
    },
    {
        cardImg: "evergreenPriFootballPitch.png",
        cardTitle: "Evergreen Primary(11 a-side)",
        cardPrice: "S$12.00",
        cardAvailability: "Max players: 30 pax",
        cardDateTime: "Sat 31 Aug | 7:45pm-10:00pm",
        cardBadge: "Selling Fast"
    }
]

let tmpEventNTDB = [
  {
      cardImg: "spike.jpg",
      cardTitle: "Palawan Beach",
      cardPrice: "S$10.00",
      cardAvailability: "Max players: 30 pax",
      cardDateTime: "Thu 29 Aug | 8:00pm-10:00pm",
      cardBadge: "Selling Fast"
  },
  {
      cardImg: "spike2.jpg",
      cardTitle: "East Coast Park",
      cardPrice: "S$12.00",
      cardAvailability: "Max players: 30 pax",
      cardDateTime: "Fri 30 Aug | 6:00pm-8:00pm",
      cardBadge: "Selling Fast"
  },
  {
      cardImg: "spike.jpg",
      cardTitle: "Palawan Beach",
      cardPrice: "S$12.00",
      cardAvailability: "Max players: 6 pax",
      cardDateTime: "Fri 30 Aug | 7:45pm-10:00pm",
      cardBadge: "Selling Fast"
  },
]

let tmpEventPBDB = [
  {
      cardImg: "pickle1.jpg",
      cardTitle: "OCBC Arena",
      cardPrice: "S$10.00",
      cardAvailability: "Max players: 30 pax",
      cardDateTime: "Thu 29 Aug | 8:00pm-10:00pm",
      cardBadge: "Selling Fast"
  },
  {
      cardImg: "pickle2.jpeg",
      cardTitle: "Sengkang Secondary Hall",
      cardPrice: "S$12.00",
      cardAvailability: "Max players: 30 pax",
      cardDateTime: "Fri 30 Aug | 6:00pm-8:00pm",
      cardBadge: "Selling Fast"
  },
  {
      cardImg: "pickle1.jpg",
      cardTitle: "OCBC Arena",
      cardPrice: "S$12.00",
      cardAvailability: "Max players: 6 pax",
      cardDateTime: "Fri 30 Aug | 7:45pm-10:00pm",
      cardBadge: "Selling Fast"
  },
]

let tmpEventFLBDB = [
  {
      cardImg: "floorball1.webp",
      cardTitle: "OCBC Arena",
      cardPrice: "S$10.00",
      cardAvailability: "Max players: 30 pax",
      cardDateTime: "Thu 29 Aug | 8:00pm-10:00pm",
      cardBadge: "Selling Fast"
  },
  {
      cardImg: "floorball2.jpeg",
      cardTitle: "Sengkang Secondary Hall",
      cardPrice: "S$12.00",
      cardAvailability: "Max players: 30 pax",
      cardDateTime: "Fri 30 Aug | 6:00pm-8:00pm",
      cardBadge: "Selling Fast"
  },
  {
      cardImg: "floorball1.webp",
      cardTitle: "OCBC Arena",
      cardPrice: "S$12.00",
      cardAvailability: "Max players: 6 pax",
      cardDateTime: "Fri 30 Aug | 7:45pm-10:00pm",
      cardBadge: "Selling Fast"
  },
]

  return (
    <main>
      <Navbar/>
      <div className="flex flex-col ">
        <div className="min-h-fit">
          <Hero/>
        </div>
        <div className="mt-5 gap-6 flex flex-col">
          <EventCarousel eventName="Play Football" tmpEventDB={tmpEventFBDB}/>
          <EventCarousel eventName="Niche & Trending" tmpEventDB={tmpEventNTDB}/>
          <EventCarousel eventName="Play Pickleball" tmpEventDB={tmpEventPBDB}/>
          <EventCarousel eventName="Most Popular Games" tmpEventDB={tmpEventFBDB}/>
          <EventCarousel eventName="Play Floorball" tmpEventDB={tmpEventFLBDB}/>
        </div>
      </div>
   
    </main>
  );
}
