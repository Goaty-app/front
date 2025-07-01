"use client";

import { Btn, Form } from "@/components/atoms";
import React, { useState } from "react";
import { ProductionInterface } from "@/interface/production.interface";

interface ProductionDeleteFormProps {
  onSubmit: any;
  production: ProductionInterface;
}

const ProductionDeleteForm: React.FC<ProductionDeleteFormProps> = ({
  onSubmit,
  production,
}) => {
  const [formState, setFormState] = useState({});
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ form: formState });
  };
  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Btn variant="primary" type="submit" className="mt-2 p-2 rounded">
        Supprimer
      </Btn>
    </Form>
  );
};

export default ProductionDeleteForm;
