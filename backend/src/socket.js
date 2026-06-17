const chats = require("./models/chats")

function initSocket(io) {
  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id)

    // Visitor or admin joins a chat room
    socket.on("join_chat", (chatId) => {
      socket.join(chatId)
    })

    // Either side sends a message
    socket.on("send_message", ({ chatId, from, text }) => {
      const message = chats.addMessage(chatId, from, text)
      if (message) {
        io.to(chatId).emit("new_message", { chatId, message })
        // Notify admin dashboard of activity
        io.emit("chat_updated", chats.findById(chatId))
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
