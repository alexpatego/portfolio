import React, {
  Suspense,
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Desk = React.memo(({ isMobile, desktop }) => {
  const deskRef = useRef();

  const handleFrame = useCallback(() => {
    if (deskRef.current) {
      deskRef.current.position.set(
        isMobile ? 0 : -0.25,
        isMobile ? -4.5 : -4.25,
        0
      );
      deskRef.current.scale.set(
        isMobile ? 0.25 : 0.3,
        isMobile ? 0.25 : 0.3,
        isMobile ? 0.25 : 0.3
      );
    }
  }, [isMobile]);

  useFrame(handleFrame);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      {!isMobile && (
        <spotLight
          position={[-10, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={512}
        />
      )}
      <pointLight intensity={1} />
      <primitive
        object={desktop}
        ref={deskRef}
        rotation={[0, -0.1, -0.1]}
        castShadow
      />
    </mesh>
  );
});

const DeskCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const desktop = useGLTF("./desk/desktop.gltf").scene;

  useMemo(() => desktop, [desktop]);

  useEffect(() => {
    window
      .matchMedia("(max-width: 500px)")
      .addEventListener("change", (event) => {
        setIsMobile(event.matches);
      });
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Desk isMobile={isMobile} desktop={desktop} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default DeskCanvas;
