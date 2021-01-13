import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import React, {useState} from 'react';
import Movies from './Movies';
import Cinemas from './Movies';


function App() {
  const state = useState(0);
  return (
    <HashRouter>
    <nav>
      <ul>
        <li>
          {/* http://localhost:3000/# */}
          <Link to='/'>Films</Link>
        </li>
        <li>
          {/* http://localhost:3000/#/cinemas */}
          <Link to='/cinemas'>Cinemas</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path='/' component={Movies} />
      <Route path='/movies' component={Movies} />
      <Route path='/cinemas' component={Cinemas} />
    </Switch>
    </HashRouter>
  );
}

export default App;
