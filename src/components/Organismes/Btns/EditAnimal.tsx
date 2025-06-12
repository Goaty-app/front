"use client";

import { FaEdit } from "react-icons/fa";
import { Btn, Typography } from "@/components/atoms";
import React, { useState } from "react";
import EditAnimalModal from "@/components/modals/editAnimal.modal";
import { Animal } from "@/interface/animal.interface";

const EditAnimal: React.FC<{ animal?: Animal }> = ({ animal }) => {
  const [isAnimalFormOpen, setIsAnimalFormOpen] = useState(false);

  return (
    <>
      <Btn
        variant="accent"
        className="w-full flex justify-center items-center gap-2 cursor-pointer"
        onClick={() => setIsAnimalFormOpen(true)}
      >
        <FaEdit />
        <Typography.Text className="text-center w-full hidden md:block">
          Modifier l’animal
        </Typography.Text>
      </Btn>

      <EditAnimalModal
        animal={animal}
        open={isAnimalFormOpen}
        onOpenChange={setIsAnimalFormOpen}
      />
    </>
  );
};

export default EditAnimal;
