import { useFrame, useThree } from '@react-three/fiber';
import { type RefObject, useEffect, useRef } from 'react';
import { Group, Vector3 } from 'three';

const CAMERA_OFFSET = new Vector3(0, 4, 7);
const LOOK_AT_OFFSET = new Vector3(0, 0.6, 0);
const FOLLOW_SMOOTHING = 8;

type ThirdPersonFollowCameraProps = {
  targetRef: RefObject<Group | null>;
};

export function ThirdPersonFollowCamera({ targetRef }: ThirdPersonFollowCameraProps) {
  const camera = useThree((state) => state.camera);
  const desiredPositionRef = useRef(new Vector3());
  const lookAtTargetRef = useRef(new Vector3());

  useEffect(() => {
    camera.position.copy(CAMERA_OFFSET);
    camera.lookAt(LOOK_AT_OFFSET);
  }, [camera]);

  useFrame((_, delta) => {
    const target = targetRef.current;

    if (!target) {
      return;
    }

    const desiredPosition = desiredPositionRef.current.copy(target.position).add(CAMERA_OFFSET);
    const lookAtTarget = lookAtTargetRef.current.copy(target.position).add(LOOK_AT_OFFSET);
    const smoothing = 1 - Math.exp(-FOLLOW_SMOOTHING * delta);

    camera.position.lerp(desiredPosition, smoothing);
    camera.lookAt(lookAtTarget);
  });

  return null;
}
