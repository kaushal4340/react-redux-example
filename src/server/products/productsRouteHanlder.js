const ProductsApi = require('./ProductsApi')
const logger = require('../Utils/logger')
let productsApi = new ProductsApi(logger)

const productsRouteHandler = {
  read (req, res) {
    const {productId} = req.params
    productsApi.read(productId, (err, product) => {
      if (err) res.status(500).json({error: err})
      else res.status(200).json({data: product})
    })
  },

  readAll (req, res) {
    productsApi.readAll((products) => {
      logger.info(`fetch all products: ${JSON.stringify(products)}`)
      res.status(200).json({data: products})
    })
  },

  insert (req, res) {
    logger.info(`insert new product ${JSON.stringify(req.body)}`)
    productsApi.insert(req.body, (err) => {
      if (err) res.status(500).json({error: err})
      else res.send({status: 'success'})
    })
  },

  remove (req, res) {
    const {productId} = req.params
    logger.info(`remove product by product id: ${productId}`)
    productsApi.remove(productId, (err, products) => {
      if (err) res.status(500).json({error: err})
      else res.status(200).json({data: products})
    })
  },

  update (req, res) {
    const {productId} = req.params
    logger.info(`update product by prodct id: ${productId} & ${JSON.stringify(req.body)}`)
    productsApi.update(productId, req.body, (err, products) => {
      if (err) res.status(500).json({error: err})
      else res.status(200).json({data: products})
    })
  }
}

module.exports = productsRouteHandler
