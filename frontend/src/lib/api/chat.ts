import { apiFetch } from "@lib/api/client"

export async function createChat(visitorId: string): Promise<{ id: string }> {
  return await apiFetch("/chats", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ visitorId }),
  })
}
