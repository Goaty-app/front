"use client";

import LabeledRadio from "@/components/molecules/Labeled/LabeledRadio";
import LabeledInput from "@/components/molecules/Labeled/LabeledInput";
import LabeledRadioCommon from "@/components/molecules/Labeled/LabeledRadioCommon";
import { QuantityUnit } from "@/enum/quantityUnit.enum";
import { Btn, Form } from "@/components/atoms";
import React, { useState } from "react";
import {
  ProductionInterface,
  UpdateProduction,
} from "@/interface/production.interface";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface ProductionUpdateFormProps {
  onSubmit: (data: { form: UpdateProduction }) => void;
  production: ProductionInterface;
}
const ProductionUpdateForm: React.FC<ProductionUpdateFormProps> = ({
  onSubmit,
  production,
}) => {
  console.log("production");
  console.log(production);
  const toSqlDateTime = (date: string | null): string => {
    const d = new Date(date);
    return d.toISOString().substring(0, 19).replace("T", " ");
  };
  const [formState, setFormState] = useState<UpdateProduction>({
    herdId: production.herd.id,
    productionDate: toSqlDateTime(production.productionDate),
    quantity: production.quantity,
    quantityUnit: production.quantityUnit,
    productionTypeId: production.productionType.id,
    expirationDate: toSqlDateTime(production.expirationDate),
    notes: production.notes,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ form: formState });
  };
  if (loading) return <div>je load...</div>;
  if (error) return <div>erreur</div>;

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <LabeledInput
        label={"Date de production"}
        name={"productionDate"}
        value={formState.productionDate}
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
      <LabeledRadio
        label={"Type de production"}
        name={"productionTypeId"}
        values={productionTypes}
        value={formState.productionTypeId}
        onChange={handleChange}
      />
      <LabeledInput
        label={"Date d'expiration"}
        name={"expirationDate"}
        value={formState.expirationDate}
        onChange={handleChange}
      />
      <LabeledInput
        label={"Notes"}
        name={"notes"}
        value={formState.notes}
        onChange={handleChange}
      />

      <Btn variant="primary" type="submit" className="mt-2 p-2 rounded">
        Enregistrer
      </Btn>
    </Form>
  );
};

export default ProductionUpdateForm;
