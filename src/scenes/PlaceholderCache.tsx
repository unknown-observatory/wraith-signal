import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { type RefObject, useEffect, useRef, useState } from 'react';
import { Group } from 'three';

const CACHE_INTERACTION_DISTANCE = 2;
const CACHE_INTERACTION_DISTANCE_SQUARED =
  CACHE_INTERACTION_DISTANCE * CACHE_INTERACTION_DISTANCE;

type PlaceholderCacheProps = {
  playerRef: RefObject<Group | null>;
};

export function PlaceholderCache({ playerRef }: PlaceholderCacheProps) {
  const cacheRef = useRef<Group>(null);
  const isPlayerNearbyRef = useRef(false);
  const [isPlayerNearby, setIsPlayerNearby] = useState(false);
  const [isFound, setIsFound] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code !== 'KeyE' || event.repeat || !isPlayerNearbyRef.current) {
        return;
      }

      setIsFound(true);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useFrame(() => {
    const player = playerRef.current;
    const cache = cacheRef.current;

    if (!player || !cache) {
      return;
    }

    const isNearby = player.position.distanceToSquared(cache.position) <= CACHE_INTERACTION_DISTANCE_SQUARED;

    if (isNearby === isPlayerNearbyRef.current) {
      return;
    }

    isPlayerNearbyRef.current = isNearby;
    setIsPlayerNearby(isNearby);
  });

  return (
    <group ref={cacheRef} position={[2.5, 0.35, -2]}>
      <mesh>
        <boxGeometry args={[0.9, 0.7, 0.9]} />
        <meshStandardMaterial color={isFound ? '#a7f3d0' : '#f8d66d'} />
      </mesh>

      {isPlayerNearby && (
        <Html center distanceFactor={8} position={[0, 1, 0]}>
          <div
            style={{
              background: 'rgba(6, 7, 10, 0.82)',
              border: '1px solid rgba(216, 243, 255, 0.45)',
              borderRadius: '6px',
              color: '#d8f3ff',
              fontFamily: 'system-ui, sans-serif',
              fontSize: '14px',
              padding: '6px 10px',
              whiteSpace: 'nowrap',
            }}
          >
            {isFound ? 'Cache found' : 'Press E to discover cache'}
          </div>
        </Html>
      )}
    </group>
  );
}
