"use client";
import React, { useState } from "react";
import { Btn } from "@/components/atoms";
import ProductionUpdateModal from "@/components/modals/production.update.modal";
import ProductionCreateModal from "@/components/modals/production.create.modal";
import ProductionDeleteModal from "@/components/modals/production.delete.modal";

type CrudProductionButtonProps =
  | { action: "create" }
  | { action: "update" | "delete"; productionId: number };

const CrudProductionIcon = (props: CrudProductionButtonProps) => {
  const [open, setOpen] = useState(false);

  const getLabel = () => {
    switch (props.action) {
      case "create":
        return "Créer";
      case "update":
        return "Modifier";
      case "delete":
        return "Supprimer";
    }
  };

  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);

  return (
    <>
      <Btn
        variant="accent"
        className="cursor-pointer"
        onClick={() => setOpen(true)}
      >
        {getLabel()} production
      </Btn>

      {open && (
        <>
          {props.action === "create" && (
            <ProductionCreateModal open={open} onOpenChange={setOpen} />
          )}

          {props.action === "update" && (
            <ProductionUpdateModal
              open={open}
              onOpenChange={setOpen}
              productionId={props.productionId}
            />
          )}

          {props.action === "delete" && (
            <ProductionDeleteModal
              open={open}
              onOpenChange={setOpen}
              productionId={props.productionId}
            />
          )}

          <button
            onClick={() => setOpen(false)}
            className="mt-4 bg-gray-300 px-4 py-2 rounded"
          >
            Fermer
          </button>
        </>
      )}
    </>
  );
};

export default CrudProductionIcon;
