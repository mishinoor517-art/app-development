import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-base">
      {/* global ambient background */}
      <div className="pointer-events-none fixed inset-0 bg-grid-fade" />

      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  );
}
