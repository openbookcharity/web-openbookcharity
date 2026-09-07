import { ShieldCheck } from "lucide-react";
import { Container } from "@/shared/components/Container";
import { SectionHeading } from "@/shared/components/SectionHeading";
import { ctaVariants } from "@/shared/components/CtaButton";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { useTransferOwnership } from "./useTransferOwnership";

export function TransferOwnershipPanel() {
  const { state, recipient, setRecipient, submit } = useTransferOwnership();
  const { m } = useI18n();

  return (
    <section className="py-6 sm:py-12">
      <Container>
        <div className="grid items-center gap-6 rounded-2xl border border-border bg-card p-5 shadow-soft lg:grid-cols-[1.2fr_1fr] lg:p-6">
          <div>
            <SectionHeading
              eyebrow={m.home.transferEyebrow}
              title={m.home.transferTitle}
              description={m.home.transferDescription}
            />
            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="size-4 text-secondary" />
              {m.home.transferNote}
            </p>
          </div>

          <form
            className="rounded-xl bg-secondary/10 p-4"
            onSubmit={(e) => {
              e.preventDefault();
              void submit();
            }}
          >
            <label htmlFor="recipient" className="text-sm font-medium text-navy">
              {m.home.transferEmail}
            </label>
            <input
              id="recipient"
              type="email"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="mitra@contoh.id"
              className="mt-2 h-11 w-full rounded-xl border border-border bg-card px-4 text-sm outline-none focus:border-secondary"
            />
            <button type="submit" className={`${ctaVariants()} mt-3 w-full`}>
              {state === "pending" ? m.home.transferPending : m.home.transferSubmit}
            </button>
            {state === "done" ? (
              <p className="mt-2 text-sm text-secondary">{m.home.transferDone}</p>
            ) : null}
          </form>
        </div>
      </Container>
    </section>
  );
}
