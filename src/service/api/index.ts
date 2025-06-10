// src/service/api/index.ts

export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  status: number;
}

export async function apiFetch<T = any>(
  url: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, options);
    const contentType = response.headers.get('content-type');
    let data: any = undefined;
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }
    if (!response.ok) {
      return { error: data?.message || data || 'Unknown error', status: response.status };
    }
    return { data, status: response.status };
  } catch (error: any) {
    return { error: error.message || 'Network error', status: 0 };
  }
}
