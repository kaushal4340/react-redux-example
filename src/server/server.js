const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const productsRoutes = require('./products/routes')
const bodyParser = require('body-parser')
const PORT = 3002

try {
  const app = express()
  // protects from well-known web vulnerabilities by setting HTTP headers appropriately.
  app.use(helmet())

  // enable CORS for all origins for now
  app.use(cors())

  // body parser middleware to get req.body
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  // routes
  app.get('/test', function (req, res) {
    res.send('Route is working!')
  })

  // products subapp
  app.use('/api', productsRoutes)

  // start server
  app.listen(PORT, () => {
    console.log('Node Express server listening on ', PORT)
  })
} catch (error) {
  // error
  console.log('Unable to start server : ', error)
}
