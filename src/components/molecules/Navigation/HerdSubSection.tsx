import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

interface HerdSubSectionProps {
  value: string;
  title: string;
  children: React.ReactNode;
}

const HerdSubSection: React.FC<HerdSubSectionProps> = ({
  value,
  title,
  children,
}) => (
  <Accordion type="single" collapsible className="pl-1">
    <AccordionItem value={value}>
      <AccordionTrigger className="flex gap-2 items-center font-semibold">
        {title} <ChevronDown className="w-4" />
      </AccordionTrigger>
      <AccordionContent className="pl-4 flex flex-col">
        {children}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default HerdSubSection;
