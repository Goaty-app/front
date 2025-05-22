'use client';

import {useAuth} from "@/context/authContext";
import {CardLink} from "@/components/molecules";

export default function Home() {
    const { isAuthenticated } = useAuth();

    // TODO: Add correct href for eachlink
    return (
        <div className="w-full h-full">
            { !isAuthenticated ?
                <div className="flex flex-col sm:flex-row gap-8 h-full p-4">
                    <CardLink href={'/herd'} color={'orange'} title={'Chèvre'} description={'Trouver une chèvre.'}/>
                    <CardLink href={'/care'} color={'blue'} title={'Soin'} description={'Ajouter un soin.'}/>
                    <CardLink href={'/herd/health'} color={'green'} title={'Analyse'} description={'Observer les données liées à un troupeau !'}/>
                    <CardLink href={'/herd/feae'} color={'yellow'} title={'Troupeau'} description={'Gérer vos troupeaux ici !'}/>
                </div>
                :
                <div className="flex h-full justify-center items-center">
                    Veuillez vous identifier pour utiliser notre service
                </div>
            }

        </div>
    );
}
