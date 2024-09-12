import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./sections/HeroSection/HeroSection";
import SectionTwo from "./sections/SectionTwo/SectionTwo";
import Marquee from "./components/Marquee/Marquee";
import FabSocial from "./components/FabSocial/FabSocial";
import Team from "./sections/Team/Team";
import P1Slide from "./components/slide/p1_slide";
import P2Slide from "./components/slide/p2_slide";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SectionTwo />
      <P1Slide />
      <P2Slide />
      <Team />
      <FabSocial />
    </>
  );
}

export default App;
