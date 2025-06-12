"use client";

import {Suspense, useState} from "react";
import {Btn, Containers, Typography} from "@/components/atoms";
import SearchProductionPage from "@/components/Pages/SearchProductionPage";
import {Divider} from "@mui/material";

export default function Home() {
    const [mode, setMode] = useState< "" | "Analyse" | "Gestion" >("");

    const getContent = () => {
        switch (mode) {
            case "Analyse":
                return <Typography.Text>Hello mode Analyse</Typography.Text>;
            case "Gestion":
                return (
                    <Suspense fallback={<div>Loading...</div>}>
                        <SearchProductionPage/>
                    </Suspense>
                );
            default:
                return <Typography.Text>Choisir entre Analyse et gestion</Typography.Text>;
        }
    };

    return (
        <Containers.Simple className="w-full h-full flex flex-col gap-2 overflow-y-auto p-2">
            <Containers.Simple className="flex justify-center gap-4">
                <Btn variant={mode === "Analyse" ? "accent" : "primary"} className="cursor-pointer" onClick={() => setMode("Analyse")}>
                    <Typography.Title> Analyse</Typography.Title>
                </Btn>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Btn variant={mode === "Gestion" ? "accent" : "primary"} className="cursor-pointer" onClick={() => setMode("Gestion")}>
                    <Typography.Title> Gestion</Typography.Title>
                </Btn>
            </Containers.Simple>
            {getContent()}
        </Containers.Simple>
    );
}
