import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import { connect } from 'react-redux';
import { getTodo } from "../constants/actions";


const TodoItem = ({ todo, loading, getTodo }) => {
  const { id } = useParams();

  useEffect(() => {
    getTodo(id)
  }, [getTodo])

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Header />
      <div className="container my-3">
        <h1>{todo.title}</h1>
      </div>
    </>
  )
}


const mapStateToProps = state => ({
  todo: state.todo
})

const mapDispatchToProps = {
  getTodo
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
