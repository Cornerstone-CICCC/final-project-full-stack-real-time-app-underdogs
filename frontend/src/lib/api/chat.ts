import { apiFetch } from "@lib/api/client"

type CreateChatBody = {
  visitorId: string
  firstName: string
  lastName: string
}

type SencMessageBody = {
  from: string
  text: string
}

export async function createChat({
  visitorId,
  firstName,
  lastName,
}: CreateChatBody): Promise<{ chatId: string }> {
  return await apiFetch("/chats", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      visitorId,
      firstName,
      lastName,
    }),
  })
}

export async function sendMessage({ from, text }: SencMessageBody) {}
