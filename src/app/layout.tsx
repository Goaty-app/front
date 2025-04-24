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
            <body className="bg-layer-1 min-h-screen overflow-y-auto w-screen flex flex-col sm:flex-col-reverse">
                <div className="flex-1 relative flex flex-col sm:flex-row my-4 mx-2 gap-4">
                    <aside className="hidden sm:block sticky top-4 h-full w-[20%] bg-layer-2 rounded-sm p-2">
                        Navigation Comp
                    </aside>
                    <main className="bg-layer-2 flex-1 rounded-sm">
                        {children}
                    </main>
                </div>
                <Header/>
            </body>
        </html>
    );
}
