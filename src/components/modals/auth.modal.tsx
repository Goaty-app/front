"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import React, { useState } from "react";
import { EMAIL_REGEX } from "@/utils/regex";
import { Btn, Containers, Input, Typography } from "@/components/atoms";
import { Description } from "@radix-ui/react-dialog";
import { ModalProps } from "@/interface/modal.interface";

const AuthModal: React.FC<ModalProps> = ({ open, onOpenChange }) => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorPwd, setErrorPwd] = useState("");

  function isEmailValid() {
    return EMAIL_REGEX.test(email);
  }

  function isPwdValid() {
    return password.length >= 6;
  }

  const handleSubmit = () => {
    if (isEmailValid() && isPwdValid()) {
      // TODO: Add call API
      if (isRegisterMode) {
        console.log("Inscription avec", { email, password });
      } else {
        console.log("Connexion avec", { email, password });
      }
    }
  };

  const handleSetEmail = (email: string) => {
    setEmail(email);
    if (!isEmailValid()) {
      setErrorMail(
        "Le mail n'est pas valide, veuillez entre un bon format, name@email.com",
      );
    } else {
      setErrorMail("");
    }
  };

  const handleSetPwd = (pwd: string) => {
    setPassword(pwd);
    if (!isPwdValid()) {
      setErrorPwd("Le mot de passe doit avoir plus de 6 caractères");
    } else {
      setErrorPwd("");
    }
  };

  const toggleMode = () => {
    setIsRegisterMode(!isRegisterMode);
    setErrorMail("");
    setErrorPwd("");
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="modal-center w-[90%] max-w-md p-6 bg-layer-2 rounded-2xl shadow-xl">
          <Containers.Simple className="flex justify-between items-center">
            <Dialog.Title className="text-2xl font-bold">
              {isRegisterMode ? "Inscription" : "Connexion"}
            </Dialog.Title>
            <Dialog.Close asChild>
              <Btn variant="accent">
                <X />
              </Btn>
            </Dialog.Close>
          </Containers.Simple>
          <Description className="text-sm accent-text italic"></Description>

          <Containers.Simple className="space-y-4 mt-12">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => handleSetEmail(e.target.value)}
              className="w-full p-2 rounded border bg-layer-1"
            />
            {errorMail && (
              <Typography.Text className="warning-text text-sm">
                {errorMail}
              </Typography.Text>
            )}

            <Input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => handleSetPwd(e.target.value)}
              className="w-full p-2 rounded border bg-layer-1"
            />

            {errorPwd && (
              <Typography.Text className="warning-text text-sm">
                {errorPwd}
              </Typography.Text>
            )}

            <Btn
              onClick={handleSubmit}
              variant="accent"
              className="w-full py-2 rounded mt-8"
            >
              {isRegisterMode ? "S'inscrire" : "Se connecter"}
            </Btn>
            <Btn
              onClick={toggleMode}
              variant="default"
              className="w-full text-sm text-center hover:underline mt-2"
            >
              {isRegisterMode
                ? "Déjà un compte ? Se connecter"
                : "Pas encore de compte ? S'inscrire"}
            </Btn>
          </Containers.Simple>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AuthModal;
