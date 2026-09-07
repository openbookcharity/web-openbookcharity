export function ProjectCardSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-border bg-card">
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
    <div className="grid gap-3 md:grid-cols-3">
      {[0, 1, 2].map((i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  );
}
