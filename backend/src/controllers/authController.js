const { findByEmail } = require("../models/users")
const crypto = require("crypto")

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex")
}

function login(req, res) {
  const { email, password } = req.body
  if (!email || !password)
    return res.status(400).json({ error: "Email and password are required" })

  const user = findByEmail(email)
  if (!user || user.passwordHash !== hashPassword(password))
    return res.status(401).json({ error: "Invalid credentials" })

  req.session.userId = user.id
  req.session.email = user.email
  res.json({ id: user.id, email: user.email })
}

function logout(req, res) {
  req.session.destroy(() => {
    res.clearCookie("connect.sid")
    res.json({ message: "Logged out" })
  })
}

function me(req, res) {
  if (!req.session.userId) return res.status(401).json({ error: "Not authenticated" })
  res.json({ id: req.session.userId, email: req.session.email })
}

module.exports = { login, logout, me }