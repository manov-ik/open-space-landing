import React from "react";
import HeroSection from "./sections/HeroSection/HeroSection";
import SectionTwo from "./sections/SectionTwo/SectionTwo";

import FabSocial from "./components/FabSocial/FabSocial";
import Team from "./sections/Team/Team";
import P1Slide from "./components/slide/p1_slide";
import P2Slide from "./components/slide/p2_slide";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Motive from "./components/Motive";
import Social from "./components/social";
import GlowingBlob from "./components/GlowingBlob";

function App() {
  return (
    <>
      <GlowingBlob />
      <Navbar />
      <Home />
      <Motive />
      <P1Slide />
      <P2Slide />
      <Team />
      <FabSocial />
      <Social />
    </>
  );
}

export default App;
