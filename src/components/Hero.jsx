import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import Desk from "./canvas/Desk";

function Hero() {
  return (
    <section className="hero">
      <Desk />
    </section>
  );
}

export default Hero;
