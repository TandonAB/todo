import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const TodoItem = () => {
  const { id } = useParams();

  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchTodo = async () => {
      setLoading(true);
      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
      setTodo(res.data);
      setLoading(false);
    };

    fetchTodo();
  }, []);

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

export default TodoItem
