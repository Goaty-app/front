"use client";

import { Btn, Form } from "@/components/atoms";
import React, { useState } from "react";
import { CreateProduction } from "@/interface/production.interface";
import { QuantityUnit } from "@/enum/quantityUnit.enum";
import LabeledInput from "@/components/molecules/Labeled/LabeledInput";
import LabeledRadio from "@/components/molecules/Labeled/LabeledRadio";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import LabeledRadioCommon from "@/components/molecules/Labeled/LabeledRadioCommon";
import LoadingTemplate from "@/components/template/LoadingTemplate";
import LoadingErrorTemplate from "@/components/template/LoadingErrorTemplate";

interface ProductionCreateFormProps {
  onSubmit: (data: { form: CreateProduction }) => void;
}
const ProductionCreateForm: React.FC<ProductionCreateFormProps> = ({
  onSubmit,
}) => {
  const [formState, setFormState] = useState<CreateProduction>({
    herdId: -1,
    quantity: 0,
    quantityUnit: null,
    productionTypeId: 0,
  });

  const productionTypes = useSelector(
    (state: RootState) => state.appData.productionTypes,
  );
  const herds = useSelector((state: RootState) => state.appData.herds);
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
    console.log("ahhhhhh tu changes");
    console.log(name);
    console.log(value);
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  console.log(onSubmit);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ form: formState });
  };
  if (loading) return <LoadingTemplate />;
  if (error) return <LoadingErrorTemplate />;
  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <LabeledRadio
        label={"Troupeau"}
        name={"herdId"}
        values={herds}
        value={formState.herdId}
        onChange={handleChange}
      />
      <LabeledRadio
        label={"Type de production"}
        name={"productionTypeId"}
        values={productionTypes}
        value={formState.productionTypeId}
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
        value={formState.quantityUnit}
        onChange={handleChange}
      />
      <Btn variant="primary" type="submit" className="mt-2 p-2 rounded">
        Créer
      </Btn>
    </Form>
  );
};

export default ProductionCreateForm;
