
class ProductsApi {
  constructor (logger) {
    this.logger = logger
    // in memory product list
    this.products = [{
      id: 1539256459775,
      productName: 'Galaxy S9',
      price: '45000',
      manufacturer: 'samsung'
    }, {
      id: 1539256454612,
      productName: 'iphoneX',
      price: '100000',
      manufacturer: 'Apple'
    }]
  }

  read (productId, callback) {
    let id = parseInt(productId)
    let product = this.products.filter((product) => product.id === id)
    this.logger.info(`Read product by product id : ${JSON.stringify(product)}`)
    callback(null, product)
  }

  readAll (callback) {
    callback(this.products)
  }

  insert (model, callback) {
    try {
      this.logger.info(`Insert new product : ${JSON.stringify(model)}`)
      model.id = new Date().valueOf()
      this.products.push(model)
      callback()
    } catch (err) {
      callback(err)
    }
  }

  remove (productId, callback) {
    try {
      let id = parseInt(productId)
      this.products = this.products.filter((product) => product.id !== id)
      callback(null, this.products)
    } catch (err) {
      callback(err)
    }
  }

  update (productId, model, callback) {
    try {
      let id = parseInt(productId)
      this.products = this.products.map(product => {
        if (product.id === id) {
          return {
            id: id,
            productName: model.productName,
            price: model.price,
            manufacturer: model.manufacturer
          }
        }
        return product
      })
      callback(null, 'sucess')
    } catch (err) {
      callback(err)
    }
  }
}

module.exports = ProductsApi
