import crypto from "crypto"

export interface User {
  id: string
  email: string
  passwordHash: string
}

function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex")
}

const users: User[] = [
  { id: "1", email: "admin@admin.com", passwordHash: hashPassword("admin") },
]

export function findByEmail(email: string): User | undefined {
  return users.find((u) => u.email === email)
}
