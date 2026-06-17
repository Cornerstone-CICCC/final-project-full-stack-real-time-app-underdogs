const chats = require("./models/chats")

let _io = null

function getIo() {
  return _io
}

function initSocket(io) {
  _io = io

  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id)

    // Visitor joins their specific chat room after ticket is created
    socket.on("visitor:join", ({ chatId }) => {
      if (!chatId) return
      socket.join(chatId)
    })

    // Admin joins the shared admin broadcast room
    socket.on("admin:join", () => {
      socket.join("admin")
    })

    // Either side sends a message
    socket.on("send_message", ({ chatId, from, text }) => {
      if (!chatId || !from || !text)
        return socket.emit("error", { message: "Missing required message fields." })

      const chat = chats.findById(chatId)
      if (!chat)
        return socket.emit("error", { message: "Chat not found." })
      if (chat.status === "closed")
        return socket.emit("error", { message: "Cannot send messages to a closed ticket." })

      const message = chats.addMessage(chatId, from, text)
      if (message) {
        io.to(chatId).emit("new_message", { chatId, message })
        io.to("admin").emit("new_message", { chatId, message })
        io.to("admin").emit("message:new", { chatId, message })
      }
    })

    // Admin closes a ticket
    socket.on("close_chat", (chatId) => {
      const chat = chats.updateStatus(chatId, "closed")
      if (chat) {
        io.to(chatId).emit("chat_closed", { chatId })
        io.to("admin").emit("chat:closed", { chatId })
      }
    })

    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id)
    })
  })
}

module.exports = { initSocket, getIo }