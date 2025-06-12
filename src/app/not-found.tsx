import Link from "next/link";
import "./not-found.css";
import { Typography } from "@/components/atoms";

const txtPageNotFound = "Oups ! La page que vous cherchez n'existe pas.";
const txtBackTo = "Retour à l'accueil";

export default function NotFound() {
  return (
    <div className="h-full flex flex-col justify-center items-center bg-404 text-center p-4 rounded-sm">
      <div className="bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-md">
        <Typography.Title className="text-4xl font-bold mb-4">
          404 - Page introuvable 🐐
        </Typography.Title>
        <Typography.Text className="mb-6">{txtPageNotFound}</Typography.Text>
        <Link href="/" className="px-4 py-2 btn btn-accent rounded">
          <span>{txtBackTo}</span>
        </Link>
      </div>
    </div>
  );
}
