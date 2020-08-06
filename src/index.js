import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TodoItem from './components/TodoItem';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './constants/store';

const Root = () => {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/todos/:id" component={TodoItem} />
      <Route path="/cart" component={Cart} />
    </Router>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider >,
  document.getElementById('root')
);



