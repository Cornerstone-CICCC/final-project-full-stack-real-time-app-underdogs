import { Router } from "express"
import { requireAuth } from "../middleware/requireAuth"
import { getAllChats, getChatById, startChat, closeChat } from "../controllers/chatController"

const router = Router()

// Public — visitors start a chat
router.post("/", startChat)

// Admin only
router.get("/", requireAuth, getAllChats)
router.get("/:id", requireAuth, getChatById)
router.patch("/:id/close", requireAuth, closeChat)

export default router
