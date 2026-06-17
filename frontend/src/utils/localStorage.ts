const VISITOR_ID_KEY = 'visitorId';

export function getOrCreateVisitorId(): string {
  const existing = localStorage.getItem(VISITOR_ID_KEY);
  if (existing) return existing;

  const newId = `visitor_${Math.random().toString(36).slice(2, 8)}`;
  localStorage.setItem(VISITOR_ID_KEY, newId);
  return newId;
}
