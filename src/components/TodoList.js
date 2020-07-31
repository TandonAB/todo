import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TodoList = ({ todos, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {todos.map(todo => (
        <Card key={todo.id} className="my-2">
          <Link className="nav-link" to={`/todos/${todo.id}`}>
            <Card.Body>{todo.title}</Card.Body>
          </Link>
        </Card>
      ))}
    </>
  )
}

export default TodoList
