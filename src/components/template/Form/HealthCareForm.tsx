"use client";

import React, { useEffect, useState } from "react";
import { Animal } from "@/interface/animal.interface";
import { getAnimals } from "@/service/animal.service";
import { Btn, Form, Option, Select } from "@/components/atoms";
import { Labeled } from "@/components/molecules";
import { CreateHealthcare } from "@/interface/healthcare.interface";

interface HealthCareFormProps {
  onSubmit: (data: { animalId: number; form: CreateHealthcare }) => void;
}

const HealthCareForm: React.FC<HealthCareFormProps> = ({ onSubmit }) => {
  const [formState, setFormState] = useState<CreateHealthcare>({
    healthcareTypeId: 0,
    description: "",
  });

  const [animalList, setAnimalList] = useState<Animal[]>([]);
  const [animalSelectedID, setAnimalSelectedID] = useState<number | null>(null);

  useEffect(() => {
    getAnimals().then((res) => {
      setAnimalList(res.data || []);
      if (res.data && res.data.length > 0) {
        setAnimalSelectedID(res.data[0].id);
      }
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleAnimalSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAnimalSelectedID(Number(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (animalSelectedID !== null) {
      onSubmit({ animalId: animalSelectedID, form: formState });
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Labeled.LabeledInput
        label="Type de soin"
        name="healthcareTypeId"
        value={formState.healthcareTypeId}
        onChange={handleChange}
        placeholder="ID du type de soin"
      />

      <Labeled.LabeledTextArea
        label="Description"
        name="description"
        value={formState.description}
        onChange={handleChange}
      />
      <Select
        value={animalSelectedID ?? ""}
        onChange={handleAnimalSelection}
        className="p-2 rounded border bg-layer-1"
      >
        {animalList.map((animal) => (
          <Option key={animal.id} value={animal.id}>
            {animal.name}
          </Option>
        ))}
      </Select>
      <Btn
        variant="primary"
        type="submit"
        className="mt-2 p-2 bg-primary text-white rounded"
      >
        Créer
      </Btn>
    </Form>
  );
};

export default HealthCareForm;
