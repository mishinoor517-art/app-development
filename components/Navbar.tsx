"use client";

import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#portfolio", label: "Portfolio" }
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 z-50 w-full px-4"
    >
      <nav className="glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-5 py-3">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent to-secondary">
            <Smartphone size={16} className="text-white" />
          </span>
          <span className="font-display text-sm font-bold text-white">
           Promo Fusion
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full bg-gradient-to-r from-accent to-secondary px-5 py-2 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
        >
          Get Started
        </a>
      </nav>
    </motion.header>
  );
}
