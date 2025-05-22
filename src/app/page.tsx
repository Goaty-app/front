'use client';

import {useAuth} from "@/context/authContext";
import {Cards} from "@/components/molecules";
import FindGoatModal from "@/components/modals/findGoat.modal";
import {useState} from "react";

export default function Home() {
    const { isAuthenticated } = useAuth();
    const [isFindGoatOpen, setIsFindGoatOpen] = useState(false); // Etat pour la modal
    const handleOpenFindGoat = () => {
        setIsFindGoatOpen(true);
    };

    // TODO: Add correct href for eachlink
    return (
        <div className="w-full h-full">
            { !isAuthenticated ?
                <div className="flex flex-col sm:flex-row gap-8 h-full p-4">
                    <Cards.CardBtn onClick={handleOpenFindGoat} color={'orange'} title={'Chèvre'} description={'Trouver une chèvre.'}/>
                    <Cards.CardLink href={'/care'} color={'blue'} title={'Soin'} description={'Ajouter un soin.'}/>
                    <Cards.CardLink href={'/herd/health'} color={'green'} title={'Analyse'} description={'Observer les données liées à un troupeau !'}/>
                    <Cards.CardLink href={'/herd/feae'} color={'yellow'} title={'Troupeau'} description={'Gérer vos troupeaux ici !'}/>
                </div>
                :
                <div className="flex h-full justify-center items-center">
                    Veuillez vous identifier pour utiliser notre service
                </div>
            }
            <FindGoatModal open={isFindGoatOpen} onOpenChange={setIsFindGoatOpen}/>
        </div>
    );
}
