import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ProductsContainer from './products/ProductsContainer'
import ProductRegister from './products/ProductRegister'
import EditProduct from './products/EditProduct'

class AppRouter extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <nav className='nav'>
            <span className='nav-link active'><Link to='/'>Products</Link></span>
            <span className='nav-link'><Link to='/addproduct'>Add Product</Link></span>
          </nav>

          <hr />

          <Route exact path='/' component={ProductsContainer} />
          <Route path='/products' component={ProductsContainer} />
          <Route path='/addproduct' component={ProductRegister} />
          <Route path='/edit/:id' component={EditProduct} />
        </div>
      </Router>
    )
  }
}

export default AppRouter
