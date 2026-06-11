const chats = require("../models/chats")

function getAllChats(req, res) {
  res.json(chats.getAll())
}

function getChatById(req, res) {
  const chat = chats.findById(req.params.id)
  if (!chat) return res.status(404).json({ error: "Chat not found" })
  res.json(chat)
}

function startChat(req, res) {
  const { visitorName } = req.body
  if (!visitorName) return res.status(400).json({ error: "Visitor name is required" })
  const chat = chats.create(visitorName)
  res.status(201).json(chat)
}

function closeChat(req, res) {
  const chat = chats.updateStatus(req.params.id, "closed")
  if (!chat) return res.status(404).json({ error: "Chat not found" })
  res.json(chat)
}

module.exports = { getAllChats, getChatById, startChat, closeChat }
