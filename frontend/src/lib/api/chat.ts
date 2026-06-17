import { apiFetch } from "@lib/api/client"

type CreateChatBody = {
  visitorId: string
  firstName: string
  lastName: string
}

type SendMessageBody = {
  chatId: string
  from: "visitor" | "admin"
  text: string
}

type Message = {
  from: "visitor" | "admin"
  text: string
  time: string
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

export async function sendMessage({ chatId, from, text }: SendMessageBody): Promise<Message> {
  return await apiFetch(`/chats/${chatId}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      text,
    }),
  })
}
