import React from 'react';
import { Containers } from "@/components/atoms";
import { AppIcon, RightSide } from "@/components/Organismes";

const HeaderTemplate: React.FC = () => {
    return (
       <Containers.Header className="bg-layer-2 h-[8%] flex justify-between p-4 items-center">
           <AppIcon/>
           <RightSide/>
       </Containers.Header>
    );
};

export default HeaderTemplate;
