"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface GlitchLogoProps {
  src: string;
  size?: number; // wysokość docelowa
}

const GlitchLogo = ({ src, size = 175 }: GlitchLogoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [aspectRatio, setAspectRatio] = useState(1);

  useEffect(() => {
    if (!imageRef.current) return;

    function onLoad() {
      const img = imageRef.current;
      if (!img) return;
      setAspectRatio(img.naturalWidth / img.naturalHeight);
    }

    if (imageRef.current.complete) {
      onLoad();
    } else {
      imageRef.current.addEventListener("load", onLoad);
      return () => {
        imageRef.current?.removeEventListener("load", onLoad);
      };
    }
  }, [src]);

  useEffect(() => {
    if (!containerRef.current) return;

    let scene: THREE.Scene;
    let camera: THREE.OrthographicCamera;
    let renderer: THREE.WebGLRenderer;
    let planeMesh: THREE.Mesh;

    const ANIMATION_CONFIG = {
      glitchIntensityMod: 0.5,
      updateInterval: 100, // ms, czyli 0.5s
    };

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform sampler2D tDiffuse;
      uniform float glitchIntensity;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;
        vec4 baseState = texture2D(tDiffuse, uv);

        if (glitchIntensity > 0.0) {
          float segment = floor(uv.y * 12.0);
          float randomValue = fract(sin(segment * 12345.6789 + glitchIntensity) * 43758.5453);
          vec2 offset = vec2(randomValue * 0.03, 0.0) * glitchIntensity;

          vec4 redGlitch = texture2D(tDiffuse, uv + offset);
          vec4 greenGlitch = texture2D(tDiffuse, uv - offset);
          vec4 blueGlitch = texture2D(tDiffuse, uv);

          if (mod(segment, 3.0) == 0.0) {
            gl_FragColor = vec4(redGlitch.r, greenGlitch.g, baseState.b, baseState.a);
          } else if (mod(segment, 3.0) == 1.0) {
            gl_FragColor = vec4(baseState.r, greenGlitch.g, blueGlitch.b, baseState.a);
          } else {
            gl_FragColor = vec4(redGlitch.r, baseState.g, blueGlitch.b, baseState.a);
          }
        } else {
          gl_FragColor = baseState;
        }
      }
    `;

    const loader = new THREE.TextureLoader();
    loader.load(src, (texture) => {
      initializeScene(texture);
      animateScene(performance.now());
    });

    function initializeScene(texture: THREE.Texture) {
      if (!containerRef.current) return;

      const width = size * aspectRatio;
      const height = size;

      camera = new THREE.OrthographicCamera(
        -width / 2,
        width / 2,
        height / 2,
        -height / 2,
        0.01,
        10
      );
      camera.position.z = 1;

      scene = new THREE.Scene();

      const shaderUniforms = {
        tDiffuse: { value: texture },
        glitchIntensity: { value: 0.0 },
      };

      planeMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(width, height),
        new THREE.ShaderMaterial({
          uniforms: shaderUniforms,
          vertexShader,
          fragmentShader,
          transparent: true,
        })
      );

      scene.add(planeMesh);

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        preserveDrawingBuffer: true,
      });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);

      if (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }

      containerRef.current.appendChild(renderer.domElement);

      renderer.domElement.style.position = "relative";
      renderer.domElement.style.display = "block";
      renderer.domElement.style.backgroundColor = "transparent";
      renderer.domElement.style.width = `${width}px`;
      renderer.domElement.style.height = `${height}px`;

      containerRef.current.style.width = `${width}px`;
      containerRef.current.style.height = `${height}px`;
      containerRef.current.style.position = "relative";
      containerRef.current.style.overflow = "visible";
    }

    let lastUpdateTime = 0;

    function animateScene(time: number) {
      requestAnimationFrame(animateScene);

      if (time - lastUpdateTime > ANIMATION_CONFIG.updateInterval) {
        if (planeMesh.material instanceof THREE.ShaderMaterial) {
          planeMesh.material.uniforms.glitchIntensity.value =
            Math.random() * ANIMATION_CONFIG.glitchIntensityMod;
        }
        lastUpdateTime = time;
      }

      renderer.render(scene, camera);
    }
  }, [src, size, aspectRatio]);

  return (
    <div ref={containerRef} className="glitch-container">
      {/* obrazek tylko do pobrania proporcji, ukryty */}
      <img
        ref={imageRef}
        src={src}
        alt="Logo"
        style={{
          display: "block",
          opacity: 0,
          width: "auto",
          height: size,
          pointerEvents: "none",
          userSelect: "none",
        }}
        draggable={false}
      />
    </div>
  );
};

export default GlitchLogo;
