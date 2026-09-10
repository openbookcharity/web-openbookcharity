import { PhotoFrame } from "@/shared/components/PhotoFrame";
import { Container } from "@/shared/components/Container";
import { SectionHeading } from "@/shared/components/SectionHeading";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { useHomeProjects } from "../hooks/useHomeProjects";
import { useHomeContext } from "../context/HomeContext";
import { ProjectsGridSkeleton } from "../skeletons/ProjectCardSkeleton";
import { fundedLabel, healthTone, raisedLabel, type HomeProject } from "../utils/projectMetrics";
import { percent } from "../utils/format";
import { cn } from "@/lib/utils";
import { HOME_PROJECT_PHOTOS } from "../photos";

function ProjectCard({
  project,
  title,
  selected,
  onToggle,
}: {
  project: HomeProject;
  title: string;
  selected: boolean;
  onToggle: () => void;
}) {
  const { m, locale } = useI18n();

  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-border bg-card text-left shadow-soft transition-all hover:-translate-y-0.5",
        selected && "border-secondary ring-2 ring-secondary/30",
      )}
    >
      <PhotoFrame
        src={HOME_PROJECT_PHOTOS[project.id]}
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
}

export function ProjectsGrid() {
  const { data, isPending } = useHomeProjects();
  const { activeProjectId, setActiveProjectId } = useHomeContext();
  const { m } = useI18n();
  const titles = Object.fromEntries(m.home.projects.map((project) => [project.id, project.title]));

  return (
    <section className="bg-secondary/10 py-4 sm:py-12">
      <Container>
        <SectionHeading
          eyebrow={m.home.projectsEyebrow}
          title={m.home.projectsTitle}
          description={m.home.projectsDescription}
        />
      </Container>

      <div className="mt-4 sm:mt-6">
        {isPending || !data ? (
          <ProjectsGridSkeleton />
        ) : (
          <>
            <Carousel
              opts={{ align: "start", loop: false }}
              className="w-full max-w-full overflow-x-clip md:hidden"
            >
              <CarouselContent className="ml-0 pl-2">
                {data.map((project) => {
                  const title = titles[project.id] ?? project.title;
                  return (
                    <CarouselItem
                      key={project.id}
                      className="basis-[calc((100%-0.5rem)*8/9)] pl-0 pr-2 last:pr-2"
                    >
                      <ProjectCard
                        project={project}
                        title={title}
                        selected={activeProjectId === project.id}
                        onToggle={() =>
                          setActiveProjectId(activeProjectId === project.id ? null : project.id)
                        }
                      />
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>

            <Container className="hidden md:block">
              <div className="grid gap-3 md:grid-cols-3">
                {data.map((project) => {
                  const title = titles[project.id] ?? project.title;
                  return (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      title={title}
                      selected={activeProjectId === project.id}
                      onToggle={() =>
                        setActiveProjectId(activeProjectId === project.id ? null : project.id)
                      }
                    />
                  );
                })}
              </div>
            </Container>
          </>
        )}
      </div>
    </section>
  );
}
