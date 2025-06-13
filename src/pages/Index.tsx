import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Spirits from "@/components/Spirits";
import Location from "@/components/Location";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Spirits />
      <Location />
      <Contact />
    </div>
  );
};

export default Index;
