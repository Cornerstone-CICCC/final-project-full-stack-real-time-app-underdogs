const chats = require("./models/chats")

const fs = require("fs")
function writeLog(log) {
  let date_time = new Date()
  let date = ("0" + date_time.getDate()).slice(-2)
  let month = ("0" + (date_time.getMonth() + 1)).slice(-2)
  let year = date_time.getFullYear()
  let hours = date_time.getHours()
  let minutes = date_time.getMinutes()
  let seconds = date_time.getSeconds()
  let dateWrite = ""
  // prints date & time in YYYY-MM-DD HH:MM:SS format
  dateWrite =
    year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + " " + log
  fs.appendFile("models/logs.txt", dateWrite, "utf8", (err) => {
    if (err) {
      console.log("Error writing logs file")
      throw err
    }
    console.log("File written successfully")
  })
}

function initSocket(io) {
  io.on("connection", (socket) => {
    writeLog(`[Socket] User connected: ${socket.id}`)

    // Open a ticket (join a room)
    // Both the Visitor and the Admin should emit this when they open a specific chat
    // admin emits when clicking on still open ticket, and user when starting chat
    socket.on("join_chat", (chatId) => {
      if (!chatId) return
      socket.join(chatId)
      writeLog(`[Socket] Socket ${socket.id} joined chat: ${chatId}`)
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
    // Emitted by the admin so the user's UI can be disabled immediately in frontend
    // for user - send message is disabled, and for admin - send message and close ticket is disabled
    socket.on("close_chat", (chatId) => {
      const chat = chats.updateStatus(chatId, "closed")
      if (chat) io.to(chatId).emit("chat_closed", { chatId })
    })

    socket.on("disconnect", () => {
      writeLog(`[Socket] User disconnected: ${socket.id}`)
    })
  })
}

module.exports = { initSocket }
