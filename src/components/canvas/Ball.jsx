import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, isMobile }) => {
  const decal = useTexture(imgUrl);

  const Material = isMobile ? "basic" : "standard";

  return (
    <Float speed={1.25} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        {Material === "basic" ? (
          <meshBasicMaterial
            color="#EEEEEE"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
        ) : (
          <meshStandardMaterial
            color="#EEEEEE"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
        )}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window
      .matchMedia("(max-width: 600px)")
      .addEventListener("change", (event) => {
        setIsMobile(event.matches);
      });
  }, []);

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {isMobile ? (
          <Ball imgUrl={icon} isMobile={isMobile} />
        ) : (
          <>
            <OrbitControls
              enableZoom={false}
              minPolarAngle={Math.PI / 2 - 0.1} // set minimum polar angle
              maxPolarAngle={Math.PI / 2 + 0.1} // set maximum polar angle
            />
            <Ball imgUrl={icon} isMobile={isMobile} />
          </>
        )}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
