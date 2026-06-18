import { apiFetch } from "@lib/api/client"

type CreateChatBody = {
  firstName: string
  lastName: string
}

export type Chat = {
  id: string
  firstName: string
  lastName: string
  initials: string
  status: "open" | "closed"
  messages: Message[]
  createdAt: string
}

export type Message = {
  from: string
  text: string
  time: string
}

export async function createChat({ firstName, lastName }: CreateChatBody): Promise<Chat> {
  return await apiFetch("/chats", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName, lastName }),
  })
}

export async function getAllChats(): Promise<Chat[]> {
  return await apiFetch("/chats")
}

export async function getChatById(id: string): Promise<Chat> {
  return await apiFetch(`/chats/${id}`)
}
