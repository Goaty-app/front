import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/layout/header/header";


export const metadata: Metadata = {
    title: "Goaty-App",
    description: "Application d'aide à la gestion d'élévage.",
};

export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className="bg-layer-1 h-screen w-screen flex flex-col sm:flex-col-reverse">
                <main className="flex-1">
                    {children}
                </main>
                <Header/>
            </body>
        </html>
    );
}
