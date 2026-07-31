"use client";

import { motion } from "framer-motion";
import { Rocket, HeartHandshake, Timer, Cpu } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    icon: Rocket,
    value: 50,
    suffix: "+",
    label: "Apps Delivered"
  },
  {
    icon: HeartHandshake,
    value: 99,
    suffix: "%",
    label: "Client Satisfaction"
  },
  {
    icon: Timer,
    value: 72,
    suffix: "h",
    label: "Fast Delivery Turnaround"
  },
  {
    icon: Cpu,
    value: 15,
    suffix: "+",
    label: "Modern Technologies Used"
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Numbers That Speak"
          className="mb-14 text-center"
        />

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card flex flex-col items-center px-5 py-9 text-center"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent/25 to-secondary/25">
                  <Icon size={22} className="text-secondary-soft" />
                </div>
                <p className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-white/55">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
