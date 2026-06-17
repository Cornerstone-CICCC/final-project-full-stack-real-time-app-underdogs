require('dotenv').config()
const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const authRoutes = require('./src/routes/auth')
const chatRoutes = require('./src/routes/chat')

const fs = require('fs')
fs.writeFile('src/models/logs.txt', '', (err) => {
  if (err) throw err
  console.log('File saved successfully')
})

const writeLog = require('./src/models/loging')

const { initSocket } = require('./src/socket')

const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:4321',
    credentials: true,
  },
})

app.use(express.json())
app.use(cookieParser())

writeLog('Hello world')

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'dev_secret',
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 }, // 24 hours
  }),
)

app.use('/api/auth', authRoutes)
app.use('/api/chats', chatRoutes)

initSocket(io)

const PORT = process.env.PORT || 3000
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`))
