import Image from "next/image";
import EventContainer from "./components/EventContainer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <EventContainer eventName="Play Football"/>
    </main>
  );
}
