import { Server, Socket } from "socket.io"
import * as chats from "./models/chats"

let _io: Server | null = null

export function getIo(): Server | null {
  return _io
}

export function initSocket(io: Server): void {
  _io = io

  io.on("connection", (socket: Socket) => {
    console.log("Socket connected:", socket.id)

    // Visitor joins their specific chat room after ticket is created
    socket.on("visitor:join", ({ chatId }: { chatId: string }) => {
      if (!chatId) return
      socket.join(chatId)
    })

    // Admin joins the shared admin broadcast room
    socket.on("admin:join", () => {
      socket.join("admin")
    })

    // Either side sends a message
    socket.on(
      "send_message",
      ({ chatId, from, text }: { chatId: string; from: string; text: string }) => {
        // Guard: Missing required message fields
        if (!chatId || !from || !text) {
          socket.emit("error", { message: "Missing required message fields." })
          return
        }
        // Guard: Chat not found
        const chat = chats.findById(chatId)
        if (!chat) {
          socket.emit("error", { message: "Chat not found." })
          return
        }
        // Cannot send messages to a closed ticket
        if (chat.status === "closed") {
          socket.emit("error", { message: "Cannot send messages to a closed ticket." })
          return
        }
        // Add message to the chat
        const message = chats.addMessage(chatId, from, text)
        if (message) {
          io.to(chatId).emit("new_message", { chatId, message })
          io.to("admin").emit("new_message", { chatId, message })
          io.to("admin").emit("message:new", { chatId, message })
        }
      }
    )

    // Admin closes a ticket
    socket.on("close_chat", (chatId: string) => {
      const chat = chats.updateStatus(chatId, "closed")
      if (chat) {
        io.to(chatId).emit("chat_closed", { chatId })
        io.to("admin").emit("chat:closed", { chatId })
      }
    })

    // Disconnect event
    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id)
    })
  })
}
