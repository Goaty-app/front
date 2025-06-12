import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/authContext";
import { DeviceProvider } from "@/context/deviceContext";
import Template from "@/components/template";
import { Containers } from "@/components/atoms";
import React from "react";
import StoreProvider from "@/store/storeProvider";
import AppDataLoader from "@/store/appDataLoader";

export const metadata: Metadata = {
  title: "Goaty-App",
  description: "Application d'aide à la gestion d'élévage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-layer-1 min-h-screen max-h-screen overflow-y-auto w-screen flex flex-col sm:flex-col-reverse dark-text">
        <DeviceProvider>
          <AuthProvider>
            <StoreProvider>
              <AppDataLoader />
              <Containers.Simple className="flex-1 overflow-y-auto relative flex flex-col sm:flex-row my-4 mx-2 gap-4">
                <Containers.Aside className="hidden sm:block sticky top-4 h-full w-[20%] bg-layer-2 rounded-sm p-2">
                  <Template.NavigationTemplate />
                </Containers.Aside>
                <Containers.Main className="bg-layer-2 flex-1 rounded-sm">
                  {children}
                </Containers.Main>
              </Containers.Simple>
              <Template.HeaderTemplate />
            </StoreProvider>
          </AuthProvider>
        </DeviceProvider>
      </body>
    </html>
  );
}
