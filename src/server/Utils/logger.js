const winston = require('winston')
const format = require('winston').format
const { combine, timestamp, label, printf } = format

const myFormat = printf(info => {
  return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`
})

const logger = winston.createLogger({
  format: combine(
    label({ label: 'ProductsStore' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new winston.transports.Console()
    // new winston.transports.File({ filename: 'combined.log' })
  ]
})

module.exports = logger
