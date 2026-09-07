import { Container } from "@/shared/components/Container";
import { PhotoFrame } from "@/shared/components/PhotoFrame";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function HomeGallery() {
  const { m } = useI18n();

  return (
    <section className="py-10 sm:py-12">
      <Container>
        <Carousel opts={{ align: "start", loop: false }} className="w-full">
          <div className="flex items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-eyebrow text-accent">{m.home.galleryEyebrow}</p>
              <h2 className="mt-2 text-2xl leading-snug tracking-tight text-navy sm:text-3xl">
                {m.home.galleryTitle}
              </h2>
            </div>
            <div className="hidden shrink-0 gap-2 sm:flex">
              <CarouselPrevious className="static size-9 translate-x-0 translate-y-0" />
              <CarouselNext className="static size-9 translate-x-0 translate-y-0" />
            </div>
          </div>

          <CarouselContent className="-ml-3 mt-5">
            {m.home.gallerySlides.map((slide) => (
              <CarouselItem
                key={slide.caption}
                className="pl-3 basis-[70%] sm:basis-[42%] lg:basis-[30%]"
              >
                <PhotoFrame
                  caption={slide.caption}
                  hint={slide.hint}
                  className="min-h-0 aspect-[16/10] rounded-xl lg:min-h-0"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-3 flex gap-2 sm:hidden">
            <CarouselPrevious className="static size-9 translate-x-0 translate-y-0" />
            <CarouselNext className="static size-9 translate-x-0 translate-y-0" />
          </div>
        </Carousel>
      </Container>
    </section>
  );
}
