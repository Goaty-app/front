'use client';

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import React, { useState } from "react";
import { Btn, Containers } from "@/components/atoms";
import { CreateOrUpdateHerd, Herd } from "@/interface/herd.interface";
import HerdForm from "@/components/Organismes/Form/HerdForm";
import { createHerd, updateHerd } from "@/service/herd.service";
import { useAppDispatch } from "@/store/useAppDispatch";
import { loadAllData } from "@/store";

interface EditHerdModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    herd?: Herd;
}

const EditHerdModal: React.FC<EditHerdModalProps> = ({
                                                         open,
                                                         onOpenChange,
                                                         herd,
                                                     }) => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (data: CreateOrUpdateHerd) => {
        setLoading(true);
        try {
            if (herd) {
                await updateHerd(herd.id, data);
            } else {
                await createHerd(data);
            }
            dispatch(loadAllData());
            onOpenChange(false);
        } catch (error) {
            console.error("Erreur lors de la soumission du formulaire :", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-5" />
                <Dialog.Content className="modal-center w-[90%] max-w-md p-6 bg-layer-2 rounded-2xl shadow-xl z-10">
                    <Containers.Simple className="flex justify-between items-center mb-4">
                        <Dialog.Title className="text-2xl font-bold">
                            {herd ? `Modifier : ${herd.name}` : "Nouveau Troupeau"}
                        </Dialog.Title>
                        <Dialog.Close asChild>
                            <Btn variant="accent">
                                <X />
                            </Btn>
                        </Dialog.Close>
                    </Containers.Simple>

                    <HerdForm initialData={herd} onSubmit={handleSubmit} loading={loading} />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default EditHerdModal;
