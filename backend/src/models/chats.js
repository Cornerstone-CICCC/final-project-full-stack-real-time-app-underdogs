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

// Seed data
create("Sofia", "Martinez");
addMessage("1001", "Sofia Martinez", "Hi! I ordered a pizza an hour ago and it still hasn't arrived.");
addMessage("1001", "admin", "Hi Sofia! I'm sorry to hear that. Let me check your order status right away.");
addMessage("1001", "Sofia Martinez", "Order number is #4521. I've been waiting for over an hour now.");

create("James", "Okafor");
addMessage("1002", "James Okafor", "There was a missing topping on my pizza, I ordered extra cheese.");
addMessage("1002", "admin", "Sorry about that James! We'll send a replacement right away.");

create("Yuki", "Tanaka");
addMessage("1003", "Yuki Tanaka", "Wrong size delivered, I expected a large but got a medium.");

module.exports = { getAll, findById, create, addMessage, updateStatus };
