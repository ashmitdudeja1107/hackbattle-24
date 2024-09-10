"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import Landing from "./components/landing";
import About from "./components/about";
import Tracks from "./components/track";
import Speaker from "./components/speaker";
import Conducted from "./components/conducted";
import FAQ from "./components/Faq";

import Code from "./components/Code"

export default function Home() {
  const [code,setCode]=useState("Hello");
  const [flag,setFlag]=useState(true);
  return (
    <main className="overflow-hidden w-full">
      <Navbar />
      <Landing />
      <About />
      <TeamCode visible={flag} code={code}/>
      <Tracks />
      <Code visible={flag} code={code}/>
    </main>
  );
}
