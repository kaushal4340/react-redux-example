import React, {Component} from 'react'
import '../../styles/products.css'
import Layout from './Layout'
import autobind from 'react-autobind'
import { connect } from 'react-redux'
import { fetchProducts, removeProduct } from '../store/actions'
 
class ProductsContainer extends Component {
  constructor (props) {
    super(props)
    autobind(this)
  }

  componentDidMount () {
    // fetch call here
    this.props.fetchProducts()
  }

  removeProduct (productId) {
    this.props.removeProduct(productId)
  }

  render () {
    console.log('container render = ', this.props.products)
    return (
      <Layout
        removeProduct={this.removeProduct}
        products={this.props.products.products} />
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  removeProduct: (productId) => dispatch(removeProduct(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
