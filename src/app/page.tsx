'use client';

import {useAuth} from "@/context/authContext";
import {Cards} from "@/components/molecules";
import FindGoatModal from "@/components/modals/findGoat.modal";
import {useState} from "react";
import {Containers, Typography} from "@/components/atoms";

export default function Home() {
    const { isAuthenticated } = useAuth();
    const [isFindGoatOpen, setIsFindGoatOpen] = useState(false); // Etat pour la modal
    const handleOpenFindGoat = () => {
        setIsFindGoatOpen(true);
    };

    // TODO: Add correct href for eachlink
    return (
        <Containers.Simple className="w-full h-full">
            { !isAuthenticated ?
                <Containers.Simple className="flex flex-col sm:flex-row gap-8 h-full p-4">
                    <Cards.CardBtn onClick={handleOpenFindGoat} color={'orange'} title={'Chèvre'} description={'Trouver une chèvre.'}/>
                    <Cards.CardLink href={'/care'} color={'blue'} title={'Soin'} description={'Ajouter un soin.'}/>
                    <Cards.CardLink href={'/production'} color={'green'} title={'Production'} description={'Observer la production de votre élevage !'}/>
                    <Cards.CardLink href={'/birth'} color={'yellow'} title={'Naissance'} description={'Gérer vos naissances ici !'}/>
                </Containers.Simple>
                :
                <Typography.Text className="flex h-full justify-center items-center">
                    Veuillez vous identifier pour utiliser notre service
                </Typography.Text>
            }
            <FindGoatModal open={isFindGoatOpen} onOpenChange={setIsFindGoatOpen}/>
        </Containers.Simple>
    );
}
