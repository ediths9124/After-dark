"use client";
import { useState } from "react";
import Intro from "./Intro";
import Nav from "./Nav";
import Hero from "./Hero";
import Player from "./Player";
import { Reveal } from "./Reveal";
import { About, Experience, Footer, Socials, Visuals } from "./Sections";

export default function Site() {
  const [entered, setEntered] = useState(false);
  return (
    <>
      <Intro open={!entered} onEnter={() => setEntered(true)} />
      <Nav />
      <main>
        <Hero play={entered} />
        <section id="music" className="mx-auto w-full max-w-4xl px-5 py-24 md:px-12 md:py-36">
          <Reveal className="mb-10">
            <p className="label">01 — Featured</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">Featured Music</h2>
            <p className="mt-3 text-mute">Press play. Nothing starts on its own.</p>
          </Reveal>
          <Reveal delay={0.1}><Player /></Reveal>
        </section>
        <Experience />
        <About />
        <Visuals />
        <Socials />
      </main>
      <Footer />
    </>
  );
}
