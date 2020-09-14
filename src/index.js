import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import News from './components/page/News';
import Posts from './components/page/Post';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Contact from './components/page/Contact';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/news" component={News} />
      <Route exact path="/news/:query" component={News} />
      <Route path="/article/:id" component={Posts} />
      <Route path="/contacts" component={Contact} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root') );

serviceWorker.unregister();
