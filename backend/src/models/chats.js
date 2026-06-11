// In-memory chat session store
const chats = [];

function getAll() {
  return chats;
}

function findById(id) {
  return chats.find((c) => c.id === id);
}

function create(visitorName) {
  const chat = {
    id: Date.now().toString(),
    visitorName,
    status: 'open',
    messages: [],
    createdAt: new Date().toISOString(),
  };
  chats.push(chat);
  return chat;
}

function addMessage(chatId, sender, text) {
  const chat = findById(chatId);
  if (!chat) return null;
  const message = { sender, text, timestamp: new Date().toISOString() };
  chat.messages.push(message);
  return message;
}

function updateStatus(chatId, status) {
  const chat = findById(chatId);
  if (chat) chat.status = status;
  return chat;
}

module.exports = { getAll, findById, create, addMessage, updateStatus };
