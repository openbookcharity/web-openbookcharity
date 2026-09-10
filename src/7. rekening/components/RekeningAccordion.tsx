import type { ReactNode } from "react";
import { Minus, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function RekeningAccordion({
  defaultOpen,
  items,
}: {
  defaultOpen?: string;
  items: { id: string; title: ReactNode; content: ReactNode }[];
}) {
  return (
    <Accordion type="single" collapsible defaultValue={defaultOpen} className="border-y border-border">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id} className="border-border">
          <AccordionTrigger className="group py-2.5 text-sm font-semibold text-navy hover:no-underline [&>svg]:hidden">
            <span className="flex items-center gap-2">
              <Plus className="size-3.5 text-muted-foreground group-data-[state=open]:hidden" />
              <Minus className="hidden size-3.5 text-muted-foreground group-data-[state=open]:block" />
              {item.title}
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-3 pt-0">{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
