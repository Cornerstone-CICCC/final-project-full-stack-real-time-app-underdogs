const chats = [];
let nextId = 1001;

function getAll() {
  return chats;
}

function findById(id) {
  return chats.find((c) => c.id === id);
}

function create(firstName, lastName) {
  const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();
  const chat = {
    id: String(nextId++),
    firstName,
    lastName,
    initials,
    status: 'open',
    messages: [],
    createdAt: new Date().toISOString(),
  };
  chats.push(chat);
  return chat;
}

function addMessage(chatId, from, text) {
  const chat = findById(chatId);
  if (!chat) return null;
  const message = { from, text, time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) };
  chat.messages.push(message);
  return message;
}

function updateStatus(chatId, status) {
  const chat = findById(chatId);
  if (chat) chat.status = status;
  return chat;
}

module.exports = { getAll, findById, create, addMessage, updateStatus };