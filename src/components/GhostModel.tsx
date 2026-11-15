
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function GhostModel() {
  const modelPath = `${import.meta.env.BASE_URL}models/ghost.glb`;
  const { scene } = useGLTF(modelPath);

  const ghostRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ghostRef.current) return;

    const time = state.clock.elapsedTime;

    // Gentle floating
    ghostRef.current.position.y =
      Math.sin(time * 1.2) * 0.08;

    // Mouse tracking
    const targetY = state.pointer.x * 0.40;
    const targetX = -state.pointer.y * 0.20;
    
    // Faster and smoother mouse response
    const responsiveness = 0.12;

    ghostRef.current.rotation.y = THREE.MathUtils.lerp(
      ghostRef.current.rotation.y,
      targetY,
      responsiveness
    );

    ghostRef.current.rotation.x = THREE.MathUtils.lerp(
      ghostRef.current.rotation.x,
      targetX,
      responsiveness
    );
  });

  return (
    <group ref={ghostRef} scale={2.3}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/ghost.glb`);
