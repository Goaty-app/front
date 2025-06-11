import { httpAuth } from '@/lib/HTTPClient';
import type { Auth, AuthResponse, RefreshToken } from '@/interface/auth.interface';

const TOKEN_KEY = 'auth_token';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

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
    } catch (error: any) {
        return { error: error.response?.data?.message || error.message || 'Network error', status: error.response?.status || 0 };
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
    } catch (error: any) {
        return { error: error.response?.data?.message || error.message || 'Network error', status: error.response?.status || 0 };
    }
};

export const logout = () => {
    removeToken();
};
