"use client";

import React, { useState } from "react";
import { Containers, Typography, Btn, Form } from "@/components/atoms";
import { Labeled } from "@/components/molecules";
import { CreateBirth } from "@/interface/birth.interface";
import { LogicBtn } from "@/components/Organismes";

const BirthFromExternalForm: React.FC = () => {
  const [formData, setFormData] = useState<CreateBirth>({
    childId: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: +value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Birth from external:", formData);
  };

  return (
    <Containers.Simple className="bg-layer-3 p-4 rounded flex flex-col items-center gap-4">
      <Typography.Text className="dark-text text-center font-bold">
        Ajouter une naissance externe / achetée
      </Typography.Text>
      <Form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <Labeled.LabeledInput
          type="number"
          name="childId"
          label="ID de l'animal (enfant)"
          value={formData.childId}
          onChange={handleChange}
        />
        <Btn
          variant="primary"
          type="submit"
          className="bg-primary text-white p-2 rounded"
        >
          Valider
        </Btn>
      </Form>
      <Containers.Simple className="p-4 w-fit bg-layer-1 rounded-xl flex flex-col  md:grid md:grid-cols-[500px_1fr] gap-4">
        <Typography.Text className="warning-text text-center">
          {" "}
          {
            "Si vous n'avez pas créé l'animal avant vous ne pourrez pas récupérer son identifiant !"
          }
        </Typography.Text>
        <LogicBtn.EditAnimal />
      </Containers.Simple>
    </Containers.Simple>
  );
};

export default BirthFromExternalForm;
