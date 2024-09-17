import React from "react";
import FabSocial from "./components/FabSocial";
import P1Slide from "./components/slide/p1_slide";
import P2Slide from "./components/slide/p2_slide";
import Navbar from "./components/NavBar";
import HomeC from "./components/HomeC";
import Motive from "./components/Motive";
import GlowingBlob from "./components/GlowingBlob";
import SocialGird from "./components/SocialGird";

function App() {
  return (
    <>
      <Navbar />
      <HomeC />

      <Motive />
      <P1Slide />
      <P2Slide />
      <FabSocial />
      <SocialGird />
    </>
  );
}

export default App;
