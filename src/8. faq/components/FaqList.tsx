import { Link } from "@tanstack/react-router";
import { SITE_CONTACT } from "@/shared/config/contact";
import { Container } from "@/shared/components/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { FAQ_SETTINGS } from "../settings/faq.settings";

export function FaqList() {
  const { m } = useI18n();
  const copy = Object.fromEntries(m.faq.items.map((item) => [item.id, item]));
  const metaById = Object.fromEntries(FAQ_SETTINGS.items.map((item) => [item.id, item]));

  return (
    <section className="py-4 sm:py-6">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-8">
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-0.5">
              {FAQ_SETTINGS.groups.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="block rounded-md px-2 py-1.5 text-sm font-semibold text-navy/55 transition-colors hover:bg-muted hover:text-navy"
                >
                  {m.faq.groups[group.id]}
                </a>
              ))}
            </div>
          </aside>

          <div className="min-w-0 space-y-5">
            {FAQ_SETTINGS.groups.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-24">
                <h2 className="text-sm font-semibold tracking-tight text-navy">{m.faq.groups[group.id]}</h2>
                <Accordion
                  type="single"
                  collapsible
                  defaultValue={group.id === "giving" ? group.items[0] : undefined}
                  className="mt-2 overflow-hidden rounded-xl border border-border bg-card"
                >
                  {group.items.map((itemId) => {
                    const item = copy[itemId];
                    const meta = metaById[itemId];
                    if (!item || !meta) return null;

                    return (
                      <AccordionItem key={itemId} value={itemId} className="border-border px-4 last:border-b-0">
                        <AccordionTrigger className="py-3 text-left text-sm font-semibold text-navy hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-navy/35">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="pb-3 text-sm leading-snug text-muted-foreground">
                          <p>{item.body}</p>
                          {"steps" in item && item.steps ? (
                            <ol className="mt-2 list-decimal space-y-1 pl-5">
                              {item.steps.map((step) => (
                                <li key={step}>{step}</li>
                              ))}
                            </ol>
                          ) : null}
                          {"bullets" in item && item.bullets ? (
                            <ul className="mt-2 list-disc space-y-1 pl-5">
                              {item.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                              ))}
                            </ul>
                          ) : null}
                          {"whatsapp" in meta || "email" in meta || "rekening" in meta ? (
                            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 border-t border-border pt-2 text-sm">
                              {"whatsapp" in meta && meta.whatsapp ? (
                                <a
                                  href={SITE_CONTACT.whatsappUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="font-semibold text-navy hover:text-accent"
                                >
                                  WhatsApp {SITE_CONTACT.phoneDisplay}
                                </a>
                              ) : null}
                              {"email" in meta && meta.email ? (
                                <a href={`mailto:${SITE_CONTACT.email}`} className="font-semibold text-navy hover:text-accent">
                                  {SITE_CONTACT.email}
                                </a>
                              ) : null}
                              {"rekening" in meta && meta.rekening ? (
                                <Link
                                  to={SITE_CONTACT.rekeningPath}
                                  className="font-semibold text-navy hover:text-accent"
                                >
                                  {m.topBar.rekening}
                                </Link>
                              ) : null}
                            </div>
                          ) : null}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
