import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Volumetric Light class
class VolumetricLight {
  color: THREE.Color;
  position: THREE.Vector3;
  target: THREE.Vector3;
  intensity: number;
  group: THREE.Group;
  mesh: THREE.Mesh;
  light: THREE.PointLight;

  constructor(color: number, position: THREE.Vector3, target: THREE.Vector3, intensity = 1) {
    this.color = new THREE.Color(color);
    this.position = position;
    this.target = target;
    this.intensity = intensity;
    this.group = new THREE.Group();
    
    // Create tapered cone for light beam
    const geometry = new THREE.ConeGeometry(0.5, 10, 32, 1, true);
    
    // Custom shader material for volumetric effect
    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: this.color },
        intensity: { value: intensity },
        time: { value: 0 }
      },
      vertexShader: `
        varying vec3 vPosition;
        varying vec3 vNormal;
        void main() {
          vPosition = position;
          vNormal = normal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float intensity;
        uniform float time;
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        void main() {
          float dist = length(vPosition);
          float fadeOut = 1.0 - (dist / 10.0);
          float pulse = sin(time * 2.0) * 0.2 + 0.8;
          float alpha = fadeOut * intensity * pulse * 0.3;
          
          vec3 lightColor = color * (1.0 + sin(time) * 0.3);
          gl_FragColor = vec4(lightColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.copy(position);
    this.mesh.lookAt(target);
    this.mesh.rotateX(Math.PI / 2);
    
    // Add point light at source
    this.light = new THREE.PointLight(color, intensity * 2, 20);
    this.light.position.copy(position);
    
    this.group.add(this.mesh);
    this.group.add(this.light);
  }
  
  update(time: number) {
    if (this.mesh.material instanceof THREE.ShaderMaterial) {
      this.mesh.material.uniforms.time.value = time;
    }
    this.light.intensity = 2 + Math.sin(time * 2) * 0.5;
    
    // Rotate beam slightly for refraction effect
    this.mesh.rotation.y = Math.sin(time * 0.5) * 0.1;
    this.mesh.rotation.x = Math.PI / 2 + Math.cos(time * 0.3) * 0.1;
  }
}

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const lightsRef = useRef<VolumetricLight[]>([]);
  const particlesRef = useRef<THREE.Points>();
  const microParticlesRef = useRef<THREE.Points>();
  const edgesRef = useRef<THREE.Mesh>();
  const animationIdRef = useRef<number>();
  const timeRef = useRef(0);
  const targetCameraRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
    
    camera.position.z = 5;
    
    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // Create multiple colored light beams
    const lights = [
      new VolumetricLight(0x9333ea, new THREE.Vector3(-3, 3, -2), new THREE.Vector3(0, 0, 0), 1.2), // Purple
      new VolumetricLight(0x3b82f6, new THREE.Vector3(3, -2, -2), new THREE.Vector3(0, 0, 0), 1.0), // Blue
      new VolumetricLight(0xec4899, new THREE.Vector3(0, 4, -3), new THREE.Vector3(0, 0, 0), 1.1), // Pink
      new VolumetricLight(0x10b981, new THREE.Vector3(-4, -1, -1), new THREE.Vector3(0, 0, 0), 0.9), // Green
      new VolumetricLight(0xf97316, new THREE.Vector3(2, 2, -2), new THREE.Vector3(0, 0, 0), 0.8), // Orange
      new VolumetricLight(0x06b6d4, new THREE.Vector3(0, -3, -2), new THREE.Vector3(0, 0, 0), 1.0), // Cyan
    ];

    lights.forEach(light => scene.add(light.group));
    lightsRef.current = lights;

    // Main particle system
    const particleCount = 2000;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleVelocities = new Float32Array(particleCount * 3);

    const gemColors = [
      new THREE.Color(0x9333ea),
      new THREE.Color(0x3b82f6),
      new THREE.Color(0xec4899),
      new THREE.Color(0x10b981),
      new THREE.Color(0xf97316),
      new THREE.Color(0x06b6d4)
    ];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particlePositions[i3] = (Math.random() - 0.5) * 20;
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 20;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 20;
      
      const color = gemColors[Math.floor(Math.random() * gemColors.length)];
      particleColors[i3] = color.r;
      particleColors[i3 + 1] = color.g;
      particleColors[i3 + 2] = color.b;
      
      particleVelocities[i3] = (Math.random() - 0.5) * 0.01;
      particleVelocities[i3 + 1] = (Math.random() - 0.5) * 0.01;
      particleVelocities[i3 + 2] = (Math.random() - 0.5) * 0.01;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    particleGeometry.setAttribute('velocity', new THREE.BufferAttribute(particleVelocities, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.6
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Microparticles for atmosphere
    const microParticleCount = 500;
    const microGeometry = new THREE.BufferGeometry();
    const microPositions = new Float32Array(microParticleCount * 3);

    for (let i = 0; i < microParticleCount; i++) {
      const i3 = i * 3;
      microPositions[i3] = (Math.random() - 0.5) * 15;
      microPositions[i3 + 1] = (Math.random() - 0.5) * 15;
      microPositions[i3 + 2] = (Math.random() - 0.5) * 15;
    }

    microGeometry.setAttribute('position', new THREE.BufferAttribute(microPositions, 3));

    const microMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.3
    });

    const microParticles = new THREE.Points(microGeometry, microMaterial);
    scene.add(microParticles);
    microParticlesRef.current = microParticles;

    // Crystal edge geometry (subtle geometric hints)
    const edgeGeometry = new THREE.OctahedronGeometry(8, 0);
    const edgeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.05,
      blending: THREE.AdditiveBlending
    });
    const edges = new THREE.Mesh(edgeGeometry, edgeMaterial);
    scene.add(edges);
    edgesRef.current = edges;

    // Mouse parallax
    const handleMouseMove = (e: MouseEvent) => {
      targetCameraRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      targetCameraRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      timeRef.current += 0.01;

      // Update volumetric lights
      lightsRef.current.forEach((light, index) => {
        light.update(timeRef.current + index * 0.5);
        light.group.rotation.y = timeRef.current * 0.1;
      });

      // Animate particles
      if (particlesRef.current) {
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
        const velocities = particlesRef.current.geometry.attributes.velocity?.array as Float32Array;
        
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          positions[i3] += velocities[i3];
          positions[i3 + 1] += velocities[i3 + 1];
          positions[i3 + 2] += velocities[i3 + 2];
          
          // Drift pattern
          positions[i3] += Math.sin(timeRef.current + i) * 0.001;
          positions[i3 + 1] += Math.cos(timeRef.current + i) * 0.001;
          
          // Boundary check
          if (Math.abs(positions[i3]) > 10) positions[i3] *= -0.9;
          if (Math.abs(positions[i3 + 1]) > 10) positions[i3 + 1] *= -0.9;
          if (Math.abs(positions[i3 + 2]) > 10) positions[i3 + 2] *= -0.9;
        }
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      // Animate microparticles
      if (microParticlesRef.current) {
        microParticlesRef.current.rotation.y = timeRef.current * 0.05;
        microParticlesRef.current.rotation.x = timeRef.current * 0.03;
      }

      // Rotate crystal edges
      if (edgesRef.current) {
        edgesRef.current.rotation.x = timeRef.current * 0.02;
        edgesRef.current.rotation.y = timeRef.current * 0.03;
      }

      // Camera parallax
      camera.position.x += (targetCameraRef.current.x - camera.position.x) * 0.05;
      camera.position.y += (targetCameraRef.current.y - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div id="canvas-container" ref={mountRef} />;
}
