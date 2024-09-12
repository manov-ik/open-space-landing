import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./sections/HeroSection/HeroSection";
import SectionTwo from "./sections/SectionTwo/SectionTwo";
import Marquee from "./components/Marquee/Marquee";
import FabSocial from "./components/FabSocial/FabSocial";
import Team from "./sections/Team/Team";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SectionTwo />
      <div className="h-max relative">
        <Marquee variant={1} />
        <Marquee variant={2} />
      </div>
      <Team />
      <FabSocial />
    </>
  );
}

export default App;
