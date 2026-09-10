import { useEffect, useRef, type ReactNode } from "react";
import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

const STROKE = 3;
const ARROW_MARKER = "url(#mindmap-arrow-gray)";
const DIAGRAM_PAIR_GRID =
  "mx-auto grid w-full max-sm:w-[30rem] grid-cols-2 items-stretch gap-2 sm:gap-6 lg:gap-10";
const DIAGRAM_SIDE_CELL = "flex min-w-0 flex-col";
const DIAGRAM_SIDE_CARD =
  "h-full w-full min-w-0 max-w-none max-sm:min-h-[14rem] max-sm:max-w-[14.75rem] max-sm:justify-self-center";

function MindmapStemDown({ tall }: { tall?: boolean }) {
  const h = tall ? 40 : 32;
  return (
    <svg
      aria-hidden
      viewBox={`0 0 24 ${h}`}
      className={cn("mx-auto w-6 text-border", tall ? "h-10" : "h-8")}
    >
      <line
        x1="12"
        y1="0"
        x2="12"
        y2={h - 4}
        stroke="currentColor"
        strokeWidth={STROKE}
        markerEnd={ARROW_MARKER}
      />
    </svg>
  );
}

function MindmapForkDown() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 56"
      className="mx-auto h-14 w-full text-border"
      preserveAspectRatio="xMidYMid meet"
    >
      <line
        x1="200"
        y1="0"
        x2="200"
        y2="22"
        stroke="currentColor"
        strokeWidth={STROKE}
      />
      <line
        x1="70"
        y1="22"
        x2="330"
        y2="22"
        stroke="currentColor"
        strokeWidth={STROKE}
        className="stroke-border"
      />
      <line
        x1="70"
        y1="22"
        x2="70"
        y2="50"
        stroke="currentColor"
        strokeWidth={STROKE}
        className="stroke-border"
        markerEnd={ARROW_MARKER}
      />
      <line
        x1="330"
        y1="22"
        x2="330"
        y2="50"
        stroke="currentColor"
        strokeWidth={STROKE}
        className="stroke-border"
        markerEnd={ARROW_MARKER}
      />
    </svg>
  );
}

function MindmapMergeDown() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 56"
      className="mx-auto h-14 w-full text-border"
      preserveAspectRatio="xMidYMid meet"
    >
      <line
        x1="70"
        y1="0"
        x2="70"
        y2="22"
        stroke="currentColor"
        strokeWidth={STROKE}
      />
      <line
        x1="330"
        y1="0"
        x2="330"
        y2="22"
        stroke="currentColor"
        strokeWidth={STROKE}
      />
      <line
        x1="70"
        y1="22"
        x2="330"
        y2="22"
        stroke="currentColor"
        strokeWidth={STROKE}
      />
      <line
        x1="200"
        y1="22"
        x2="200"
        y2="50"
        stroke="currentColor"
        strokeWidth={STROKE}
        markerEnd={ARROW_MARKER}
      />
    </svg>
  );
}

function MindmapNodeLogo({ type }: { type: "openbook" | "unknown" }) {
  if (type === "openbook") {
    return (
      <img
        src="/OBS.png"
        alt=""
        aria-hidden
        className="mx-auto mb-2 h-10 w-auto object-contain sm:h-11"
      />
    );
  }

  return (
    <svg
      aria-hidden
      viewBox="0 0 80 88"
      className="mx-auto mb-2 h-10 w-auto sm:h-11"
    >
      <path
        d="M40 4 L72 18 V44 C72 66 40 84 40 84 C40 84 8 66 8 44 V18 Z"
        className="fill-muted stroke-border"
        strokeWidth="2.5"
      />
      <path
        d="M40 8 L68 20 V44 C68 62 40 78 40 78 C40 78 12 62 12 44 V20 Z"
        className="fill-card"
      />
      <text
        x="40"
        y="54"
        textAnchor="middle"
        className="fill-muted-foreground"
        fontSize="36"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        ?
      </text>
    </svg>
  );
}

