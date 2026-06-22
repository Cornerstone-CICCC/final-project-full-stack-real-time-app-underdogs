import { Request, Response } from "express"
import * as chats from "../models/chats"
import { getIo } from "../socket"

// Get all chats
export function getAllChats(req: Request, res: Response): void {
  res.json(chats.getAll())
}

// Get a chat by ID
export function getChatById(req: Request, res: Response): void {
  const chat = chats.findById(String(req.params.id))
  if (!chat) {
    res.status(404).json({ error: "Chat not found" })
    return
  }
  res.json(chat)
}

// Start a chat
export function startChat(req: Request, res: Response): void {
  const { firstName, lastName } = req.body as { firstName?: string; lastName?: string }
  if (!firstName || !lastName) {
    res.status(400).json({ error: "firstName and lastName are required" })
    return
  }
  // Create a new chat
  const chat = chats.create(firstName, lastName)
  // Notify admin dashboard of new ticket
  const io = getIo()
  if (io) io.to("admin").emit("chat:new", chat)
  res.status(201).json(chat)
}

// Close a chat
export function closeChat(req: Request, res: Response): void {
  const chat = chats.updateStatus(String(req.params.id), "closed")
  if (!chat) {
    res.status(404).json({ error: "Chat not found" })
    return
  }
  res.json(chat)
}
