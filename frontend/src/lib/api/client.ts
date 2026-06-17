export class ApiError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message)
    this.name = "ApiError"
  }
}

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  console.log("✅️ URL!!!!!", import.meta.env.PUBLIC_API_URL, "| MODE:", import.meta.env.MODE)

  const res = await fetch(`${import.meta.env.PUBLIC_API_URL}${path}`, init)

  if (!res.ok) {
    const message = await res.text().catch(() => res.statusText)
    throw new ApiError(res.status, message)
  }

  return res.json() as Promise<T>
}
