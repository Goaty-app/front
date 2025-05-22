"use client";
import { useState } from "react";
import { AuthModal } from "../Organismes";

export default function LoginPage() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <AuthModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}
