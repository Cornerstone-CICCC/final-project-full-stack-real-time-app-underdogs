import crypto from "crypto"
import { Request, Response } from "express"
import { findByEmail } from "../models/users"

// Hash the password
function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex")
}

// Login controller
export function login(req: Request, res: Response): void {
  const { email, password } = req.body as { email?: string; password?: string }
  // Guard: Missing required fields
  if (!email || !password) {
    res.status(400).json({ error: "Email and password are required" })
    return
  }
  // Find the user by email
  const user = findByEmail(email)
  // Guard: Invalid credentials
  if (!user || user.passwordHash !== hashPassword(password)) {
    res.status(401).json({ error: "Invalid credentials" })
    return
  }
  // Set the session user ID and email
  req.session.userId = user.id
  req.session.email = user.email
  res.json({ id: user.id, email: user.email })
}

// Logout controller
export function logout(req: Request, res: Response): void {
  req.session.destroy(() => {
    res.clearCookie("connect.sid")
    res.json({ message: "Logged out" })
  })
}

// Me controller
export function me(req: Request, res: Response): void {
  // Guard: Not authenticated
  if (!req.session.userId) {
    res.status(401).json({ error: "Not authenticated" })
    return
  }
  // Return the user ID and email
  res.json({ id: req.session.userId, email: req.session.email })
}
