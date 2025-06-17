export const customFetcher = <TData, TVariables>({
  url,
  method,
  body,
}: any): Promise<TData> => {
  return fetch(url, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

async function baseFetcher<T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  body?: any,
  headers?: HeadersInit
): Promise<T> {
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(headers || {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || `Error ${res.status}`);
  }

  return res.json();
}

export const apiGet = <T>(url: string, headers?: HeadersInit) =>
  baseFetcher<T>(url, "GET", undefined, headers);

export const apiPost = <T>(url: string, body: any, headers?: HeadersInit) =>
  baseFetcher<T>(url, "POST", body, headers);

export const apiPut = <T>(url: string, body: any, headers?: HeadersInit) =>
  baseFetcher<T>(url, "PUT", body, headers);

export const apiDelete = <T>(url: string, headers?: HeadersInit) =>
  baseFetcher<T>(url, "DELETE", undefined, headers);
