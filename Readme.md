## Link for Live Demo:
https://stupid-slow-pizza.netlify.app/

## Getting Started

### Initial Setup (first time only)

Run the setup script from the project root. This installs all dependencies and copies `.env.example` files to `.env` in each directory.

```bash
./initial.sh
```

What it does:
- `npm install` in root, `frontend/`, `backend/`, and `openapi/`
- Copies `frontend/.env.example` → `frontend/.env`
- Copies `frontend/.env.mock.example` → `frontend/.env.mock`
- Copies `backend/.env.example` → `backend/.env`

> Make sure to fill in `backend/.env` with your own `SESSION_SECRET` before running the app.

---

### Local Development

Run from the **project root**:

```bash
# With real backend (normal development)
npm run dev

# Without backend — uses Prism mock server instead
npm run dev:mock
```

---

### Port Reference

| Service | Port | URL |
|---|---|---|
| Frontend (Astro) | 4321 | http://localhost:4321 |
| Backend (Express) | 3000 | http://localhost:3000 |
| Prism mock server | 4010 | http://localhost:4010 |
| Swagger UI | 8080 | http://localhost:8080 |

---

### Code Formatting

This repo uses a shared Prettier config at the project root (`.prettierrc`). You do **not** need separate configs in `frontend/` or `backend/` — Prettier picks up the root config automatically.

Install the Prettier VS Code extension (`esbenp.prettier-vscode`) and enable format-on-save. The `.vscode/settings.json` in this repo turns that on and requires a project config so personal editor settings do not override the team standard.

From the project root:

```bash
npm run format        # auto-fix formatting
npm run format:check  # check only (useful in CI)
```

Key rules: double quotes, no semicolons, 100-character line width.

---
