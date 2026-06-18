export function PlaceholderWhiteStag() {
  return (
    <group position={[-3, 0.6, -3.5]} rotation={[0, Math.PI / 5, 0]}>
      <mesh>
        <boxGeometry args={[1.25, 0.75, 0.45]} />
        <meshStandardMaterial color="#f3f7ff" emissive="#9cc9ff" emissiveIntensity={0.12} />
      </mesh>

      <mesh position={[0.75, 0.25, 0]}>
        <boxGeometry args={[0.45, 0.45, 0.35]} />
        <meshStandardMaterial color="#ffffff" emissive="#9cc9ff" emissiveIntensity={0.18} />
      </mesh>

      <mesh position={[-0.45, -0.55, -0.15]}>
        <boxGeometry args={[0.16, 0.75, 0.16]} />
        <meshStandardMaterial color="#edf4ff" />
      </mesh>

      <mesh position={[-0.45, -0.55, 0.15]}>
        <boxGeometry args={[0.16, 0.75, 0.16]} />
        <meshStandardMaterial color="#edf4ff" />
      </mesh>

      <mesh position={[0.45, -0.55, -0.15]}>
        <boxGeometry args={[0.16, 0.75, 0.16]} />
        <meshStandardMaterial color="#edf4ff" />
      </mesh>

      <mesh position={[0.45, -0.55, 0.15]}>
        <boxGeometry args={[0.16, 0.75, 0.16]} />
        <meshStandardMaterial color="#edf4ff" />
      </mesh>

      <mesh position={[0.9, 0.72, -0.12]} rotation={[0, 0, 0.4]}>
        <boxGeometry args={[0.08, 0.55, 0.08]} />
        <meshStandardMaterial color="#d8f3ff" emissive="#9cc9ff" emissiveIntensity={0.2} />
      </mesh>

      <mesh position={[0.9, 0.72, 0.12]} rotation={[0, 0, 0.4]}>
        <boxGeometry args={[0.08, 0.55, 0.08]} />
        <meshStandardMaterial color="#d8f3ff" emissive="#9cc9ff" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}
