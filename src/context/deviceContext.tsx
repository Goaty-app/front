'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {getDeviceType} from "@/utils/device";

type DeviceType = 'mobile' | 'tablet' | 'desktop';

const DeviceContext = createContext<DeviceType>('desktop');

export const DeviceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [device, setDevice] = useState<DeviceType>(getDeviceType());

    useEffect(() => {
        const handleResize = () => {
            setDevice(getDeviceType());
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>;
};

export const useDevice = () => useContext(DeviceContext);
