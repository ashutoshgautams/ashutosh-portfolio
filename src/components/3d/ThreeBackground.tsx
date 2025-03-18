'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

// Simple gradient background with subtle animation
function GradientBackground() {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime() * 0.15;
    if (mesh.current.material instanceof THREE.ShaderMaterial) {
      mesh.current.material.uniforms.time.value = t;
    }
  });
  
  return (
    <mesh ref={mesh} position={[0, 0, -5]} scale={[15, 15, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        uniforms={{
          time: { value: 0 },
          colorA: { value: new THREE.Color('#0c0c14') },
          colorB: { value: new THREE.Color('#1a1a2e') }
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float time;
          uniform vec3 colorA;
          uniform vec3 colorB;
          varying vec2 vUv;
          
          void main() {
            vec2 p = vUv * 2.0 - 1.0;
            float dist = length(p);
            float sinTime = sin(time) * 0.1;
            float cosTime = cos(time * 0.5) * 0.1;
            
            vec3 color = mix(colorA, colorB, vUv.x + vUv.y + sinTime + cosTime);
            gl_FragColor = vec4(color, 1.0);
          }
        `}
      />
    </mesh>
  );
}

// Simple floating dots
function FloatingDots({ count = 50 }) {
  const particles = useRef<THREE.Points>(null);
  
  useFrame(({ clock }) => {
    if (!particles.current) return;
    particles.current.rotation.y = clock.getElapsedTime() * 0.05;
  });
  
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 10;
    positions[i3 + 1] = (Math.random() - 0.5) * 10;
    positions[i3 + 2] = (Math.random() - 0.5) * 10;
    
    colors[i3] = 0.3 + Math.random() * 0.3;
    colors[i3 + 1] = 0.3 + Math.random() * 0.3;
    colors[i3 + 2] = 0.5 + Math.random() * 0.5;
  }
  
  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position"
          count={count}
          array={positions}
            itemSize={3} args={[new Float32Array(0), 3]}        />
        <bufferAttribute 
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3} args={[new Float32Array(0), 3]}        />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.6} />
    </points>
  );
}

// Main scene component
function Scene() {
  return (
    <>
      <GradientBackground />
      <FloatingDots />
    </>
  );
}

// Main ThreeBackground component - now less intrusive
export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 opacity-60">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
