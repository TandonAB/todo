import React, { Component, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Header from './Header';
import TodoList from './TodoList';
import Pagination from './Pagination';


const Main = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(10);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setTodos(res.data);
      setLoading(false);
    };

    fetchTodos();
  }, []);

  // Get current todos
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  console.log(currentTodos)
  return (
    <>
      <Header />
      <div className="container mt-3">
        <TodoList todos={currentTodos} loading={loading} />

        <Pagination
          todosPerPage={todosPerPage}
          totalPosts={todos.length}
          paginate={paginate}
        />

      </div>
    </>
  );

}
export default Main;