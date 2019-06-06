const ProductApi = require('../../src/server/products/ProductsApi')

function logger () {
  let Logger = {}
  Logger.debug = function () { }
  Logger.info = function () { }
  Logger.error = function () { }
  return Logger
}

function initApi () {
  return new ProductApi(logger())
}

describe('Test Products API', () => {
  it('test product insert into list', () => {
    let api = initApi()
    let callback = jest.fn()
    let model = {
      productName: 'test product',
      price: '1200',
      manufacturer: 'Test'
    }
    api.insert(model, callback)
    expect(callback).toHaveBeenCalled()
  })
})
