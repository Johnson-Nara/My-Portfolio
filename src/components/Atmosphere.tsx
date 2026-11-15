
import { Sparkles } from "@react-three/drei";

export default function Atmosphere() {
  return (
    <>
      {/* Main glowing portal */}
      <mesh position={[0, 0, -1.5]}>
        <torusGeometry args={[1.65, 0.025, 16, 120]} />
        <meshBasicMaterial
          color="#a78bfa"
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Outer portal */}
      <mesh position={[0, 0, -1.7]} scale={1.2}>
        <torusGeometry args={[1.65, 0.012, 16, 120]} />
        <meshBasicMaterial
          color="#d8b4fe"
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Floating particles */}
      <Sparkles
        count={100}
        scale={[5, 5, 2]}
        size={3}
        speed={0.3}
        opacity={0.6}
        color="#a78bfa"
      />

      <Sparkles
        count={45}
        scale={[4, 4, 2]}
        size={2.5}
        speed={0.25}
        opacity={0.5}
        color="#a78bfa"
        />
    </>
  );
}
