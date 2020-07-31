import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'

const Cart = ({ cart }) => {
  console.log(cart)
  return (
    <>
      <Header />
      <div className="container my-3">
        <h1>Cart</h1>
        <ul>
          {cart && cart.map((item, key) =>
            <li key={key}>{cart.title}</li>
          )}
        </ul>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(mapStateToProps, null)(Cart)
