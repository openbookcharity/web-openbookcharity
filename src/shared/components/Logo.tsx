import { Link } from "@tanstack/react-router";

export function Logo({ tone = "navy" }: { tone?: "navy" | "light" }) {
  const rays = Array.from({ length: 12 });

  return (
    <Link to="/" className="inline-flex items-center gap-3">
      <span className="relative block size-9">
        {rays.map((_, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 block h-3.5 w-1.5 rounded-full"
            style={{
              transform: `rotate(${i * 30}deg) translateY(-11px)`,
              transformOrigin: "center top",
              backgroundColor: [
                "var(--primary)",
                "var(--chart-4)",
                "var(--mint)",
                "var(--navy)",
              ][i % 4],
              opacity: 0.9,
            }}
          />
        ))}
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-xl font-semibold ${
            tone === "light" ? "text-navy-foreground" : "text-navy"
          }`}
        >
          OpenBook
        </span>
        <span
          className={`block text-[10px] tracking-wide ${
            tone === "light" ? "text-navy-foreground/70" : "text-muted-foreground"
          }`}
        >
          See the difference you make
        </span>
      </span>
    </Link>
  );
}
