"use client";

import Form from "next/form";
import { Btn } from "@/components/atoms";
import React, { useState } from "react";
import { CreateProduction } from "@/interface/production.interface";
import { QuantityUnit } from "@/enum/quantityUnit.enum";
import LabeledInput from "@/components/molecules/Labeled/LabeledInput";
import LabeledRadio from "@/components/molecules/Labeled/LabeledRadio";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import LabeledRadioCommon from "@/components/molecules/Labeled/LabeledRadioCommon";

const ProductionCreateForm = ({ onSubmit }) => {
  const [formState, setFormState] = useState<CreateProduction>({
    quantity: 0,
    quantityUnit: QuantityUnit.UNIT,
    productionType: 0,
  });

  const productionTypes = useSelector(
    (state: RootState) => state.appData.productionTypes,
  );
  const loading = useSelector(
    (state: RootState) => state.appData.status === "pending",
  );
  const error = useSelector((state: RootState) => state.appData.error);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  console.log(onSubmit);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ form: formState });
  };
  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <LabeledRadio
        label={"Type de production"}
        name={"productionType"}
        values={productionTypes}
        onChange={handleChange}
      />

      <LabeledInput
        label={"Quantité"}
        name={"quantity"}
        value={formState.quantity}
        onChange={handleChange}
      />

      <LabeledRadioCommon
        label={"Unité"}
        name={"quantityUnit"}
        values={Object.values(QuantityUnit)}
        onChange={handleChange}
      />
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

export default ProductionCreateForm;
