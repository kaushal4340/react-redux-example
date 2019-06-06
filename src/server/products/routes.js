const express = require('express')
const router = express.Router()
const productsRouteHandler = require('./productsRouteHanlder')

router.route('/productlist')
  .get(productsRouteHandler.readAll)

router.route('/addproduct')
  .post(productsRouteHandler.insert)

router.route('/removeProduct/:productId')
  .delete(productsRouteHandler.remove)

router.route('/product/:productId')
  .get(productsRouteHandler.read)
  .patch(productsRouteHandler.update)

module.exports = router
