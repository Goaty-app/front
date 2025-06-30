'use client';

import React, { useEffect, useState } from "react";
import { CreateOrUpdateHerd, Herd } from "@/interface/herd.interface";
import { Btn, Containers, Typography } from "@/components/atoms";
import LabeledInput from "@/components/molecules/Labeled/LabeledInput";
import LoadingTemplate from "@/components/template/LoadingTemplate";

interface HerdFormProps {
    initialData?: Herd;
    onSubmit: (data: CreateOrUpdateHerd) => void;
    loading?: boolean;
}

const HerdForm: React.FC<HerdFormProps> = ({ initialData, onSubmit, loading }) => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [errors, setErrors] = useState<{ name?: string; location?: string }>({});

    useEffect(() => {
        if (initialData) {
            setName(initialData.name);
            setLocation(initialData.location);
        }
    }, [initialData]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: { name?: string; location?: string } = {};
        if (!name.trim()) newErrors.name = "Nom requis";
        if (!location.trim()) newErrors.location = "Localisation requise";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        onSubmit({ name, location });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Containers.Simple>
                <LabeledInput
                    label="Nom du troupeau"
                    name="Nom du troupeau"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Troupeau Nord"
                />
                {errors.name && (
                    <Typography.Text className="text-red-500 text-sm mt-1">
                        {errors.name}
                    </Typography.Text>
                )}
            </Containers.Simple>

            <Containers.Simple>
                <LabeledInput
                    label="Localisation"
                    name="Localisation"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ex: Zone A"
                />
                {errors.location && (
                    <Typography.Text className="text-red-500 text-sm mt-1">
                        {errors.location}
                    </Typography.Text>
                )}
            </Containers.Simple>

            <Btn type="submit" variant="primary" disabled={loading}>
                {initialData ? "Modifier le troupeau" : "Créer le troupeau"}
            </Btn>
            {loading && <LoadingTemplate/>}
        </form>
    );
};

export default HerdForm;
