export function ProjectCardSkeleton() {
  return (
    <div className="animate-pulse rounded-3xl border border-border bg-card p-6">
      <div className="h-4 w-24 rounded-full bg-muted" />
      <div className="mt-4 h-5 w-3/4 rounded-full bg-muted" />
      <div className="mt-2 h-5 w-1/2 rounded-full bg-muted" />
      <div className="mt-6 h-2 w-full rounded-full bg-muted" />
      <div className="mt-4 h-4 w-2/3 rounded-full bg-muted" />
    </div>
  );
}

export function ProjectsGridSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {[0, 1, 2].map((i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  );
}
