const writeLog = require('../models/loging.js')
function requireAuth(req, res, next) {
  if (!req.session.userId) {
    writeLog(`Error:Authentication required ${JSON.stringify(req.body)}`)
    return res.status(401).json({ error: 'Authentication required' })
  }
  next()
}

module.exports = requireAuth
