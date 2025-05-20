// components/molecules/HerdNavigationSection.tsx
import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { Link } from '@/components/atoms';
import {Navigation} from "@/components/molecules";

interface HerdNavigationSectionProps {
    id: string;
    name: string;
}

const HerdNavigationSection: React.FC<HerdNavigationSectionProps> = ({ id, name }) => (
    <AccordionItem className="bg-layer-3 p-2 rounded-sm light-text" value={`herd-${id}`}>
        <AccordionTrigger className="font-semibold flex gap-2 items-center">
            {name} <ChevronDown className="w-4" />
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 pl-2 mt-2">
            <Navigation.HerdSubSection value={`herd-${id}-main`} title="Mon Troupeau">
                <Link href={`/herd/${id}/find-animal`} variant="default" className="hover:underline">Trouver un animal</Link>
                <Link href={`/herd/${id}/status`} variant="default" className="hover:underline">Voir l’état du troupeau</Link>
                <Link href={`/herd/${id}/births`} variant="default" className="hover:underline">Voir les naissances</Link>
            </Navigation.HerdSubSection>

            <Navigation.HerdSubSection value={`herd-${id}-food`} title="Alimentation">
                <Link href={`/herd/${id}/food/stock-analysis`} variant="default" className="hover:underline">Voir mon stock</Link>
                <Link href={`/herd/${id}/food/manage-stock`} variant="default" className="hover:underline">Gérer mes stocks</Link>
            </Navigation.HerdSubSection>

            <Navigation.HerdSubSection value={`herd-${id}-medical`} title="Médical">
                <Link href={`/herd/${id}/medical/add-intervention`} variant="default" className="hover:underline">Ajouter une intervention</Link>
                <Link href={`/herd/${id}/medical/alerts`} variant="default" className="hover:underline">Mes alertes (2)</Link>
                <Link href={`/herd/${id}/medical/history`} variant="default" className="hover:underline">Historique</Link>
                <Link href={`/herd/${id}/medical/find-intervention`} variant="default" className="hover:underline">Trouver une intervention</Link>
            </Navigation.HerdSubSection>
        </AccordionContent>
    </AccordionItem>
);

export default HerdNavigationSection;
