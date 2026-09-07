import { Container } from "@/shared/components/Container";
import { SectionHeading } from "@/shared/components/SectionHeading";
import { useHomeProjects } from "../hooks/useHomeProjects";
import { useHomeContext } from "../context/HomeContext";
import { ProjectsGridSkeleton } from "../skeletons/ProjectCardSkeleton";
import { fundedLabel, healthTone, raisedLabel } from "../utils/projectMetrics";
import { percent } from "@/shared/utils/format";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const { data, isPending } = useHomeProjects();
  const { activeProjectId, setActiveProjectId } = useHomeContext();

  return (
    <section className="bg-secondary/60 py-20">
      <Container>
        <SectionHeading
          eyebrow="Live projects"
          title="Real projects, real numbers"
          description="Pick a project and follow it. Every disbursement and every update stays on the record."
        />

        <div className="mt-12">
          {isPending || !data ? (
            <ProjectsGridSkeleton />
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {data.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() =>
                    setActiveProjectId(activeProjectId === project.id ? null : project.id)
                  }
                  className={cn(
                    "rounded-3xl border border-border bg-card p-6 text-left shadow-soft transition-all hover:-translate-y-1",
                    activeProjectId === project.id && "border-primary ring-2 ring-primary/30",
                  )}
                >
                  <p className="text-eyebrow text-muted-foreground">{project.location}</p>
                  <h3 className="mt-3 text-lg leading-snug text-navy">{project.title}</h3>

                  <div className="mt-6 h-1.5 w-full rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${percent(project.raised, project.goal)}%` }}
                    />
                  </div>
                  <div className="mt-3 flex justify-between text-xs text-muted-foreground">
                    <span>{fundedLabel(project)}</span>
                    <span>{raisedLabel(project)}</span>
                  </div>
                  <p className={cn("mt-4 text-xs font-semibold", healthTone(project.healthScore))}>
                    Health score {project.healthScore}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
