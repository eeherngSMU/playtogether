import Image from "next/image";
import Navbar from "./components/Navbar";
import EventCarousel from "./components/EventContainer";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <EventCarousel eventName="Play Football"/>
    </main>
  );
}
