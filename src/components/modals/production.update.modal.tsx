"use client";

import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { Containers } from "../atoms";
import { ModalProps } from "@/interface/modal.interface";
import ProductionUpdateForm from "@/components/template/Form/ProductionUpdateForm";
import {
  ProductionInterface,
  UpdateProduction,
} from "@/interface/production.interface";
import { updateProduction } from "@/service/production.service";

interface Props extends ModalProps {
  production: ProductionInterface;
}
const ProductionUpdateModal: React.FC<Props> = ({
  production,
  onOpenChange,
  open,
}) => {
  const toSqlDateTime = (date: string | null): string => {
    const d = new Date(date);
    return d.toISOString().substring(0, 19).replace("T", " ");
  };

  const handleSubmit = (data: { form: UpdateProduction }) => {
    console.log("Formulaire soumis :");
    console.log(data.form);
    const p: UpdateProduction = {
      ...data.form,
      quantity: Number(data.form.quantity),
      expirationDate: toSqlDateTime(data.form.expirationDate),
      productionDate: toSqlDateTime(data.form.productionDate),
    };
    console.log("p");
    console.log(p);

    updateProduction(production.id, p).then((r) => {
      console.log("Mise à jour réussie");
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
              Mettre à jour une production
            </Dialog.Title>
          </Containers.Simple>
          <Containers.Simple className="space-y-4 mt-12">
            <ProductionUpdateForm
              onSubmit={handleSubmit}
              production={production}
            />
          </Containers.Simple>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ProductionUpdateModal;
