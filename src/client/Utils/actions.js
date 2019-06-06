import fetch from 'isomorphic-fetch'

const Actions = {
  insert (model) {
    fetch('http://localhost:3002/api/addproduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(model)
    })
    .then(response => {
      response.json().then(json => {
        window.location.replace('/')
      })
    })
    .catch(err => {
      console.log('error while insert = ', err)
    })
  },

  update (productId, model) {
    console.log('update this data : ', model)
    fetch(`http://localhost:3002/api/product/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(model)
    })
    .then(response => {
      response.json().then(json => {
        window.location.replace('/')
        // console.log('edit json = ', json)
      })
    })
    .catch(err => {
      console.log('error while update = ', err)
    })
  }
}

export default Actions
