const crypto = require("crypto")

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex")
}

// Single fixed admin account — pre-seeded on startup
const users = [
  { id: "1", email: "admin@admin.com", passwordHash: hashPassword("admin") },
]

function findByEmail(email) {
  return users.find((u) => u.email === email)
}

module.exports = { findByEmail }
