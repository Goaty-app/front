import { FaStethoscope } from "react-icons/fa";
import { Btn, Typography } from "@/components/atoms";
import React from "react";

const AddHealthcare = () => {
  return (
    <Btn
      className="w-full flex justify-center items-center gap-2 cursor-pointer"
      variant="primary"
      onClick={() => alert("Ajouter un soin")}
    >
      <FaStethoscope />
      <Typography.Text className="text-center w-full hidden md:block">
        Ajouter un soin
      </Typography.Text>
    </Btn>
  );
};

export default AddHealthcare;
