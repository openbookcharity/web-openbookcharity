import { PhotoFrame } from "@/shared/components/PhotoFrame";
import { Container } from "@/shared/components/Container";
import { SectionHeading } from "@/shared/components/SectionHeading";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { useHomeProjects } from "../hooks/useHomeProjects";
import { useHomeContext } from "../context/HomeContext";
import { ProjectsGridSkeleton } from "../skeletons/ProjectCardSkeleton";
import { fundedLabel, healthTone, raisedLabel } from "../utils/projectMetrics";
import { percent } from "../utils/format";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const { data, isPending } = useHomeProjects();
  const { activeProjectId, setActiveProjectId } = useHomeContext();
  const { m, locale } = useI18n();
  const titles = Object.fromEntries(m.home.projects.map((project) => [project.id, project.title]));

  return (
    <section className="bg-secondary/10 py-12">
      <Container>
        <SectionHeading
          eyebrow={m.home.projectsEyebrow}
          title={m.home.projectsTitle}
          description={m.home.projectsDescription}
        />

        <div className="mt-6">
          {isPending || !data ? (
            <ProjectsGridSkeleton />
          ) : (
            <div className="grid gap-3 md:grid-cols-3">
              {data.map((project) => {
                const title = titles[project.id] ?? project.title;
                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() =>
                      setActiveProjectId(activeProjectId === project.id ? null : project.id)
                    }
                    className={cn(
                      "overflow-hidden rounded-2xl border border-border bg-card text-left shadow-soft transition-all hover:-translate-y-0.5",
                      activeProjectId === project.id && "border-secondary ring-2 ring-secondary/30",
                    )}
                  >
                    <PhotoFrame
                      caption={m.home.photoProgram}
                      hint={title}
                      className="min-h-0 aspect-[16/10] rounded-none border-x-0 border-t-0 lg:min-h-0"
                    />
                    <div className="p-4">
                      <p className="text-eyebrow text-muted-foreground">{project.location}</p>
                      <h3 className="mt-2 text-base leading-snug text-navy">{title}</h3>

                      <div className="mt-4 h-1.5 w-full rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-accent"
                          style={{ width: `${percent(project.raised, project.goal)}%` }}
                        />
                      </div>
                      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                        <span>{fundedLabel(project, m.home.raised)}</span>
                        <span>{raisedLabel(project, m.home.raised, locale)}</span>
                      </div>
                      <p className={cn("mt-2 text-xs font-semibold", healthTone(project.healthScore))}>
                        {m.home.reportScore} {project.healthScore}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
