"use client";
import React, { useState } from "react";

type CrudProductionButtonProps =
  | { action: "create" }
  | { action: "update" | "delete"; productionId: number };

const CrudProductionButton = (props: CrudProductionButtonProps) => {
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

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        {getLabel()} production
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">
              {getLabel()} une production
            </h2>

            {props.action === "create" && (
              <div>
                <p>Formulaire de création ici…</p>
              </div>
            )}

            {props.action === "update" && (
              <div>
                <p>Formulaire de modification ici…</p>
                <p>ID : {props.productionId}</p>
              </div>
            )}

            {props.action === "delete" && (
              <div>
                <p>Supprimer la production #{props.productionId} ?</p>
                <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
                  Confirmer la suppression
                </button>
              </div>
            )}

            <button
              onClick={() => setOpen(false)}
              className="mt-4 bg-gray-300 px-4 py-2 rounded"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CrudProductionButton;
