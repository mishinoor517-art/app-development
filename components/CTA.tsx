"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card relative overflow-hidden px-8 py-16 text-center sm:px-16"
        >
          {/* glow background */}
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/40 blur-[100px]" />
          <div className="absolute bottom-0 right-0 h-56 w-56 translate-x-1/4 translate-y-1/4 rounded-full bg-secondary/30 blur-[90px]" />

          {/* floating shapes */}
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-8 top-8 h-10 w-10 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl sm:left-14 sm:top-10"
          />
          <motion.div
            animate={{ y: [0, 16, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 right-10 h-14 w-14 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl sm:right-16"
          />

          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            >
              Ready to Build Your{" "}
              <span className="gradient-text">Dream App?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mx-auto mt-4 max-w-md text-white/60"
            >
              Let&apos;s turn your idea into a polished, production-ready app.
            </motion.p>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 70px -10px rgba(124,58,237,0.8)"
              }}
              whileTap={{ scale: 0.96 }}
              className="btn-gradient mt-9 inline-flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
