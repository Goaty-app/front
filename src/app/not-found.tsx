import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center bg-main-layer-1 dark:bg-main-layer-2 text-dark-text dark:text-light-text p-4">
            <h1 className="text-4xl font-bold mb-4">404 - Page introuvable 🐐</h1>
            <p className="mb-6">Oups ! La page que vous cherchez n'existe pas.</p>
            <Link
                href="/"
                className="px-4 py-2 bg-main-color-1 hover:bg-main-color-2 text-light-text rounded transition"
            >
                <span>Retour à l'accueil</span>
            </Link>
        </div>
    );
}
