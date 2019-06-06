import React from 'react'
import ProductRegister from './ProductRegister'

class EditProduct extends React.Component {
  render () {
    const productId = window && window.location.pathname.replace('/edit/', '')
    return (
      <ProductRegister editMode productId={productId} />
    )
  }
}

export default EditProduct
