'use client';

import React, { useState } from "react";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import LabeledText from "@/components/molecules/Labeled/LabeledText";
import { Herd } from "@/interface/herd.interface";
import { Btn, Containers } from "@/components/atoms";
import { MdModeEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import EditHerdModal from "@/components/modals/editOrCreateHerd.modal";
import { deleteHerd } from "@/service/herd.service";
import {useAppDispatch} from "@/store/useAppDispatch";
import {removeHerd} from "@/store";

const HerdNavigationSection: React.FC<Herd> = ({
                                                 id,
                                                 name,
                                                 location
                                               }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteHerd(id);
      console.log(`Herd ${id} supprimé`);
    } catch (error) {
      console.error("Erreur lors de la suppression du troupeau :", error);
    } finally {
      setLoading(false);
        dispatch(removeHerd(id));

    }
  };

  return (
      <>
        <AccordionItem
            className="bg-layer-3 p-2 rounded-sm light-text"
            value={`herd-${id}`}
        >
          <AccordionTrigger className="font-semibold flex justify-between w-full gap-2 items-center">
            {name}
            <ChevronDown className="w-4" />
          </AccordionTrigger>

          <AccordionContent className="flex flex-col gap-4 pl-2 mt-2">
            <LabeledText label="Localisation" value={location} />
            <LabeledText label="Identifiant" value={id} />

            <Containers.Simple className="flex justify-around items-center">
              <Btn variant="primary" onClick={() => setOpenEdit(true)}>
                <MdModeEdit />
              </Btn>
              <Btn
                  variant="accent"
                  onClick={handleDelete}
                  disabled={loading}
              >
                <FaTrashAlt />
              </Btn>
            </Containers.Simple>
          </AccordionContent>
        </AccordionItem>

        <EditHerdModal
            open={openEdit}
            onOpenChange={setOpenEdit}
            herd={{ id, name, location }}
        />
      </>
  );
};

export default HerdNavigationSection;
