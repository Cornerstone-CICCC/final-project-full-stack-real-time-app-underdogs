const fs = require('fs')
function writeLog(log) {
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
    seconds +
    ' ' +
    log +
    '\n'
  fs.appendFile('src/models/logs.txt', dateWrite, 'utf8', (err) => {
    if (err) {
      console.log('Error writing logs file')
      throw err
    }
    console.log('File written successfully')
  })
}
module.exports = writeLog
