import "dotenv/config"
import express from "express"
import http from "http"
import { Server } from "socket.io"
import session from "express-session"
import cookieParser from "cookie-parser"
import cors, { CorsOptions } from "cors"

import authRoutes from "./src/routes/auth"
import chatRoutes from "./src/routes/chat"
import { initSocket } from "./src/socket"

const app = express()
const httpServer = http.createServer(app)

const corsOrigin =
  process.env.NODE_ENV === "production"
    ? process.env.FRONTEND_URL
    : (origin: string | undefined, cb: (err: Error | null, allow?: boolean) => void) => cb(null, true)

const io = new Server(httpServer, {
  cors: { origin: corsOrigin, credentials: true },
})

const corsOptions: CorsOptions = {
  origin: corsOrigin,
  credentials: true,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use(
  session({
    secret: process.env.SESSION_SECRET ?? "dev_secret",
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 },
  })
)

app.use("/api/auth", authRoutes)
app.use("/api/chats", chatRoutes)

initSocket(io)

const PORT = process.env.PORT ?? 3000
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`))
