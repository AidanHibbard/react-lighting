import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { Canvas } from "react-three-fiber";

// Main Light
function Light({ intensity, color }) {
  return (
    <rectAreaLight
      width={5}
      height={5}
      color={color}
      intensity={intensity}
      position={[0, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={3}
      castShadow
      />
  );
}
// Geometry
function Plane() {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  )
}
function BackDrop() {
  return (
    <mesh receiveShadow position={[0, -1, -5]}>
      <planeBufferGeometry attatch="geometry" args={[500, 500]} />
      <meshStandardMaterial attatch="material" color="white" />
    </mesh>
  )
}
function Sphere() {
  return (
    <mesh 
      visible 
      userData={{ name: 'sphere' }} 
      position={[0, 0, 0]} 
      castShadow
    >      
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />      
      <meshStandardMaterial 
        attach="material" 
        color="purple" 
        transparent 
        roughness={0.1} 
        metalness={0.1} 
        />    
      </mesh>
  )
}

function App() {
  return (
    <Canvas>
      <Light brightness={5} color={"blue"} />
      <Sphere />
      <BackDrop />
      <Plane />
    </Canvas>
  );
}
const root = document.getElementById('root');
ReactDOM.render(<App />, root);