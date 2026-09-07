import { Container } from "@/shared/components/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PhotoFrame } from "@/shared/components/PhotoFrame";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function WhyGallery() {
  const { m } = useI18n();

  return (
    <section className="border-t border-border bg-secondary/8 py-6 sm:py-12">
      <Carousel opts={{ align: "start", loop: false }} className="w-full">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-eyebrow text-accent">{m.why.galleryEyebrow}</p>
              <h2 className="mt-2 text-2xl leading-snug tracking-tight text-navy sm:text-3xl">
                {m.why.galleryTitle}
              </h2>
            </div>
            <div className="hidden shrink-0 gap-2 sm:flex">
              <CarouselPrevious className="static size-9 translate-x-0 translate-y-0" />
              <CarouselNext className="static size-9 translate-x-0 translate-y-0" />
            </div>
          </div>
        </Container>

        <CarouselContent className="mt-5 ml-0">
          {m.why.gallerySlides.map((slide) => (
            <CarouselItem
              key={slide.caption}
              className="basis-full pl-0 pr-0 sm:basis-[42%] sm:pr-3 lg:basis-[30%] last:pr-0"
            >
              <PhotoFrame
                caption={slide.caption}
                hint={slide.hint}
                className="min-h-0 aspect-[16/10] rounded-none sm:rounded-xl lg:min-h-0"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <Container>
          <div className="mt-3 flex gap-2 sm:hidden">
            <CarouselPrevious className="static size-9 translate-x-0 translate-y-0" />
            <CarouselNext className="static size-9 translate-x-0 translate-y-0" />
          </div>
        </Container>
      </Carousel>
    </section>
  );
}
