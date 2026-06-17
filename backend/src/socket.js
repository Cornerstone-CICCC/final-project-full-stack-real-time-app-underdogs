const chats = require("./models/chats")

function initSocket(io) {
  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id)

    // Visitor or admin joins a chat room
    socket.on("join_chat", (chatId) => {
      socket.join(chatId)
    })

    // Sending and receiving messages
    socket.on("send_message", ({ chatId, from, text }) => {
      if (!chatId || !from || !text)
        return socket.emit("error", { message: "Missing required message fields." })

      const chat = chats.findById(chatId)
      
      // Check if ticket exists and if its still open
      if (!chat)
        return socket.emit("error", { message: "Chat not found." })
      if (chat.status === "closed")
        return socket.emit("error", { message: "Cannot send messages to a closed ticket." })

      // Save message and notify other users
      const message = chats.addMessage(chatId, from, text)
      if (message) {
        io.to(chatId).emit("new_message", { chatId, message })
      }
    })

    // Admin closes a chat
    socket.on("close_chat", (chatId) => {
      const chat = chats.updateStatus(chatId, "closed")
      if (chat) io.to(chatId).emit("chat_closed", { chatId })
    })

    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id)
    })
  })
}

module.exports = { initSocket }