function MindmapNode({
  hook,
  title,
  subtitle,
  badge,
  footer,
  logo,
  compact,
  variant = "default",
  children,
  className,
}: {
  hook?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  footer?: string;
  logo?: "openbook" | "unknown";
  compact?: boolean;
  variant?: "default" | "question" | "visible" | "hidden" | "reality" | "openbook";
  children?: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "relative flex h-full w-full max-w-xs flex-col rounded-2xl border px-3 py-3 text-center sm:max-w-sm sm:p-4",
        compact && "max-sm:rounded-xl max-sm:px-1.5 max-sm:py-1.5",
        variant === "question" && "border-accent/40 bg-accent/5",
        variant === "visible" && "border-accent/30 bg-card shadow-soft",
        variant === "hidden" && "border-dashed border-navy/25 bg-muted/80",
        variant === "reality" && "border-navy/20 bg-navy text-navy-foreground shadow-float",
        variant === "openbook" && "max-w-none border-navy-foreground/15 bg-navy text-navy-foreground sm:max-w-none",
        variant === "default" && "border-border bg-card",
        className,
      )}
    >
      <p
        className={cn(
          "text-sm font-semibold leading-snug sm:text-base",
          variant === "reality" || variant === "openbook" ? "text-navy-foreground" : "text-navy",
          variant === "hidden" && "text-navy/80",
        )}
      >
        {logo ? <MindmapNodeLogo type={logo} /> : null}
        {hook ? (
          <>
            <span className="block font-display text-lg text-accent sm:text-xl">{hook}</span>
            <span className="mt-2 block text-sm font-semibold leading-snug sm:text-base">{title}</span>
          </>
        ) : (
          title
        )}
      </p>
      {subtitle ? (
        <p
          className={cn(
            "mt-1.5 text-xs leading-snug sm:text-sm",
            variant === "reality" || variant === "openbook"
              ? "text-navy-foreground/75"
              : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      ) : null}
      {badge ? (
        <p
          className={cn(
            "mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold sm:text-sm",
            compact && "max-sm:mt-2 max-sm:px-2.5 max-sm:py-0.5",
            variant === "visible" && "bg-accent/15 text-navy",
            variant === "hidden" && "border border-border bg-card text-muted-foreground",
            variant === "reality" && logo === "openbook" && "bg-card text-navy",
            variant === "reality" && logo !== "openbook" && "bg-primary text-primary-foreground",
            variant === "default" && "bg-muted text-navy",
          )}
        >
          {badge}
        </p>
      ) : null}
      {children ? <div className="flex flex-1 flex-col">{children}</div> : null}
      {footer !== undefined ? (
        <p
          aria-hidden={footer === ""}
          className={cn(
            "mt-auto min-h-[2.75rem] pt-3 text-left text-xs leading-snug text-muted-foreground sm:min-h-[3rem] sm:text-sm",
            compact && "max-sm:min-h-0 max-sm:pt-2",
          )}
        >
          {footer}
        </p>
      ) : null}
    </article>
  );
}

function MindmapDiagramCanvas({
  children,
  ariaLabel,
}: {
  children: ReactNode;
  ariaLabel: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const centerHorizontally = () => {
      if (!window.matchMedia("(max-width: 639px)").matches) {
        el.scrollLeft = 0;
        return;
      }
      el.scrollLeft = Math.max(0, (el.scrollWidth - el.clientWidth) / 2);
    };

    centerHorizontally();
    window.addEventListener("resize", centerHorizontally);
    return () => window.removeEventListener("resize", centerHorizontally);
  }, []);

  return (
    <div className="relative -mx-3 sm:mx-0">
      <div
        ref={scrollRef}
        className="mindmap-scroll overflow-x-scroll overscroll-x-contain sm:overflow-visible"
        role="img"
        aria-label={ariaLabel}
      >
        <div className="mx-auto w-max min-w-[30rem] max-w-none px-1.5 pb-2 pt-1 sm:w-full sm:min-w-0 sm:px-0">
          {children}
        </div>
      </div>
    </div>
  );
}

