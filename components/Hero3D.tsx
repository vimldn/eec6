'use client';

import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const COLORS = {
  brandOrange: '#ff6b35',
  brandLight: '#f7c59f',
  darkBg: '#0a0a0f',
};

// ============================================
// OPTION 1: ORBITING RINGS
// ============================================
function createOrbitingRings(scene: THREE.Scene, groupRef: React.MutableRefObject<THREE.Group | null>) {
  const group = new THREE.Group();
  groupRef.current = group;
  scene.add(group);

  // Central glowing sphere
  const coreGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  const coreMaterial = new THREE.MeshBasicMaterial({ 
    color: COLORS.brandOrange,
  });
  const core = new THREE.Mesh(coreGeometry, coreMaterial);
  group.add(core);

  // Core glow
  const glowGeometry = new THREE.SphereGeometry(0.7, 32, 32);
  const glowMaterial = new THREE.MeshBasicMaterial({ 
    color: COLORS.brandOrange,
    transparent: true,
    opacity: 0.15,
  });
  group.add(new THREE.Mesh(glowGeometry, glowMaterial));

  // Outer glow
  const outerGlowGeometry = new THREE.SphereGeometry(1.0, 32, 32);
  const outerGlowMaterial = new THREE.MeshBasicMaterial({ 
    color: COLORS.brandOrange,
    transparent: true,
    opacity: 0.05,
  });
  group.add(new THREE.Mesh(outerGlowGeometry, outerGlowMaterial));

  // Orbiting rings
  const ringConfigs = [
    { radius: 1.8, tube: 0.02, rotationSpeed: 1, axis: 'x', tilt: 0.3 },
    { radius: 2.2, tube: 0.015, rotationSpeed: -0.7, axis: 'y', tilt: 0.5 },
    { radius: 2.6, tube: 0.02, rotationSpeed: 0.5, axis: 'z', tilt: 0.2 },
  ];

  const rings: THREE.Mesh[] = [];
  ringConfigs.forEach((config, i) => {
    const ringGeometry = new THREE.TorusGeometry(config.radius, config.tube, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({ 
      color: i === 0 ? COLORS.brandOrange : COLORS.brandLight,
      transparent: true,
      opacity: 0.6 - i * 0.15,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = config.tilt;
    ring.rotation.y = i * 0.5;
    ring.userData = config;
    rings.push(ring);
    group.add(ring);

    // Small orbiting spheres on each ring
    for (let j = 0; j < 3; j++) {
      const orbitSphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.06 - i * 0.01, 16, 16),
        new THREE.MeshBasicMaterial({ color: COLORS.brandOrange })
      );
      orbitSphere.userData = { ring: i, angle: (j / 3) * Math.PI * 2, speed: config.rotationSpeed };
      rings.push(orbitSphere);
      group.add(orbitSphere);
    }
  });

  return { rings, core };
}

// ============================================
// OPTION 2: FLOATING GEOMETRIC SHAPES
// ============================================
function createGeometricShapes(scene: THREE.Scene, groupRef: React.MutableRefObject<THREE.Group | null>) {
  const group = new THREE.Group();
  groupRef.current = group;
  scene.add(group);

  const shapes: THREE.Mesh[] = [];
  
  const material = new THREE.MeshStandardMaterial({
    color: COLORS.brandOrange,
    roughness: 0.3,
    metalness: 0.2,
    emissive: COLORS.brandOrange,
    emissiveIntensity: 0.1,
  });

  const glassMaterial = new THREE.MeshStandardMaterial({
    color: COLORS.brandLight,
    roughness: 0.1,
    metalness: 0.8,
    transparent: true,
    opacity: 0.3,
  });

  // Central large octahedron
  const octa = new THREE.Mesh(new THREE.OctahedronGeometry(1, 0), material);
  octa.userData = { rotSpeed: { x: 0.003, y: 0.005, z: 0.002 }, floatSpeed: 0.5, floatAmp: 0.1 };
  shapes.push(octa);
  group.add(octa);

  // Surrounding shapes
  const configs = [
    { geo: new THREE.BoxGeometry(0.5, 0.5, 0.5), pos: [2, 0.5, 0.5], mat: material },
    { geo: new THREE.TetrahedronGeometry(0.4), pos: [-1.8, 0.8, 0.8], mat: material },
    { geo: new THREE.TorusGeometry(0.4, 0.15, 16, 32), pos: [1.5, -1, 1], mat: glassMaterial },
    { geo: new THREE.IcosahedronGeometry(0.35), pos: [-1.5, -0.8, 0.5], mat: material },
    { geo: new THREE.BoxGeometry(0.3, 0.3, 0.3), pos: [0.8, 1.5, -0.5], mat: glassMaterial },
    { geo: new THREE.OctahedronGeometry(0.3), pos: [-0.5, 1.2, 1], mat: material },
    { geo: new THREE.TorusKnotGeometry(0.25, 0.08, 64, 8), pos: [1.8, 1, -0.8], mat: material },
    { geo: new THREE.SphereGeometry(0.25, 32, 32), pos: [-2, 0, -0.5], mat: glassMaterial },
  ];

  configs.forEach((config) => {
    const mesh = new THREE.Mesh(config.geo, config.mat);
    mesh.position.set(config.pos[0], config.pos[1], config.pos[2]);
    mesh.userData = { 
      rotSpeed: { x: 0.006 + Math.random() * 0.006, y: 0.005 + Math.random() * 0.006, z: 0.003 },
      floatSpeed: 0.3 + Math.random() * 0.3,
      floatAmp: 0.05 + Math.random() * 0.1,
      floatOffset: Math.random() * Math.PI * 2,
      baseY: config.pos[1],
    };
    shapes.push(mesh);
    group.add(mesh);
  });

  return { shapes };
}

// ============================================
// OPTION 3: GRADIENT SPHERE (Blob style)
// ============================================
function createGradientSphere(scene: THREE.Scene, groupRef: React.MutableRefObject<THREE.Group | null>) {
  const group = new THREE.Group();
  groupRef.current = group;
  scene.add(group);

  const vertexShader = `
    varying vec3 vNormal;
    varying vec3 vPosition;
    uniform float time;
    
    void main() {
      vNormal = normal;
      vPosition = position;
      
      vec3 pos = position;
      float displacement = sin(pos.x * 3.0 + time) * sin(pos.y * 3.0 + time) * sin(pos.z * 3.0 + time) * 0.1;
      pos += normal * displacement;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec3 vNormal;
    varying vec3 vPosition;
    uniform float time;
    
    void main() {
      vec3 orange = vec3(1.0, 0.42, 0.21);
      vec3 light = vec3(0.97, 0.77, 0.62);
      vec3 dark = vec3(0.8, 0.3, 0.1);
      
      float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
      float gradient = (vPosition.y + 1.5) / 3.0;
      
      vec3 color = mix(dark, orange, gradient);
      color = mix(color, light, fresnel * 0.5);
      
      color += 0.05 * sin(vPosition.x * 5.0 + time * 2.0);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  const sphereMaterial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      time: { value: 0 }
    },
  });

  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(1.8, 64, 64),
    sphereMaterial
  );
  group.add(sphere);

  const glowMaterial = new THREE.MeshBasicMaterial({
    color: COLORS.brandOrange,
    transparent: true,
    opacity: 0.08,
    side: THREE.BackSide,
  });
  
  const glow1 = new THREE.Mesh(new THREE.SphereGeometry(2.0, 32, 32), glowMaterial);
  const glow2Material = glowMaterial.clone();
  glow2Material.opacity = 0.04;
  const glow2 = new THREE.Mesh(new THREE.SphereGeometry(2.3, 32, 32), glow2Material);
  
  group.add(glow1);
  group.add(glow2);

  return { sphere, material: sphereMaterial };
}

// ============================================
// OPTION 4: TORUS KNOT
// ============================================
function createTorusKnot(scene: THREE.Scene, groupRef: React.MutableRefObject<THREE.Group | null>) {
  const group = new THREE.Group();
  groupRef.current = group;
  scene.add(group);

  const knotGeometry = new THREE.TorusKnotGeometry(1.2, 0.35, 128, 32, 2, 3);
  const knotMaterial = new THREE.MeshStandardMaterial({
    color: COLORS.brandOrange,
    roughness: 0.25,
    metalness: 0.3,
    emissive: COLORS.brandOrange,
    emissiveIntensity: 0.15,
  });
  
  const knot = new THREE.Mesh(knotGeometry, knotMaterial);
  group.add(knot);

  const glowMaterial = new THREE.MeshBasicMaterial({
    color: COLORS.brandOrange,
    transparent: true,
    opacity: 0.06,
    side: THREE.BackSide,
  });
  
  const glowKnot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(1.3, 0.45, 64, 16, 2, 3),
    glowMaterial
  );
  group.add(glowKnot);

  // Orbiting particles
  const particles: THREE.Mesh[] = [];
  for (let i = 0; i < 50; i++) {
    const particle = new THREE.Mesh(
      new THREE.SphereGeometry(0.03, 8, 8),
      new THREE.MeshBasicMaterial({ 
        color: COLORS.brandLight,
        transparent: true,
        opacity: 0.6,
      })
    );
    particle.userData = {
      angle: Math.random() * Math.PI * 2,
      radius: 2 + Math.random() * 1,
      speed: 0.1 + Math.random() * 0.15, // Slowed down
      yOffset: (Math.random() - 0.5) * 2,
      ySpeed: 0.3 + Math.random() * 0.3, // Slowed down
    };
    particles.push(particle);
    group.add(particle);
  }

  return { knot, particles };
}

// ============================================
// STARS BACKGROUND
// ============================================
function createStars(scene: THREE.Scene) {
  const starsGeometry = new THREE.BufferGeometry();
  const positions: number[] = [];
  for (let i = 0; i < 1000; i++) {
    const r = 30 + Math.random() * 100;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    positions.push(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi)
    );
  }
  starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  const starsMaterial = new THREE.PointsMaterial({ 
    color: 0xffffff, 
    size: 0.1, 
    transparent: true, 
    opacity: 0.5 
  });
  scene.add(new THREE.Points(starsGeometry, starsMaterial));
}

// ============================================
// MAIN COMPONENT
// ============================================
interface Hero3DProps {
  className?: string;
}

type OptionData = {
  rings?: THREE.Mesh[];
  core?: THREE.Mesh;
  shapes?: THREE.Mesh[];
  sphere?: THREE.Mesh;
  material?: THREE.ShaderMaterial;
  knot?: THREE.Mesh;
  particles?: THREE.Mesh[];
};

export default function Hero3D({ className = '' }: Hero3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const dataRef = useRef<OptionData | null>(null);

  // Options array
  const options = [
    { name: 'Orbiting Rings', create: createOrbitingRings },
    { name: 'Geometric', create: createGeometricShapes },
    { name: 'Sphere', create: createGradientSphere },
    { name: 'Torus Knot', create: createTorusKnot },
  ];

  // Default to Orbiting Rings (index 0)
  const activeOption = 0;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 6);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const mainLight = new THREE.DirectionalLight(0xffffff, 1);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);
    const fillLight = new THREE.DirectionalLight(parseInt(COLORS.brandLight.replace('#', ''), 16), 0.3);
    fillLight.position.set(-5, -5, 5);
    scene.add(fillLight);

    // Stars
    createStars(scene);

    // Create initial option
    dataRef.current = options[activeOption].create(scene, groupRef);

    // Animation
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Auto-rotation only (no drag)
      if (groupRef.current) {
        groupRef.current.rotation.y += 0.001;
      }

      // Option-specific animations (all slowed down)
      const data = dataRef.current;
      if (data) {
        // Orbiting rings
        if (data.rings) {
          data.rings.forEach((ring) => {
            if (ring.userData.ring !== undefined) {
              // Orbiting sphere - SLOWER
              const ringIdx = ring.userData.ring;
              const radius = [1.8, 2.2, 2.6][ringIdx];
              ring.userData.angle += ring.userData.speed * 0.008; // Slowed from 0.02
              ring.position.x = Math.cos(ring.userData.angle) * radius;
              ring.position.z = Math.sin(ring.userData.angle) * radius;
              ring.position.y = Math.sin(ring.userData.angle * 2) * 0.3;
            }
          });
          if (data.core) {
            data.core.scale.setScalar(1 + Math.sin(t * 1) * 0.03); // Slowed pulse
          }
        }

        // Geometric shapes
        if (data.shapes) {
          data.shapes.forEach((shape) => {
            const ud = shape.userData;
            shape.rotation.x += ud.rotSpeed.x;
            shape.rotation.y += ud.rotSpeed.y;
            shape.rotation.z += ud.rotSpeed.z;
            if (ud.baseY !== undefined) {
              shape.position.y = ud.baseY + Math.sin(t * ud.floatSpeed + ud.floatOffset) * ud.floatAmp;
            }
          });
        }

        // Gradient sphere
        if (data.material && data.material.uniforms) {
          data.material.uniforms.time.value = t * 0.5; // Slowed
        }

        // Torus knot particles
        if (data.particles) {
          data.particles.forEach((p) => {
            p.userData.angle += p.userData.speed * 0.01; // Slowed from 0.02
            p.position.x = Math.cos(p.userData.angle) * p.userData.radius;
            p.position.z = Math.sin(p.userData.angle) * p.userData.radius;
            p.position.y = p.userData.yOffset + Math.sin(t * p.userData.ySpeed) * 0.5;
          });
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [mounted]);

  if (!mounted) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="w-16 h-16 border-2 border-brand/30 border-t-brand rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className={`select-none ${className}`}
      style={{ touchAction: 'none', userSelect: 'none', WebkitUserSelect: 'none' }}
    />
  );
}
