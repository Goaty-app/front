"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getDeviceType } from "@/utils/device";

type DeviceType = "mobile" | "tablet" | "desktop";

const DeviceContext = createContext<DeviceType>("desktop");

export const DeviceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [device, setDevice] = useState<DeviceType>("desktop");

  useEffect(() => {
    const updateDevice = () => setDevice(getDeviceType());

    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  return (
    <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>
  );
};

export const useDevice = () => useContext(DeviceContext);
