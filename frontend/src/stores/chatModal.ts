import { atom } from "nanostores"

export const isModalOpen = atom<boolean>(false)
export const chatModalStatus = atom<"register" | "chat">("register")
export const currentChatId = atom<string | null>(null)
