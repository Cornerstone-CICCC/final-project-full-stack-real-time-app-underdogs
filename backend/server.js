require('dotenv').config()
const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const authRoutes = require('./src/routes/auth')
const chatRoutes = require('./src/routes/chat')

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

const fs = require('fs')
let date_time = new Date()
let date = ('0' + date_time.getDate()).slice(-2)
let month = ('0' + (date_time.getMonth() + 1)).slice(-2)
let year = date_time.getFullYear()
let hours = date_time.getHours()
let minutes = date_time.getMinutes()
let seconds = date_time.getSeconds()
let dateWrite = ''
// prints date & time in YYYY-MM-DD HH:MM:SS format
dateWrite =
  'Hello, World! ' +
  year +
  '-' +
  month +
  '-' +
  date +
  ' ' +
  hours +
  ':' +
  minutes +
  ':' +
  seconds
fs.writeFile('src/models/logs.txt', dateWrite, 'utf8', (err) => {
  if (err) {
    console.log('Error writing logs file')
    throw err
  }
  console.log('File written successfully')
})
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
