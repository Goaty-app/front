import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import React from "react";
import { Btn, Containers } from "@/components/atoms";
import { Animal } from "@/interface/animal.interface";
import AnimalForm from "@/components/template/Form/AnimalForm";

interface EditAnimalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  animal?: Animal;
}

const EditAnimalModal: React.FC<EditAnimalModalProps> = ({
  open,
  onOpenChange,
  animal,
}) => {
  console.log("id", animal?.id);

  const handleSubmit = (data: unknown) => {
    console.log("Formulaire soumis :", data);
    onOpenChange(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-5" />
        <Dialog.Content className="modal-center w-[90%] max-w-md p-6 bg-layer-2 rounded-2xl shadow-xl z-10">
          <Containers.Simple className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-2xl font-bold">
              {animal ? `Modifier : ${animal.name}` : "Nouvel Animal"}
            </Dialog.Title>
            <Dialog.Close asChild>
              <Btn variant="accent">
                <X />
              </Btn>
            </Dialog.Close>
          </Containers.Simple>

          <AnimalForm initialData={animal} onSubmit={handleSubmit} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default EditAnimalModal;
