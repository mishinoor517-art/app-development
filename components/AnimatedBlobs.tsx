export default function AnimatedBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-accent/30 blur-[100px] animate-blob" />
      <div
        className="absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-secondary/25 blur-[100px] animate-blob"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent-soft/20 blur-[100px] animate-blob"
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
}
