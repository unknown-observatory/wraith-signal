import { useRef } from 'react';
import { Group } from 'three';
import { ThirdPersonFollowCamera } from '../game/camera/ThirdPersonFollowCamera';
import { PlayerController } from '../game/player/PlayerController';
import { PlaceholderCache } from './PlaceholderCache';

export function PlayerMovementScene() {
  const playerRef = useRef<Group>(null);

  return (
    <>
      <color attach="background" args={['#080b12']} />
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 8, 4]} intensity={1.4} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[24, 24]} />
        <meshStandardMaterial color="#1a2332" />
      </mesh>

      <gridHelper args={[24, 24, '#31415c', '#182234']} position={[0, 0.01, 0]} />
      <PlayerController playerRef={playerRef} />
      <PlaceholderCache playerRef={playerRef} />
      <ThirdPersonFollowCamera targetRef={playerRef} />
    </>
  );
}
