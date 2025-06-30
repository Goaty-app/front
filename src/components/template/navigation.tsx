"use client";

import React, { useState } from "react";
import { Accordion } from "@radix-ui/react-accordion";
import { Btn, Containers, Typography } from "@/components/atoms";
import { HerdNavigationSection } from "@/components/Organismes";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import LoadingTemplate from "@/components/template/LoadingTemplate";
import LoadingErrorTemplate from "@/components/template/LoadingErrorTemplate";
import { IoAdd } from "react-icons/io5";
import EditHerdModal from "@/components/modals/editOrCreateHerd.modal";

const NavigationTemplate: React.FC = () => {
    const [openModal, setOpenModal] = useState(false);

    const herds = useSelector((state: RootState) => state.appData.herds);
    const loading = useSelector((state: RootState) => state.appData.status === "pending");
    const error = useSelector((state: RootState) => state.appData.error);

    if (error) return <LoadingErrorTemplate />;

    return (
        <Containers.Nav className="p-2 flex flex-col gap-4">
            <Accordion type="multiple" className="w-full flex flex-col gap-4">
                <Containers.Simple className="flex justify-between w-full gap-1">
                    <Typography.Title className="text-lg">
                        Gérer mes troupeaux
                    </Typography.Title>
                    <Btn
                        variant="primary"
                        className="cursor-pointer"
                        onClick={() => setOpenModal(true)}
                    >
                        <IoAdd />
                    </Btn>
                </Containers.Simple>

                {loading && <LoadingTemplate />}

                {herds.map((herd) => (
                    <HerdNavigationSection
                        key={herd.id}
                        id={herd.id}
                        name={herd.name}
                        location={herd.location}
                    />
                ))}
            </Accordion>

            <EditHerdModal open={openModal} onOpenChange={setOpenModal} />
        </Containers.Nav>
    );
};

export default NavigationTemplate;
