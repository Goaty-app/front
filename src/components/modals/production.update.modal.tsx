"use client";

import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { Containers } from "../atoms";
import { ModalProps } from "@/interface/modal.interface";
import ProductionUpdateForm from "@/components/template/Form/ProductionUpdateForm";

interface Props extends ModalProps {
  productionId: number;
}
const ProductionUpdateModal: React.FC<Props> = ({
  productionId,
  onOpenChange,
  open,
}) => {
  const handleSubmit = (data: unknown) => {
    console.log("Formulaire soumis :", data);
    onOpenChange(false);
  };
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-5" />
        <Dialog.Content className="modal-center w-[90%] max-w-md p-6 bg-layer-2 rounded-2xl shadow-xl z-10">
          <Containers.Simple className="flex justify-between items-center">
            <Dialog.Title className="text-2xl font-bold">
              Mettre à jour une production
            </Dialog.Title>
          </Containers.Simple>
          <Containers.Simple className="space-y-4 mt-12">
            <ProductionUpdateForm
              onSubmit={handleSubmit}
              productionId={productionId}
            />
          </Containers.Simple>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ProductionUpdateModal;
