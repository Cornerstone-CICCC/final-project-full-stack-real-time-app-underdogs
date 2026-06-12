// In-memory admin user store
const users = [];

function findByUsername(username) {
  return users.find((u) => u.username === username);
}

function create(username, passwordHash) {
  const user = { id: Date.now().toString(), username, passwordHash };
  users.push(user);
  return user;
}

module.exports = { findByUsername, create };
