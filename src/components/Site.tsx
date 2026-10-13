"use client";
import { useState } from "react";
import Intro from "./Intro";
import Nav from "./Nav";
import Hero from "./Hero";
import { PlayerProvider } from "./Player";
import { About, Booking, Experience, Footer, Releases, Tour, Videos } from "./Sections";

export default function Site() {
  const [entered, setEntered] = useState(false);
  return (
    <PlayerProvider>
      <Intro open={!entered} onEnter={() => setEntered(true)} />
      <Nav />
      <main>
        <Hero play={entered} />
        <Releases />
        <Experience />
        <About />
        <Videos />
        <Tour />
        <Booking />
      </main>
      <Footer />
    </PlayerProvider>
  );
}
