import {FaEdit} from "react-icons/fa";
import {Btn, Typography} from "@/components/atoms";
import React from "react";

const EditAnimal = () => {
    return (
        <Btn
            variant="accent"
            className="w-full flex justify-center items-center gap-2 cursor-pointer"
            onClick={() => alert('Éditer')}
        >
            <FaEdit />
            <Typography.Text className="text-center w-full hidden md:block">Modifier l’animal</Typography.Text>
        </Btn>
    )
}

export default EditAnimal;