const users = require("../models/users")
const crypto = require("crypto")

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex")
}

function register(req, res) {
  const { username, password } = req.body
  if (!username || !password)
    return res.status(400).json({ error: "Username and password are required" })
  if (users.findByUsername(username))
    return res.status(409).json({ error: "Username already taken" })

  const user = users.create(username, hashPassword(password))
  req.session.userId = user.id
  req.session.username = user.username
  res.status(201).json({ id: user.id, username: user.username })
}

function login(req, res) {
  const { username, password } = req.body
  if (!username || !password)
    return res.status(400).json({ error: "Username and password are required" })

  const user = users.findByUsername(username)
  if (!user || user.passwordHash !== hashPassword(password))
    return res.status(401).json({ error: "Invalid credentials" })

  req.session.userId = user.id
  req.session.username = user.username
  res.json({ id: user.id, username: user.username })
}

function logout(req, res) {
  req.session.destroy(() => {
    res.clearCookie("connect.sid")
    res.json({ message: "Logged out" })
  })
}

function me(req, res) {
  if (!req.session.userId) return res.status(401).json({ error: "Not authenticated" })
  res.json({ id: req.session.userId, username: req.session.username })
}

module.exports = { register, login, logout, me }
