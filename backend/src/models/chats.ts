export interface Message {
  from: string
  text: string
  time: string
}

export interface Chat {
  id: string
  firstName: string
  lastName: string
  initials: string
  status: "open" | "closed"
  messages: Message[]
  createdAt: string
}

const chats: Chat[] = []
let nextId = 1001

export function getAll(): Chat[] {
  return chats
}

export function findById(id: string): Chat | undefined {
  return chats.find((c) => c.id === id)
}

// Create a new chat
export function create(firstName: string, lastName: string): Chat {
  // Generate initials
  const initials = `${firstName[0]}${lastName[0]}`.toUpperCase()
  // Create a new chat
  const chat: Chat = {
    id: String(nextId++),
    firstName,
    lastName,
    initials,
    status: "open",
    messages: [],
    createdAt: new Date().toISOString(),
  }
  // Add the chat to the list
  chats.push(chat)
  // Return the new chat
  return chat
}

// Add a message to a chat
export function addMessage(chatId: string, from: string, text: string): Message | null {
  // Find the chat by ID
  const chat = findById(chatId)
  if (!chat) return null
  // Create a new message
  const message: Message = {
    from,
    text,
    time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
  }
  // Add the message to the chat
  chat.messages.push(message)
  // Return the new message
  return message
}

// Update the status of a chat
export function updateStatus(chatId: string, status: Chat["status"]): Chat | null {
  // Find the chat by ID
  const chat = findById(chatId)
  // Update the status of the chat
  if (chat) chat.status = status
  return chat ?? null
}

// Seed data
create("Sofia", "Martinez")
addMessage(
  "1001",
  "Sofia Martinez",
  "Hi! I ordered a pizza an hour ago and it still hasn't arrived."
)
addMessage(
  "1001",
  "admin",
  "Hi Sofia! I'm sorry to hear that. Let me check your order status right away."
)
addMessage(
  "1001",
  "Sofia Martinez",
  "Order number is #4521. I've been waiting for over an hour now."
)

create("James", "Okafor")
addMessage(
  "1002",
  "James Okafor",
  "There was a missing topping on my pizza, I ordered extra cheese."
)
addMessage("1002", "admin", "Sorry about that James! We'll send a replacement right away.")

create("Yuki", "Tanaka")
addMessage("1003", "Yuki Tanaka", "Wrong size delivered, I expected a large but got a medium.")
