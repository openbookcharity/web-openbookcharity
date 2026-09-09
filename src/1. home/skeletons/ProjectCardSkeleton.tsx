import { Container } from "@/shared/components/Container";
import { cn } from "@/lib/utils";

export function ProjectCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse overflow-hidden rounded-2xl border border-border bg-card",
        className,
      )}
    >
      <div className="aspect-[16/10] bg-muted" />
      <div className="p-4">
        <div className="h-3 w-24 rounded-full bg-muted" />
        <div className="mt-3 h-4 w-3/4 rounded-full bg-muted" />
        <div className="mt-2 h-4 w-1/2 rounded-full bg-muted" />
        <div className="mt-4 h-1.5 w-full rounded-full bg-muted" />
        <div className="mt-3 h-3 w-2/3 rounded-full bg-muted" />
      </div>
    </div>
  );
}

export function ProjectsGridSkeleton() {
  return (
    <>
      <div className="overflow-x-clip pl-2 md:hidden">
        <div className="flex">
          <div className="w-[calc((100%-0.5rem)*8/9)] shrink-0 pr-2">
            <ProjectCardSkeleton />
          </div>
          <div className="w-[calc((100%-0.5rem)*8/9)] shrink-0 pr-2">
            <ProjectCardSkeleton />
          </div>
        </div>
      </div>
      <Container className="hidden md:block">
        <div className="grid gap-3 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </Container>
    </>
  );
}
