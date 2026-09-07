import { ShieldCheck } from "lucide-react";
import { Container } from "@/shared/components/Container";
import { SectionHeading } from "@/shared/components/SectionHeading";
import { ctaVariants } from "@/shared/components/CtaButton";
import { useTransferOwnership } from "./useTransferOwnership";

export function TransferOwnershipPanel() {
  const { state, recipient, setRecipient, submit } = useTransferOwnership();

  return (
    <section className="py-20">
      <Container>
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-8 shadow-soft lg:grid-cols-[1.2fr_1fr] lg:p-12">
          <div>
            <SectionHeading
              eyebrow="Transfer ownership"
              title="Hand finished projects to local partners"
              description="When a project graduates, ownership moves to the local organisation — with its full funding history attached."
            />
            <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="size-4 text-mint" />
              Every transfer is logged and visible to donors.
            </p>
          </div>

          <form
            className="rounded-2xl bg-secondary/70 p-6"
            onSubmit={(e) => {
              e.preventDefault();
              void submit();
            }}
          >
            <label htmlFor="recipient" className="text-sm font-medium text-navy">
              Partner organisation email
            </label>
            <input
              id="recipient"
              type="email"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="partner@organisation.org"
              className="mt-2 h-12 w-full rounded-xl border border-border bg-card px-4 text-sm outline-none focus:border-primary"
            />
            <button type="submit" className={`${ctaVariants()} mt-4 w-full`}>
              {state === "pending" ? "Sending…" : "Start transfer"}
            </button>
            {state === "done" ? (
              <p className="mt-3 text-sm text-mint">Transfer request sent for review.</p>
            ) : null}
          </form>
        </div>
      </Container>
    </section>
  );
}
