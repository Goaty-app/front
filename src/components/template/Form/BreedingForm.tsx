'use client';

import React, {useState} from 'react';
import {Containers, Typography, Btn, Form} from '@/components/atoms';
import {Labeled} from '@/components/molecules';
import { CreateOrUpdateBreeding} from "@/interface/birth.interface";

const BreedingForm: React.FC = () => {
    const [formData, setFormData] = useState<CreateOrUpdateBreeding>({
        femaleId: undefined,
        maleId: undefined,
        matingDateStart: '',
        matingDateEnd: '',
        expectedChildCount: undefined,
        status: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Containers.Simple className="bg-layer-3 p-4 rounded flex flex-col gap-4">
            <Typography.Text className="dark-text text-center font-bold">Créer un accouplement</Typography.Text>
            <Form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <Labeled.LabeledInput type="number" name="femaleId" label="ID Femelle" value={formData.femaleId}
                                      onChange={handleChange}/>
                <Labeled.LabeledInput type="number" name="maleId" label="ID Mâle" value={formData.maleId} onChange={handleChange}/>
                <Labeled.LabeledInput name="matingDateStart" label="Date de début" type="date"
                                      value={formData.matingDateStart} onChange={handleChange}/>
                <Labeled.LabeledInput name="matingDateEnd" label="Date de fin" type="date"
                                      value={formData.matingDateEnd} onChange={handleChange}/>
                <Labeled.LabeledInput type="number" name="expectedChildCount" label="Nombre d'enfants prévu"
                                      value={formData.expectedChildCount} onChange={handleChange}/>
                <Labeled.LabeledInput name="status" label="Statut" value={formData.status} onChange={handleChange}
                                      placeholder="En cours, terminé, etc."/>
                <Btn variant="primary" type="submit"
                     className="bg-primary text-white p-2 rounded">Valider</Btn>
            </Form>
        </Containers.Simple>
    );
};

export default BreedingForm;