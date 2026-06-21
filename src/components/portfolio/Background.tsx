export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="animate-blob absolute -left-32 top-20 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl"
        style={{ background: "var(--gradient-radial-cyan)" }}
      />
      <div
        className="animate-blob absolute right-0 top-[40%] h-[600px] w-[600px] rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-radial-violet)", animationDelay: "5s" }}
      />
      <div
        className="animate-blob absolute -bottom-32 left-1/3 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-radial-cyan)", animationDelay: "10s" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background/80" />
    </div>
  );
}
