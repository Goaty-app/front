import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

interface AccordionSectionProps {
    value: string;
    title: string;
    children: React.ReactNode;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ value, title, children }) => (
    <AccordionItem value={value}>
        <AccordionTrigger className="font-semibold flex gap-2 items-center">
            {title} <ChevronDown className="w-4" />
        </AccordionTrigger>
        <AccordionContent className="pl-4 space-y-1">
            {children}
        </AccordionContent>
    </AccordionItem>
);

export default AccordionSection;
