import { ArrowRight, ImageIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Container } from "@/shared/components/Container";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import { HOME_PROGRAM_PHOTOS } from "../photos";

function ProgramCard({
  title,
  hint,
  src,
  bleed,
  linked,
}: {
  title: string;
  hint: string;
  src?: string | undefined;
  bleed?: boolean;
  linked?: boolean;
}) {
  const media = (
    <article
      className={cn(
        "flex flex-col overflow-hidden border border-border bg-background transition-shadow group-hover:shadow-soft",
        bleed ? "rounded-none border-x-0" : "rounded-lg",
      )}
    >
      <div className="relative aspect-[16/10] bg-background">
        {src ? (
          <img src={src} alt={`${title}. ${hint}`} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <ImageIcon className="size-5 text-navy/30" strokeWidth={1.5} />
          </div>
        )}
      </div>
      <div className="flex min-h-11 shrink-0 items-center justify-between gap-2 border-t border-border px-3 py-2">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold leading-tight text-navy sm:text-base">{title}</h3>
          <p className="mt-0.5 truncate text-[11px] leading-tight text-muted-foreground">{hint}</p>
        </div>
        <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <ArrowRight className="size-3.5" />
        </span>
      </div>
    </article>
  );

  if (linked) {
    return (
      <Link to="/program" className="group block" aria-label={`${title}. ${hint}`}>
        {media}
      </Link>
    );
  }

  return <div className="group">{media}</div>;
}

export function HomePrograms({ linked = true }: { linked?: boolean }) {
  const { m } = useI18n();

  return (
    <section className="bg-secondary/10 py-2 sm:py-8">
      <Container>
        <div className="max-w-2xl">
          <p className="text-eyebrow text-accent">{m.nav.platform}</p>
          <h2 className="mt-1.5 text-xl tracking-tight text-navy sm:text-2xl">{m.home.programsTitle}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{m.home.programsDescription}</p>
        </div>
      </Container>

      <Carousel opts={{ align: "start", loop: false }} className="mt-4 w-full max-w-full md:hidden">
        <CarouselContent className="ml-0">
          {m.home.programs.map((program) => (
            <CarouselItem key={program.id} className="basis-[calc((100%-0.5rem)*8/9)] pl-0 pr-2">
              <ProgramCard
                title={program.title}
                hint={program.hint}
                src={HOME_PROGRAM_PHOTOS[program.id]}
                bleed
                linked={linked}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Container className="mt-4 hidden md:block">
        <div className="grid grid-cols-3 gap-2">
          {m.home.programs.map((program) => (
            <ProgramCard
              key={program.id}
              title={program.title}
              hint={program.hint}
              src={HOME_PROGRAM_PHOTOS[program.id]}
              linked={linked}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
