import { Canvas } from '@react-three/fiber';
import type { CSSProperties } from 'react';
import { PlayerMovementScene } from './scenes/PlayerMovementScene';

const appStyle = {
  background: '#06070a',
  minHeight: '100vh',
} satisfies CSSProperties;

export function App() {
  return (
    <main style={appStyle}>
      <Canvas
        camera={{
          fov: 45,
          position: [0, 8, 8],
          rotation: [-Math.PI / 4, 0, 0],
        }}
      >
        <PlayerMovementScene />
      </Canvas>
    </main>
  );
}
