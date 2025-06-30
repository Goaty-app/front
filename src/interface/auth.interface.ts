export interface Auth {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  refresh_token: string;
}

export type RefreshToken = Pick<AuthResponse, "refresh_token">;

export interface UserMe {
  id: number;
  email: string;
}
