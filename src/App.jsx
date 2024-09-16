import React from "react";

import FabSocial from "./components/FabSocial/FabSocial";
import P1Slide from "./components/slide/p1_slide";
import P2Slide from "./components/slide/p2_slide";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Motive from "./components/Motive";
import Social from "./components/social";
import GlowingBlob from "./components/GlowingBlob";
import SocialGird from "./components/SocialGird";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Motive />
      <P1Slide />
      <P2Slide />
      <FabSocial />
      <Social />
      <SocialGird />
    </>
  );
}

export default App;
