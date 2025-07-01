"use client";

import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { Containers } from "../atoms";
import { ModalProps } from "@/interface/modal.interface";
import ProductionDeleteForm from "@/components/template/Form/ProductionDeleteForm";
import { deleteProduction } from "@/service/production.service";
import { ProductionInterface } from "@/interface/production.interface";

interface Props extends ModalProps {
  production: ProductionInterface;
}
const ProductionDeleteModal: React.FC<Props> = ({
  production,
  open,
  onOpenChange,
}) => {
  const handleSubmit = (data: unknown) => {
    console.log("Formulaire soumis :");
    console.log(data);
    console.log("production");
    console.log(production);

    deleteProduction(production.id).then((r) => {
      console.log("Suppression réussie");
      console.log(r.data);
      onOpenChange(false);
    });
  };
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-5" />
        <Dialog.Content className="modal-center w-[90%] max-w-md p-6 bg-layer-2 rounded-2xl shadow-xl z-10">
          <Containers.Simple className="flex justify-between items-center">
            <Dialog.Title className="text-2xl font-bold">
              Supprimer une production
            </Dialog.Title>
          </Containers.Simple>
          <Containers.Simple className="space-y-4 mt-12">
            <ProductionDeleteForm
              onSubmit={handleSubmit}
              production={production}
            />
          </Containers.Simple>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ProductionDeleteModal;
