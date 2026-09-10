import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function PhotoFrame({
  src,
  alt,
  caption,
  hint,
  tone = "light",
  className,
}: {
  src?: string | undefined;
  alt?: string;
  caption: string;
  hint: string;
  tone?: "light" | "navy";
  className?: string;
}) {
  const isNavy = tone === "navy";

  return (
    <div>
      <div
        className={cn(
          "relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-2xl border lg:min-h-[280px]",
          src
            ? isNavy
              ? "border-navy-foreground/25 bg-navy-foreground/8"
              : "border-border bg-muted"
            : isNavy
              ? "border-dashed border-navy-foreground/25 bg-navy-foreground/8"
              : "border-dashed border-navy/20 bg-muted",
          className,
        )}
      >
        {src ? (
          <img src={src} alt={alt ?? caption} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <div className="flex flex-col items-center justify-center gap-1.5 px-3 py-5 text-center">
            <span
              className={cn(
                "inline-flex size-12 items-center justify-center rounded-full border",
                isNavy
                  ? "border-navy-foreground/20 bg-navy-foreground/10 text-navy-foreground/60"
                  : "border-navy/15 bg-card text-navy/50",
              )}
            >
              <ImageIcon className="size-5" strokeWidth={1.5} />
            </span>
            <p className={cn("font-display text-lg", isNavy ? "text-navy-foreground" : "text-navy")}>
              {caption}
            </p>
            <p
              className={cn(
                "max-w-[18rem] text-sm leading-relaxed",
                isNavy ? "text-navy-foreground/65" : "text-muted-foreground",
              )}
            >
              {hint}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
