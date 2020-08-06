import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { InputGroup } from 'react-bootstrap'

const Cart = ({ cart, removeFromCart }) => {
  console.log(cart)

  const handleChange = (cart) => {
    removeFromCart(cart)
  }
  return (
    <>
      <Header />
      <div className="container my-3">
        <h1>Cart</h1>
        <ul>
          {cart && cart.map((item, key) =>
            <li key={key}>
              <InputGroup.Checkbox checked={item.completed} onChange={handleChange(item)} />
              {item.title}
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = {
  // removeFromCart ()
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
