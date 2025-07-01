"use client";

import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { Containers } from "../atoms";
import { ModalProps } from "@/interface/modal.interface";
import ProductionCreateForm from "@/components/template/Form/ProductionCreateForm";
import { createProduction } from "@/service/production.service";
import { CreateProduction } from "@/interface/production.interface";

const ProductionCreateModal: React.FC<ModalProps> = ({
  open,
  onOpenChange,
}) => {
  const handleSubmit = (data: { form: CreateProduction }) => {
    const p: CreateProduction = {
      ...data.form,
      quantity: Number(data.form.quantity),
      quantityUnit: data.form.quantityUnit,
      productionTypeId: Number(data.form.productionTypeId),
    };
    createProduction(p).then((r) => {
      console.log("Création réussie");
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
              Créer une production
            </Dialog.Title>
          </Containers.Simple>
          <Containers.Simple className="space-y-4 mt-12">
            <ProductionCreateForm onSubmit={handleSubmit} />
          </Containers.Simple>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ProductionCreateModal;
