import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import Header from './Header';
import { connect } from 'react-redux';
import { getTodo, addToCart, removeFromCart } from "../constants/actions";
import { InputGroup } from 'react-bootstrap';


const TodoItem = ({ todo, loading, getTodo, addToCart, removeFromCart }) => {
  const { id } = useParams();
  const [check, setCheck] = useState(todo.completed)

  useEffect(() => {
    getTodo(id)
  }, [])

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const handleChange = () => {
    console.log("HELLO", check)
    setCheck(!check)
    // console.log("checked : ", check)
    if (check === true) {
      todo.completed = true
      addToCart(todo)
    } else if (check === false) {
      todo.completed = false;
      removeFromCart()
    }
    console.log("HI", todo.completed)
  }

  return (
    <>
      <Header />
      <div className="container my-3">
        <h1>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox checked={check} onChange={handleChange} />
            <span className="mx-4">{todo.title}</span>
          </InputGroup>

        </h1>
      </div>
    </>
  )
}


const mapStateToProps = state => ({
  todo: state.todo
})

const mapDispatchToProps = {
  getTodo,
  addToCart,
  removeFromCart
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
