"use client";

import { FaStethoscope } from "react-icons/fa";
import { Btn, Typography } from "@/components/atoms";
import React, { useState } from "react";
import HealthCareModal from "@/components/modals/healthCare.modal";

const AddHealthcare = () => {
  const [isHealthCareOpen, setIsHealthCareOpen] = useState(false);

  return (
    <>
      <Btn
        className="w-full flex justify-center items-center gap-2 cursor-pointer"
        variant="primary"
        onClick={() => setIsHealthCareOpen(true)}
      >
        <FaStethoscope />
        <Typography.Text className="text-center w-full hidden md:block">
          Ajouter un soin
        </Typography.Text>
      </Btn>
      <HealthCareModal
        open={isHealthCareOpen}
        onOpenChange={setIsHealthCareOpen}
      />
    </>
  );
};

export default AddHealthcare;
