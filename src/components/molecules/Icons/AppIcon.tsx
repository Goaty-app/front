import React from 'react';
import {Containers, Link} from "@/components/atoms";

const AppIcon: React.FC = () => {
    return (
        <Containers.Simple className="text-xl font-semibold flex gap-4 items-center">
            <Link href="/" variant="primary">Goaty</Link>
        </Containers.Simple>
    );
};

export default AppIcon;
