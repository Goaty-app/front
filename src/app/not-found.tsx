import Link from 'next/link';

const txtPageNotFound = "Oups ! La page que vous cherchez n'existe pas.";
const txtBackTo = "Retour à l'accueil"

export default function NotFound() {
    return (
        <div className="h-full flex flex-col justify-center items-center text-center bg-main-layer-1 text-dark-text p-4">
            <h1 className="text-4xl font-bold mb-4">404 - Page introuvable 🐐</h1>
            <p className="mb-6">{txtPageNotFound}</p>
            <Link
                href="/"
                className="px-4 py-2 btn btn-accent text-light-text rounded transition"
            >
                <span>{txtBackTo}</span>
            </Link>
        </div>
    );
}
