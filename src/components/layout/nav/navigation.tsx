'use client';

import Link from 'next/link';
import React from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@radix-ui/react-accordion";

const herds = [
    { id: 'herd-1', name: 'Troupeau 1' },
    { id: 'herd-2', name: 'Troupeau 2' }
];

const Navigation: React.FC = () => {
    return (
        <nav className="w-full p-4 space-y-4">
            <Accordion type="multiple" className="w-full flex flex-col gap-4">
                <AccordionItem value="gestion-troupeaux" className="mb-2">
                    <AccordionTrigger>Gestion des troupeaux</AccordionTrigger>
                    <AccordionContent className="pl-4 space-y-1">
                        <Link href="/herds" className="block hover:underline">Voir mes troupeaux</Link>
                        <Link href="/herds/manage" className="block hover:underline">Gérer mes troupeaux</Link>
                    </AccordionContent>
                </AccordionItem>

                {herds.map((herd) => (
                    <AccordionItem value={`herd-${herd.id}`} key={herd.id}>
                        <AccordionTrigger>{herd.name}</AccordionTrigger>
                        <AccordionContent className="pl-4 space-y-3">
                            {/* Mon Troupeau avec sous-menu */}
                            <Accordion type="single" collapsible className="pl-1">
                                <AccordionItem value={`herd-${herd.id}-main`}>
                                    <AccordionTrigger>Mon Troupeau</AccordionTrigger>
                                    <AccordionContent className="pl-4 space-y-1">
                                        <Link href={`/herd/${herd.id}/find-animal`} className="block hover:underline">Trouver un animal</Link>
                                        <Link href={`/herd/${herd.id}/status`} className="block hover:underline">Voir l’état du troupeau</Link>
                                        <Link href={`/herd/${herd.id}/births`} className="block hover:underline">Voir les naissances</Link>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <Accordion type="single" collapsible className="pl-1">
                                <AccordionItem value={`herd-${herd.id}-food`}>
                                    <AccordionTrigger>Alimentation</AccordionTrigger>
                                    <AccordionContent className="pl-4 space-y-1">
                                        <Link href={`/herd/${herd.id}/food/stock-analysis`} className="block hover:underline">Voir mon stock</Link>
                                        <Link href={`/herd/${herd.id}/food/manage-stock`} className="block hover:underline">Gérer mes stocks</Link>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            {/* Médical */}
                            <Accordion type="single" collapsible className="pl-1">
                                <AccordionItem value={`herd-${herd.id}-medical`}>
                                    <AccordionTrigger>Médical</AccordionTrigger>
                                    <AccordionContent className="pl-4 space-y-1">
                                        <Link href={`/herd/${herd.id}/medical/add-intervention`} className="block hover:underline">Ajouter une intervention</Link>
                                        <Link href={`/herd/${herd.id}/medical/alerts`} className="block hover:underline">Mes alertes (2)</Link>
                                        <Link href={`/herd/${herd.id}/medical/history`} className="block hover:underline">Historique</Link>
                                        <Link href={`/herd/${herd.id}/medical/find-intervention`} className="block hover:underline">Trouver une intervention</Link>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </nav>
    );
};

export default Navigation;
