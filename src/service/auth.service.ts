import { httpAuth } from '@/lib/HTTPClient';
import type { Auth, AuthResponse, RefreshToken } from '@/interface/auth.interface';

const TOKEN_KEY = 'auth_token';

export const getToken = () => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(TOKEN_KEY);
};

export const setToken = (token: string) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(TOKEN_KEY, token);
    }
};

export const removeToken = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(TOKEN_KEY);
    }
};

export const login = async (auth: Auth) => {
    try {
        const response = await httpAuth.post<AuthResponse>('/login_check', auth, {
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.data.token) {
            setToken(response.data.token);
        }
        return { data: response.data, status: response.status };
    } catch (error: unknown) {
        if (error && typeof error === 'object' && 'response' in error) {
            const err = error as { response?: { data?: { message?: string }, status?: number }, message?: string };
            return { error: err.response?.data?.message || err.message || 'Network error', status: err.response?.status || 0 };
        }
        return { error: 'Network error', status: 0 };
    }
};

export const refreshToken = async (refresh_token: RefreshToken) => {
    try {
        const response = await httpAuth.post<AuthResponse>('/token/refresh', refresh_token, {
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.data.token) {
            setToken(response.data.token);
        }
        return { data: response.data, status: response.status };
    } catch (error: unknown) {
        if (error && typeof error === 'object' && 'response' in error) {
            const err = error as { response?: { data?: { message?: string }, status?: number }, message?: string };
            return { error: err.response?.data?.message || err.message || 'Network error', status: err.response?.status || 0 };
        }
        return { error: 'Network error', status: 0 };
    }
};

export const logout = () => {
    removeToken();
};
