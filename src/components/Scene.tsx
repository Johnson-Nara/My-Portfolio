
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import {
  OrbitControls,
  Environment,
  ContactShadows,
} from "@react-three/drei";

import GhostModel from "./GhostModel";
import Atmosphere from "./Atmosphere";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{
        alpha: true,
        antialias: true,
      }}
      onCreated={({ gl, scene }) => {
        gl.setClearColor(0x000000, 0);
        scene.background = null;
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={1.8} />

      <directionalLight
        position={[3, 5, 5]}
        intensity={2}
        castShadow
      />

      <spotLight
        position={[-3, 4, 3]}
        intensity={0.8}
      />

      <Suspense fallback={null}>
        <Atmosphere />
        <GhostModel />

        <Environment preset="studio" />

        <ContactShadows
          position={[0, -1.4, 0]}
          opacity={0.25}
          scale={4}
          blur={2.5}
        />
      </Suspense>

      {/* Disable mouse wheel zoom and camera rotation */}
      <OrbitControls
        makeDefault
        target={[0, 0, 0]}
        // enablePan={false}
        // enableRotate={false}
        enableZoom={false}
      />
    </Canvas>
  );
}
