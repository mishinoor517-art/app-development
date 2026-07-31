"use client";

import { motion } from "framer-motion";
import { Smartphone, Apple, PenTool, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: Smartphone,
    title: "Android Development",
    description: "Native, scalable Android apps built with modern architecture."
  },
  {
    icon: Apple,
    title: "iOS Development",
    description: "Polished, high-performance iOS apps that feel right at home."
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Intuitive interfaces crafted around real user behavior."
  },
  {
    icon: Wrench,
    title: "App Maintenance",
    description: "Ongoing updates, monitoring, and performance tuning."
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Services Built For Growth"
          className="mb-14 text-center"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group glass-card relative overflow-hidden p-7"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/20 blur-2xl transition-all duration-500 group-hover:bg-secondary/30" />

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3 + i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/25 to-secondary/25 text-secondary"
                >
                  <Icon size={26} className="text-white" />
                </motion.div>

                <h3 className="relative mb-2 font-display text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-white/55">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
