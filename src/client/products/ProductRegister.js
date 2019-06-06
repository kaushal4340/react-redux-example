import React from 'react'
import Formsy from 'formsy-react'
import {Label, Button} from 'reactstrap'
import autobind from 'react-autobind'
import Input from '../shared/Input'
import Actions from '../Utils/actions'
import fetch from 'isomorphic-fetch'

class ProductRegister extends React.Component {
  constructor (props) {
    super(props)
    console.log('prosp => ', props)
    autobind(this)
    this.state = {
      product: [],
      editMode: props.editMode
    }
    this.loadData()
  }

  loadData () {
    console.log('didmount = ', this.state.editMode)
    if (this.state.editMode) {
      fetch(`http://localhost:3002/api/product/${this.props.productId}`)
      .then(response => {
        response.json().then(json => {
          console.log('edit product = ', json)
          this.setState({ product: json.data })
        })
      })
    }
  }

  submit (model) {
    if (this.state.editMode) {
      Actions.update(this.props.productId, model)
    } else {
      Actions.insert(model)
    }
  }

  render () {
    let {editMode} = this.props
    let {product} = this.state
    let productName, price, manufacturer
    if (editMode && this.state.product[0]) {
      productName = product[0].productName
      price = product[0].price
      manufacturer = product[0].manufacturer
    }
    return (
      <div className='registerform'>
        <h2>{(editMode) ? 'Edit Product' : 'Register Product'}</h2>
        <Formsy onValidSubmit={this.submit}>
          <Label>Product Name *</Label>
          <Input required name='productName' value={productName} type='text' />
          <Label>Product Price</Label>
          <Input name='price' type='text' value={price} />
          <Label>Manufacturer</Label>
          <Input name='manufacturer' value={manufacturer} type='text' />
          <hr />
          <Button>{(editMode) ? 'UPDATE' : 'SUBMIT'}</Button>
        </Formsy>
      </div>

    )
  }
}

export default ProductRegister
