import React from 'react';
import { Accordion } from '@radix-ui/react-accordion';
import { Containers, Link } from '@/components/atoms';
import {Navigation} from "@/components/molecules";
import {HerdNavigationSection} from "@/components/Organismes";

const herds = [
    { id: 'herd-1', name: 'Troupeau 1' },
    { id: 'herd-2', name: 'Troupeau 2' },
];

const NavigationTemplate: React.FC = () => {
    return (
        <Containers.Nav className="p-2 flex flex-col gap-4">
            <Accordion type="multiple" className="w-full flex flex-col gap-4">
                <Navigation.AccordionSection value="gestion-troupeaux" title="Gestion des troupeaux">
                    <Link href="/herds" variant="default">Voir mes troupeaux</Link>
                    <Link href="/herds/manage" variant="default" className="block hover:underline">Gérer mes troupeaux</Link>
                </Navigation.AccordionSection>

                {herds.map((herd) => (
                    <HerdNavigationSection key={herd.id} id={herd.id} name={herd.name} />
                ))}
            </Accordion>
        </Containers.Nav>
    );
};

export default NavigationTemplate;
