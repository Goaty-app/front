'use client';

import * as Dialog from '@radix-ui/react-dialog';
import {X} from 'lucide-react';
import React, {useState} from 'react';
import {Btn, Containers, Input, Typography} from "@/components/atoms";
import {Description} from "@radix-ui/react-dialog";
import {useRouter} from "next/navigation";
import {ModalProps} from "@/interface/modal.interface";

const FindGoat: React.FC<ModalProps> = ({open, onOpenChange}) => {
    const [name, setName] = useState('Goaty');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSetName = (value: string) => {
        if (!value.trim()) {
            setError('Veuillez entrer un nom');
        } else {
            setError('');
        }
        setName(value);
    };

    const handleSubmit = () => {
        if (name.length === 0) {
            setError('Veuillez entrer un nom');
            return;
        }
        onOpenChange(false);
        router.push(`/goat/search?name=${name}`);
    };

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                <Dialog.Content className="modal-center w-[90%] max-w-md p-6 bg-layer-2 rounded-2xl shadow-xl">
                    <Containers.Simple className="flex justify-between items-center">
                        <Dialog.Title className="text-2xl font-bold">Trouver un animal</Dialog.Title>
                        <Dialog.Close asChild>
                            <Btn variant="accent">
                                <X />
                            </Btn>
                        </Dialog.Close>
                    </Containers.Simple>
                    <Description className="text-sm accent-text italic">Recherche parmi tous vos troupeaux !</Description>

                    <Containers.Simple className="space-y-4 mt-8">
                        <Input
                            type="text"
                            placeholder="Nom de votre animal"
                            value={name}
                            onChange={e => handleSetName(e.target.value)}
                            className="w-full p-2 rounded border bg-layer-1"
                        />
                        {error && (
                            <Typography.Text className="warning-text text-sm">
                                {error}
                            </Typography.Text>
                        )}

                        <Btn
                            onClick={handleSubmit}
                            disabled={!name.trim()}
                            variant="accent"
                            className="w-full py-2 rounded"
                        >
                            Chercher parmi les animaux
                        </Btn>
                    </Containers.Simple>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default FindGoat;
