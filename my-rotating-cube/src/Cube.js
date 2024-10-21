import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { Plane } from '@react-three/drei'; // Import Plane from @react-three/drei
import { TextureLoader, DoubleSide } from 'three'; // Import TextureLoader from three


function Cube() {
  const planeRef = useRef();

  const texture = new TextureLoader().load('/ps2_logo.webp'); // Load your image

  useFrame(() => {
    planeRef.current.rotation.y += 0.02; // Rotate the plane around the Y-axis
  });

    return (
      <Plane ref={planeRef} args={[2.5, 3] } position = {[-3,0,0]}>
        <meshStandardMaterial 
        attach="material" 
        map={texture} side={DoubleSide}
        transparent={true}
         />
      </Plane>
    );

}

export default Cube;