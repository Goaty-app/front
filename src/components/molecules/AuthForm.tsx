"use client";
import React from "react";
import { Btn, Input, Containers } from "@/components/atoms";

interface Props {
  email: string;
  password: string;
  error: string;
  onChangeEmail: (value: string) => void;
  onChangePassword: (value: string) => void;
  onSubmit: () => void;
  toggleMode: () => void;
  isRegister: boolean;
}

const AuthForm = ({
  email,
  password,
  error,
  onChangeEmail,
  onChangePassword,
  onSubmit,
  toggleMode,
  isRegister,
}: Props) => (
  <Containers.Simple className="space-y-4">
    <Input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => onChangeEmail(e.target.value)}
      className="w-full p-2 rounded border bg-layer-1"
    />
    <Input
      type="password"
      placeholder="Mot de passe"
      value={password}
      onChange={(e) => onChangePassword(e.target.value)}
      className="w-full p-2 rounded border bg-layer-1"
    />

    {error && <div className="text-red-500 text-sm">{error}</div>}

    <Btn onClick={onSubmit} variant="accent" className="w-full py-2 rounded">
      {isRegister ? "S'inscrire" : "Se connecter"}
    </Btn>
    <Btn
      onClick={toggleMode}
      variant="default"
      className="w-full text-sm text-center hover:underline mt-2"
    >
      {isRegister
        ? "Déjà un compte ? Se connecter"
        : "Pas encore de compte ? S'inscrire"}
    </Btn>
  </Containers.Simple>
);

export default AuthForm;
