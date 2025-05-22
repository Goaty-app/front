"use client";

import * as Dialog from "@radix-ui/react-dialog";
import React, { useState } from "react";
import ModalHeader from "../molecules/ModalHeader";
import AuthForm from "../molecules/AuthForm";
import { EMAIL_REGEX } from "@/utils/regex";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ open, onOpenChange }) => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!EMAIL_REGEX.test(email)) {
      setError("Email invalide.");
      return;
    }

    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    setError("");
    console.log(isRegisterMode ? "Inscription" : "Connexion", {
      email,
      password,
    });
  };

  const toggleMode = () => {
    setIsRegisterMode(!isRegisterMode);
    setError("");
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="modal-center w-[90%] max-w-md p-6 bg-layer-2 rounded-2xl shadow-xl">
          <ModalHeader title={isRegisterMode ? "Inscription" : "Connexion"} />
          <AuthForm
            email={email}
            password={password}
            error={error}
            onChangeEmail={setEmail}
            onChangePassword={setPassword}
            onSubmit={handleSubmit}
            toggleMode={toggleMode}
            isRegister={isRegisterMode}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AuthModal;
