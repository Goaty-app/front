export interface Auth {
    email: string,
    password: string,
}

export interface AuthResponse {
    token: string,
    refresh_token: string;
}

