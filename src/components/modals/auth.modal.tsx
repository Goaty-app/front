'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import React, { useState } from 'react';
import { EMAIL_REGEX } from '@/utils/regex';

interface AuthModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ open, onOpenChange }) => {
    const [isRegisterMode, setIsRegisterMode] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        if (!EMAIL_REGEX.test(email)) {
            setError('Email invalide.');
            return;
        }
        // TODO: Use password REGEX
        if (password.length < 6) {
            setError('Le mot de passe doit contenir au moins 6 caractères.');
            return;
        }
        setError('');
        // TODO: Add call API
        if (isRegisterMode) {
            console.log('Inscription avec', { email, password });
        } else {
            console.log('Connexion avec', { email, password });
        }
    };

    const toggleMode = () => {
        setIsRegisterMode(!isRegisterMode);
        setError('');
    };

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                <Dialog.Content className="modal-center w-[90%] max-w-md p-6 bg-layer-2 rounded-2xl shadow-xl">
                    <div className="flex justify-between items-center mb-4">
                        <Dialog.Title className="text-2xl font-bold">
                            {isRegisterMode ? 'Inscription' : 'Connexion'}
                        </Dialog.Title>
                        <Dialog.Close asChild>
                            <button className="btn btn-accent">
                                <X/>
                            </button>
                        </Dialog.Close>
                    </div>

                    <div className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 rounded border bg-layer-1"
                        />
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 rounded border bg-layer-1"
                        />

                        {error && <div className="text-red-500 text-sm">{error}</div>}

                        <button
                            onClick={handleSubmit}
                            className="btn btn-accent w-full py-2 rounded"
                        >
                            {isRegisterMode ? "S'inscrire" : 'Se connecter'}
                        </button>

                        <button
                            onClick={toggleMode}
                            className="btn w-full text-sm text-center hover:underline mt-2"
                        >
                            {isRegisterMode
                                ? "Déjà un compte ? Se connecter"
                                : "Pas encore de compte ? S'inscrire"}
                        </button>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default AuthModal;
