'use client';

import React from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@radix-ui/react-accordion";
import {ChevronDown} from "lucide-react";

import { Nav, Link } from "@/components/atoms"; 

const herds = [
    {id: 'herd-1', name: 'Troupeau 1'},
    {id: 'herd-2', name: 'Troupeau 2'}
];

const Navigation: React.FC = () => {
    return (
        <Nav className="p-2 flex flex-col gap-4">
            <Accordion type="multiple" className="w-full flex flex-col gap-4">
                <AccordionItem value="gestion-troupeaux">
                    <AccordionTrigger className="font-bold flex gap-2 items-center">Gestion des troupeaux <ChevronDown className="w-4"/></AccordionTrigger>
                    <AccordionContent className="pl-4 space-y-1">
                        <Link href="/herds" variant="default">Voir mes troupeaux</Link>
                        <Link href="/herds/manage" variant="default" className="block hover:underline">Gérer mes troupeaux</Link>
                    </AccordionContent>
                </AccordionItem>

                {herds.map((herd) => (
                    <AccordionItem className="bg-layer-3 p-2 rounded-sm light-text" value={`herd-${herd.id}`} key={herd.id}>
                        <AccordionTrigger className="font-semibold flex gap-2 items-center">{herd.name}<ChevronDown className="w-4"/></AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 pl-2 mt-2">

                            <Accordion type="single" collapsible className="pl-1">
                                <AccordionItem value={`herd-${herd.id}-main`}>
                                    <AccordionTrigger className="flex gap-2 items-center font-semibold">Mon Troupeau <ChevronDown className="w-4"/></AccordionTrigger>
                                    <AccordionContent className="pl-4 flex flex-col">
                                        <Link href={`/herd/${herd.id}/find-animal`} variant="default" className="hover:underline">Trouver un animal</Link>
                                        <Link href={`/herd/${herd.id}/status`} variant="default" className="hover:underline">Voir l’état du troupeau</Link>
                                        <Link href={`/herd/${herd.id}/births`} variant="default"className="hover:underline">Voir les naissances</Link>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <Accordion type="single" collapsible className="pl-1">
                                <AccordionItem value={`herd-${herd.id}-food`}>
                                    <AccordionTrigger className="flex gap-2 items-center font-semibold">Alimentation <ChevronDown className="w-4"/></AccordionTrigger>
                                    <AccordionContent className="pl-4 flex flex-col">
                                        <Link href={`/herd/${herd.id}/food/stock-analysis`} variant="default" className="hover:underline">Voir mon stock</Link>
                                        <Link href={`/herd/${herd.id}/food/manage-stock`} variant="default" className="hover:underline">Gérer mes stocks</Link>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <Accordion type="single" collapsible className="pl-1">
                                <AccordionItem value={`herd-${herd.id}-medical`}>
                                    <AccordionTrigger className="flex gap-2 items-center font-semibold">Médical <ChevronDown className="w-4"/></AccordionTrigger>
                                    <AccordionContent className="pl-4 flex flex-col">
                                        <Link href={`/herd/${herd.id}/medical/add-intervention`} variant="default" className="block hover:underline">Ajouter une intervention</Link>
                                        <Link href={`/herd/${herd.id}/medical/alerts`} variant="default" className="block hover:underline">Mes alertes (2)</Link>
                                        <Link href={`/herd/${herd.id}/medical/history`} variant="default" className="block hover:underline">Historique</Link>
                                        <Link href={`/herd/${herd.id}/medical/find-intervention`} variant="default" className="block hover:underline">Trouver une intervention</Link>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </Nav>
    );
};

export default Navigation;
