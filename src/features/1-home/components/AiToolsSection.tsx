import { Check, Sparkles } from "lucide-react";
import { Container } from "@/shared/components/Container";
import { SectionHeading } from "@/shared/components/SectionHeading";
import { CtaButton } from "@/shared/components/CtaButton";
import { HOME_SETTINGS } from "../settings/home.settings";

export function AiToolsSection() {
  return (
    <section className="py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="AI tools"
            title="Reporting that writes itself"
            description="Field teams shoot the update. OpenBook turns it into donor-ready communication."
          />
          <div className="mt-8">
            <CtaButton to="/ai-tools" variant="outline">
              Explore AI tools
            </CtaButton>
          </div>
        </div>

        <div className="rounded-3xl bg-navy p-8 text-navy-foreground shadow-float">
          <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Sparkles className="size-5" />
          </span>
          <ul className="mt-6 space-y-4">
            {HOME_SETTINGS.aiTools.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed">
                <Check className="mt-0.5 size-4 shrink-0 text-mint" />
                <span className="text-navy-foreground/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
