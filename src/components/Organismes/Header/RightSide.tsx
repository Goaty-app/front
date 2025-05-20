import React from 'react';
import {Containers, Typography} from "@/components/atoms";
import {Icons} from "@/components/molecules";

const RightSide: React.FC = () => {
    return (
        <Containers.Simple className="flex gap-4 text-xl font-semibold items-center">
            <Typography.Text>Alertes</Typography.Text>
            <Icons.ThemeIcon/>
            <Icons.AuthIcon/>
            <Icons.Mobile.BurgerIcon/>
        </Containers.Simple>
    );
};

export default RightSide;
