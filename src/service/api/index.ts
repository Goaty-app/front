import axios, { AxiosRequestConfig } from 'axios';

export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  status: number;
}

export async function apiFetch<T = unknown>(
  url: string,
  options?: AxiosRequestConfig
): Promise<ApiResponse<T>> {
  try {
    const response = await axios({
      url,
      ...options,
    });
    return { data: response.data as T, status: response.status };
  } catch (error) {
    let errorMsg = 'Network error';
    let status = 0;
    if (axios.isAxiosError(error)) {
      status = error.response?.status ?? 0;
      if (typeof error.response?.data === 'object' && error.response?.data !== null && 'message' in error.response.data) {
        errorMsg = (error.response.data as { message: string }).message;
      } else if (typeof error.response?.data === 'string') {
        errorMsg = error.response.data;
      } else if (error.message) {
        errorMsg = error.message;
      }
    }
    return { error: errorMsg, status };
  }
}
