"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Wifi, Battery, Signal } from "lucide-react";
import AnimatedBlobs from "./AnimatedBlobs";
import FloatingParticles from "./FloatingParticles";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <AnimatedBlobs />
      <FloatingParticles count={20} />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-white/70 backdrop-blur-xl"
          >
            <span className="h-2 w-2 animate-pulse-glow rounded-full bg-secondary" />
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl md:text-6xl"
          >
            We Build Powerful{" "}
            <span className="gradient-text text-glow">Mobile Apps</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-6 max-w-lg text-base text-white/60 sm:text-lg lg:mx-0"
          >
            Custom Android & iOS applications designed for startups,
            businesses, and growing brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 60px -10px rgba(124,58,237,0.7)" }}
              whileTap={{ scale: 0.97 }}
              className="btn-gradient inline-flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-outline inline-flex items-center gap-2"
            >
              <Briefcase size={18} />
              View Portfolio
            </motion.a>
          </motion.div>
        </div>

        {/* Right: floating phone mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="relative mx-auto flex justify-center lg:justify-end"
        >
          <div className="absolute h-[380px] w-[380px] rounded-full bg-accent/30 blur-[110px] sm:h-[440px] sm:w-[440px]" />

          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 2, 0, -2, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="relative h-[500px] w-[250px] rounded-[42px] border-[6px] border-white/10 bg-surface shadow-glow sm:h-[560px] sm:w-[280px]">
              {/* screen */}
              <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-gradient-to-b from-[#0B1023] to-[#050816]">
                {/* status bar */}
                <div className="flex items-center justify-between px-6 pt-4 text-white/70">
                  <span className="text-xs font-medium">9:41</span>
                  <div className="flex items-center gap-1.5">
                    <Signal size={12} />
                    <Wifi size={12} />
                    <Battery size={14} />
                  </div>
                </div>

                {/* app UI mock content */}
                <div className="mt-8 space-y-4 px-5">
                  <div className="h-24 w-full rounded-2xl bg-gradient-to-br from-accent/40 to-secondary/30 backdrop-blur-xl" />
                  <div className="flex gap-3">
                    <div className="h-16 w-1/2 rounded-xl bg-white/[0.06]" />
                    <div className="h-16 w-1/2 rounded-xl bg-white/[0.06]" />
                  </div>
                  <div className="space-y-2.5">
                    <div className="h-3 w-3/4 rounded-full bg-white/10" />
                    <div className="h-3 w-1/2 rounded-full bg-white/10" />
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-12 rounded-xl bg-white/[0.05]"
                      />
                    ))}
                  </div>
                </div>

                {/* notch */}
                <div className="absolute left-1/2 top-0 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-black" />
              </div>
            </div>

            {/* orbiting glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 -z-10 rounded-[56px] border border-dashed border-secondary/20"
            />

            {/* floating badge */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card absolute -left-10 top-16 hidden px-4 py-3 sm:block"
            >
              <p className="text-xs text-white/50">Rating</p>
              <p className="text-sm font-semibold text-white">4.9 / 5.0</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="glass-card absolute -right-8 bottom-24 hidden px-4 py-3 sm:block"
            >
              <p className="text-xs text-white/50">Downloads</p>
              <p className="text-sm font-semibold text-white">120K+</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
