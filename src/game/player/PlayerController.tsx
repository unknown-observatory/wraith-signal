import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Group, Vector3 } from 'three';

const MOVEMENT_SPEED = 4;

const movementKeys = {
  ArrowDown: 'backward',
  ArrowLeft: 'left',
  ArrowRight: 'right',
  ArrowUp: 'forward',
  KeyA: 'left',
  KeyD: 'right',
  KeyS: 'backward',
  KeyW: 'forward',
} as const;

type MovementDirection = (typeof movementKeys)[keyof typeof movementKeys];

export function PlayerController() {
  const playerRef = useRef<Group>(null);
  const activeDirectionsRef = useRef(new Set<MovementDirection>());
  const movementVectorRef = useRef(new Vector3());

  useEffect(() => {
    const setDirection = (code: string, isActive: boolean) => {
      const direction = movementKeys[code as keyof typeof movementKeys];

      if (!direction) {
        return;
      }

      if (isActive) {
        activeDirectionsRef.current.add(direction);
        return;
      }

      activeDirectionsRef.current.delete(direction);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      setDirection(event.code, true);
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      setDirection(event.code, false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame((_, delta) => {
    const player = playerRef.current;

    if (!player) {
      return;
    }

    const activeDirections = activeDirectionsRef.current;
    const movementVector = movementVectorRef.current.set(0, 0, 0);

    if (activeDirections.has('forward')) {
      movementVector.z -= 1;
    }

    if (activeDirections.has('backward')) {
      movementVector.z += 1;
    }

    if (activeDirections.has('left')) {
      movementVector.x -= 1;
    }

    if (activeDirections.has('right')) {
      movementVector.x += 1;
    }

    if (movementVector.lengthSq() === 0) {
      return;
    }

    movementVector.normalize().multiplyScalar(MOVEMENT_SPEED * delta);
    player.position.add(movementVector);
    player.position.y = 0.5;
  });

  return (
    <group ref={playerRef} position={[0, 0.5, 0]}>
      <mesh castShadow>
        <boxGeometry args={[0.8, 1, 0.8]} />
        <meshStandardMaterial color="#d8f3ff" />
      </mesh>
    </group>
  );
}
