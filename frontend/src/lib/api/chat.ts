import { apiFetch } from '@lib/api/client';

export async function createChat(): Promise<{ id: string }>  {
  return await apiFetch('/chats', {
    method: 'POST'
  })
}
