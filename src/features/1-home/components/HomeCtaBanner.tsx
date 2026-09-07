import { Container } from "@/shared/components/Container";
import { CtaButton } from "@/shared/components/CtaButton";

export function HomeCtaBanner() {
  return (
    <section className="pb-4 pt-8">
      <Container>
        <div className="rounded-[2rem] bg-primary px-8 py-14 text-center text-primary-foreground shadow-float">
          <h2 className="mx-auto max-w-2xl text-3xl text-primary-foreground sm:text-4xl">
            Bring your projects onto an open book
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">
            Join the nonprofits reporting impact in days, not quarters.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CtaButton to="/partner" variant="light" size="lg">
              Partner with Us
            </CtaButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
