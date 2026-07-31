"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Particle = {
  id: number;
  left: string;
  size: number;
  color: string;
  duration: number;
  delay: number;
};

type FloatingParticlesProps = {
  count?: number;
};

export default function FloatingParticles({
  count = 20,
}: FloatingParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles: Particle[] = Array.from(
      { length: count },
      (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1,
        color: index % 2 === 0 ? "#7C3AED" : "#06B6D4",
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 3,
      })
    );

    setParticles(generatedParticles);
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.left,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 4}px ${particle.color}`,
            bottom: "-5%",
          }}
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: "-110vh",
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}