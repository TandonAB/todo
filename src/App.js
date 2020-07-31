import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Pagination from './components/Pagination';
import { connect } from "react-redux";
import { addTodos } from "./constants/actions";

function App () {
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

  console.log(todos)

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

const mapStateToProps = state => {
  const todos = state.todoReducer;
  return todos;
}

export default connect(mapStateToProps, { addTodos })(App);
