// src/components/ParticleBackground.jsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1, // To make sure particles are in the background
        },
        background: {
          color: {
            value: "transparent", // Make background transparent so particles are visible
          },
        },
        particles: {
          number: {
            value: 80, // Number of particles
            density: {
              enable: true,
              area: 800, // Area in which particles will be distributed
            },
          },
          color: {
            value: "#ff0000", // Particle color
          },
          shape: {
            type: "circle", // Particle shape
          },
          opacity: {
            value: 0.5, // Opacity of particles
          },
          size: {
            value: 5, // Size of particles
          },
          move: {
            enable: true,
            speed: 3, // Speed of particle movement
            random: true,
            bounce: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
