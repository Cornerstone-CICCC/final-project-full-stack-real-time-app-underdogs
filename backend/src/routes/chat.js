const express = require("express")
const router = express.Router()
const requireAuth = require("../middleware/requireAuth")
const { getAllChats, getChatById, startChat, closeChat } = require("../controllers/chatController")

// Public — visitors start a chat
router.post("/", startChat)

// Admin only
router.get("/", requireAuth, getAllChats)
router.get("/:id", requireAuth, getChatById)
router.patch("/:id/close", requireAuth, closeChat)

module.exports = router
