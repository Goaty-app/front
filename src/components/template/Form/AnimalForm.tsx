"use client";

import React, { useEffect, useState } from "react";
import { Animal } from "@/interface/animal.interface";
import { Btn, Containers, Form, Option, Select } from "@/components/atoms";
import Label from "@/components/atoms/Typography/label";
import { Labeled } from "@/components/molecules";

interface AnimalFormProps {
  initialData?: Animal;
  onSubmit: (data: unknown) => void;
}

const AnimalForm: React.FC<AnimalFormProps> = ({ initialData, onSubmit }) => {
  const [formState, setFormState] = useState({
    name: "",
    idNumber: "",
    status: "",
    behaviorNotes: "",
    originCountry: "",
    gender: "",
    birth: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormState({
        name: initialData.name ?? "",
        idNumber: initialData.idNumber ?? "",
        status: initialData.status ?? "",
        behaviorNotes: initialData.behaviorNotes ?? "",
        originCountry: initialData.originCountry ?? "",
        gender: initialData.gender ?? "",
        birth: initialData.birth ?? "",
      });
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formState);
  };

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Labeled.LabeledInput
        label="Nom"
        name="name"
        value={formState.name}
        onChange={handleChange}
        placeholder="Nom"
      />
      <Labeled.LabeledInput
        label="Numéro d'identification"
        name="idNumber"
        value={formState.idNumber}
        onChange={handleChange}
        placeholder="Ex : 123ABC"
      />
      <Labeled.LabeledInput
        label="Statut"
        name="status"
        value={formState.status}
        onChange={handleChange}
        placeholder="Ex : actif"
      />
      <Labeled.LabeledInput
        label="Notes comportementales"
        name="behaviorNotes"
        value={formState.behaviorNotes}
        onChange={handleChange}
        placeholder="Ex : calme, sociable"
      />
      <Labeled.LabeledInput
        label="Pays d'origine"
        name="originCountry"
        value={formState.originCountry}
        onChange={handleChange}
        placeholder="France, Espagne, etc."
      />
      <Containers.Simple className="flex flex-col gap-1">
        <Label className="font-semibold">Genre</Label>
        <Select
          name="gender"
          value={formState.gender}
          onChange={handleChange}
          className="p-2 rounded border bg-layer-1"
        >
          <Option value="">Sélectionner un genre</Option>
          <Option value="male">Mâle</Option>
          <Option value="female">Femelle</Option>
        </Select>
      </Containers.Simple>
      <Labeled.LabeledInput
        label="Date de naissance"
        name="birth"
        type="date"
        value={formState.birth}
        onChange={handleChange}
      />

      <Btn
        variant="primary"
        type="submit"
        className="mt-2 p-2 bg-primary text-white rounded"
      >
        Soumettre
      </Btn>
    </Form>
  );
};

export default AnimalForm;
