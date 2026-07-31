"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    name: "Finlyt — Finance Tracker",
    description: "A budgeting app with real-time spend insights.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Pulse — Fitness Coach",
    description: "AI-guided workouts synced across devices.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Orbit — Social Marketplace",
    description: "Peer-to-peer marketplace with instant chat.",
    image:
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Selected Projects"
          className="mb-14 text-center"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass-card relative overflow-hidden transition-shadow duration-500 hover:shadow-glow"
            >
              <div className="relative h-56 w-full overflow-hidden rounded-t-xl2">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-6">
                <div className="mb-1.5 flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {project.name}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-secondary"
                  />
                </div>
                <p className="text-sm text-white/55">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