function MindmapLeaves({
  items,
  muted,
  compact,
}: {
  items: readonly string[];
  muted?: boolean;
  compact?: boolean;
}) {
  return (
    <ul className={cn("mt-3 space-y-1.5 text-left", compact && "max-sm:mt-2 max-sm:space-y-1")}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex gap-2 text-xs leading-snug sm:text-sm",
            muted ? "text-muted-foreground" : "text-navy",
          )}
        >
          <span
            className={cn(
              "mt-1.5 size-1.5 shrink-0 rounded-full",
              muted ? "bg-navy/25" : "bg-accent",
            )}
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function WhyTransparencyLayers() {
  const { m } = useI18n();
  const layers = m.why;

  return (
    <section className="border-t border-border bg-background py-2 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-eyebrow text-accent">{layers.layersEyebrow}</p>
          <h2 className="mt-3 text-3xl leading-snug tracking-tight text-navy sm:text-4xl">
            {layers.layersTitle}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {layers.layersIntro}
          </p>
        </div>

        <aside className="mx-auto mt-6 max-w-2xl rounded-2xl border border-accent/40 bg-accent/5 px-4 py-3 text-center sm:mt-8 sm:p-5">
          <p className="font-display text-lg text-accent sm:text-xl">{layers.layersMindmapHook}</p>
          <p className="mt-3 text-base leading-relaxed text-navy sm:text-lg">
            {layers.layersMindmapCause}
          </p>
          <p className="mt-2 text-base leading-relaxed text-navy sm:text-lg">
            <span className="font-semibold text-accent">{layers.layersMindmapEffectLead}</span>{" "}
            {layers.layersMindmapEffectBody}
          </p>
        </aside>

        <div className="mt-8 sm:mt-10">
        <MindmapDiagramCanvas
          ariaLabel={`${layers.layersGatewayLabel}: ${layers.layersExampleGateway}. ${layers.layersMindmapHiddenHub}: ${layers.layersExampleDirect}. ${layers.layersMindmapRealityHub}: ${layers.layersExampleTotal}. ${layers.layersCompareOthersTitle}: ${layers.layersCompareOthersBadge}. ${layers.layersCompareOpenBookTitle}: ${layers.layersCompareOpenBookBadge}. ${layers.layersExampleFootnote}`}
        >
          <div className="relative">
            <svg aria-hidden className="absolute h-0 w-0 overflow-hidden">
              <defs>
                <marker
                  id="mindmap-arrow-gray"
                  markerWidth="5"
                  markerHeight="5"
                  refX="4"
                  refY="2.5"
                  orient="auto"
                  markerUnits="userSpaceOnUse"
                >
                  <path d="M0,0 L5,2.5 L0,5 Z" fill="#a3a3a3" />
                </marker>
              </defs>
            </svg>

            <div className={DIAGRAM_PAIR_GRID}>
              <div className={cn(DIAGRAM_SIDE_CELL, "sm:items-end")}>
                <MindmapNode
                  compact
                  variant="visible"
                  title={layers.layersGatewayLabel}
                  subtitle={layers.layersGatewayNote}
                  badge={layers.layersExampleGateway}
                  footer=""
                  className={cn(DIAGRAM_SIDE_CARD, "sm:mr-4")}
                >
                  <MindmapLeaves compact items={layers.layersGatewayItems} />
                </MindmapNode>
              </div>

              <div className={cn(DIAGRAM_SIDE_CELL, "sm:items-start")}>
                <MindmapNode
                  compact
                  variant="hidden"
                  title={layers.layersMindmapHiddenHub}
                  subtitle={layers.layersMindmapHiddenSub}
                  badge={layers.layersExampleDirect}
                  footer={layers.layersDirectNote}
                  className={cn(DIAGRAM_SIDE_CARD, "sm:ml-4")}
                >
                  <MindmapLeaves compact items={layers.layersDirectItems} muted />
                </MindmapNode>
              </div>
            </div>

            <MindmapMergeDown />

            <div className="flex flex-col items-center">
              <MindmapNode
                compact
                variant="reality"
                title={layers.layersMindmapRealityHub}
                subtitle={layers.layersMindmapRealitySub}
                badge={layers.layersExampleTotal}
                className="w-full max-w-[12.5rem] sm:max-w-sm"
              />
              <p className="mt-3 max-w-md text-center text-xs text-muted-foreground sm:text-sm">
                {layers.layersExampleSummary}
              </p>
            </div>

            <MindmapStemDown />

            <p className="text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:text-sm">
              {layers.layersCompareTitle}
            </p>

            <MindmapForkDown />

            <div className={cn(DIAGRAM_PAIR_GRID, "lg:max-w-3xl")}>
              <div className={cn(DIAGRAM_SIDE_CELL, "sm:items-end")}>
                <MindmapNode
                  compact
                  variant="visible"
                  logo="unknown"
                  title={layers.layersCompareOthersTitle}
                  subtitle={layers.layersCompareOthersSub}
                  badge={layers.layersCompareOthersBadge}
                  footer=""
                  className={cn(DIAGRAM_SIDE_CARD, "sm:mr-4")}
                />
              </div>
              <div className={cn(DIAGRAM_SIDE_CELL, "sm:items-start")}>
                <MindmapNode
                  compact
                  variant="reality"
                  logo="openbook"
                  title={layers.layersCompareOpenBookTitle}
                  subtitle={layers.layersCompareOpenBookSub}
                  badge={layers.layersCompareOpenBookBadge}
                  footer=""
                  className={cn(DIAGRAM_SIDE_CARD, "sm:ml-4")}
                />
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-muted-foreground sm:mt-8 sm:text-sm">
              {layers.layersExampleFootnote}
            </p>
          </div>
        </MindmapDiagramCanvas>
        </div>

        <div className="relative mx-auto mt-8 max-w-3xl border-t-2 border-border pt-8 sm:mt-16 sm:pt-16">
          <p className="text-eyebrow text-accent">{layers.layersSolutionEyebrow}</p>
          <h3 className="mt-3 text-2xl leading-snug tracking-tight text-navy sm:text-3xl">
            {layers.layersSolutionTitle}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {layers.layersOpenBookBody}
          </p>

          <div className="relative mt-8">
            <svg
              aria-hidden
              viewBox="0 0 600 40"
              className="mx-auto hidden h-10 w-full max-w-2xl text-border sm:block"
              preserveAspectRatio="xMidYMid meet"
            >
              <line x1="300" y1="0" x2="300" y2="14" stroke="currentColor" strokeWidth={STROKE} />
              <line x1="100" y1="14" x2="500" y2="14" stroke="currentColor" strokeWidth={STROKE} />
              <line
                x1="100"
                y1="14"
                x2="100"
                y2="36"
                stroke="currentColor"
                strokeWidth={STROKE}
                markerEnd={ARROW_MARKER}
              />
              <line
                x1="300"
                y1="14"
                x2="300"
                y2="36"
                stroke="currentColor"
                strokeWidth={STROKE}
                markerEnd={ARROW_MARKER}
              />
              <line
                x1="500"
                y1="14"
                x2="500"
                y2="36"
                stroke="currentColor"
                strokeWidth={STROKE}
                markerEnd={ARROW_MARKER}
              />
            </svg>

            <ol className="grid gap-1.5 sm:grid-cols-3 sm:gap-4 sm:pt-2">
              {layers.layersSteps.map((step) => (
                <li
                  key={step.n}
                  className="rounded-2xl border border-border bg-card px-3 py-3 text-center shadow-soft sm:p-4"
                >
                  <p className="font-display text-base text-accent sm:text-lg">{step.n}</p>
                  <h4 className="mt-2 text-sm font-semibold text-navy sm:text-base">{step.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
