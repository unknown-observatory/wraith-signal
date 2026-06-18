import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { type RefObject, useEffect, useRef, useState } from 'react';
import { Group } from 'three';

const INTERACTION_DISTANCE = 2;
const INTERACTION_DISTANCE_SQUARED = INTERACTION_DISTANCE * INTERACTION_DISTANCE;

type PlaceholderInteractableProps = {
  playerRef: RefObject<Group | null>;
};

export function PlaceholderInteractable({ playerRef }: PlaceholderInteractableProps) {
  const interactableRef = useRef<Group>(null);
  const isPlayerNearbyRef = useRef(false);
  const [isPlayerNearby, setIsPlayerNearby] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code !== 'KeyE' || event.repeat || !isPlayerNearbyRef.current) {
        return;
      }

      setHasInteracted(true);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useFrame(() => {
    const player = playerRef.current;
    const interactable = interactableRef.current;

    if (!player || !interactable) {
      return;
    }

    const isNearby =
      player.position.distanceToSquared(interactable.position) <= INTERACTION_DISTANCE_SQUARED;

    if (isNearby === isPlayerNearbyRef.current) {
      return;
    }

    isPlayerNearbyRef.current = isNearby;
    setIsPlayerNearby(isNearby);
  });

  return (
    <group ref={interactableRef} position={[2.5, 0.45, -2]}>
      <mesh>
        <boxGeometry args={[0.9, 0.9, 0.9]} />
        <meshStandardMaterial color={hasInteracted ? '#a7f3d0' : '#f8d66d'} />
      </mesh>

      {isPlayerNearby && (
        <Html center distanceFactor={8} position={[0, 1.1, 0]}>
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
            {hasInteracted ? 'Signal acknowledged' : 'Press E to inspect'}
          </div>
        </Html>
      )}
    </group>
  );
}
