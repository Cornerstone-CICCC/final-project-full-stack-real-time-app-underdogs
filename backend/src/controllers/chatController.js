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
  const { firstName, lastName } = req.body
  if (!firstName || !lastName)
    return res.status(400).json({ error: "firstName and lastName are required" })
  const chat = chats.create(firstName, lastName)
  res.status(201).json(chat)
}

function closeChat(req, res) {
  const chat = chats.updateStatus(req.params.id, "closed")
  if (!chat) return res.status(404).json({ error: "Chat not found" })
  res.json(chat)
}

module.exports = { getAllChats, getChatById, startChat, closeChat }
