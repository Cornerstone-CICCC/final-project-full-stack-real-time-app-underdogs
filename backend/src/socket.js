function initSocket(io) {
  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id)

    // Visitor or admin joins a chat room
    socket.on("join_chat", (chatId) => {
      socket.join(chatId)
    })

    // Either side sends a message
    socket.on("send_message", ({ chatId, sender, text }) => {
      // TODO: Implement message sending logic
    })

    // Admin closes a chat
    socket.on("close_chat", (chatId) => {
      // TODO: Implement chat closing logic
    })
  })
}

module.exports = { initSocket }
