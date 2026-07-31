export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-8">
      <p className="text-center text-sm text-white/40">
        © {new Date().getFullYear()} Novacraft. All rights reserved.
      </p>
    </footer>
  );
}
