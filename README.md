# Novacraft — App Development Landing Page

A short, premium, fully responsive landing page for an app development studio, built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view it.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS** — custom theme tokens for the dark glass aesthetic
- **Framer Motion** — scroll reveals, hover lifts, floating/parallax animations
- **Lucide React** — icon set

## Structure

```
app/
  layout.tsx       Root layout, fonts, metadata
  page.tsx          Assembles all sections
  globals.css       Theme tokens, glass utilities
components/
  Navbar.tsx
  Hero.tsx
  Services.tsx
  WhyChooseUs.tsx
  Portfolio.tsx
  CTA.tsx
  Footer.tsx
  AnimatedBlobs.tsx
  FloatingParticles.tsx
  AnimatedCounter.tsx
  SectionHeading.tsx
```

## Theme

- Background: `#050816`
- Accent: `#7C3AED`
- Secondary: `#06B6D4`
- Rounded corners: `24px` (`rounded-xl2`)
- Glassmorphism via the `.glass` / `.glass-card` utility classes in `globals.css`
