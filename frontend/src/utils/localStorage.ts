const VISITOR_KEY = "visitor"
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000 // 30days

type VisitorData = {
  visitorId: string
  firstName: string
  lastName: string
  expiresAt: number
}

export type Visitor = Omit<VisitorData, "expiresAt">

export function getVisitor(): Visitor | null {
  const raw = localStorage.getItem(VISITOR_KEY)
  if (!raw) return null

  const data: VisitorData = JSON.parse(raw)
  if (Date.now() > data.expiresAt) {
    localStorage.removeItem(VISITOR_KEY)
    return null
  }

  return {
    visitorId: data.visitorId,
    firstName: data.firstName,
    lastName: data.lastName,
  }
}

export function saveVisitor(firstName: string, lastName: string): Visitor {
  const visitorId = getVisitor()?.visitorId ?? crypto.randomUUID()
  const data: VisitorData = {
    visitorId,
    firstName,
    lastName,
    expiresAt: Date.now() + THIRTY_DAYS_MS,
  }
  localStorage.setItem(VISITOR_KEY, JSON.stringify(data))
  return { visitorId, firstName, lastName }
}

export function clearVisitor(): void {
  localStorage.removeItem(VISITOR_KEY)
}
