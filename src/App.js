import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Pagination from './components/Pagination';
import { connect } from "react-redux";
import { addTodos } from "./constants/actions";

function App ({ todos, loading, addTodos }) {

  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(10);

  useEffect(() => {
    addTodos()
  }, [])

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

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = {
  addTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
