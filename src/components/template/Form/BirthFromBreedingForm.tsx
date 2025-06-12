'use client';

import React, { useState } from 'react';
import { Containers, Typography, Btn, Form } from '@/components/atoms';
import { Labeled } from '@/components/molecules';
import { UpdateBirth } from '@/interface/birth.interface';

const BirthFromBreedingForm: React.FC = () => {
    const [formData, setFormData] = useState<UpdateBirth>({
        birthDate: '',
        birthWeight: '',
        notes: '',
        breedingId: undefined,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Birth from breeding:', formData);
    };

    return (
        <Containers.Simple className="bg-layer-3 p-4 rounded flex flex-col gap-4">
            <Typography.Text className="dark-text text-center font-bold">Ajouter une naissance depuis un accouplement</Typography.Text>
            <Form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <Labeled.LabeledInput type="number" name="breedingId" label="ID de l'accouplement" value={formData.breedingId} onChange={handleChange} />
                <Labeled.LabeledInput name="birthDate" label="Date de naissance" type="date" value={formData.birthDate} onChange={handleChange} />
                <Labeled.LabeledInput name="birthWeight" label="Poids de naissance (kg)" value={formData.birthWeight} onChange={handleChange} />
                <Labeled.LabeledTextArea name="notes" label="Notes" value={formData.notes ?? ''} onChange={handleChange} />
                <Btn variant="primary" type="submit" className="bg-primary text-white p-2 rounded">Valider</Btn>
            </Form>
        </Containers.Simple>
    );
};

export default BirthFromBreedingForm;
