import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoItem from './components/TodoItem';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './constants/store';

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={App} />
        <Route path="/todos/:id" component={TodoItem} />
        <Route path="/cart" component={Cart} />
      </Router>
    </Provider>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);



