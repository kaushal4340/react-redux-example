import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ProductApi from '../src/server/products/ProductsApi'

describe('Test React app component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

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

  it('tests readAll products', () => {
    let api = initApi(logger())
    let callback = jest.fn()
    api.readAll(callback)
    expect(callback).toHaveBeenCalled()
  })

  it('test read product by product id', () => {
    let api = initApi(logger())
    let callback = jest.fn()
    let id = 'b9d9b060-82d1-45d3-8f77-bb531c452c81'
    api.read(id, callback)
    expect(callback).toHaveBeenCalled()
  })
})
