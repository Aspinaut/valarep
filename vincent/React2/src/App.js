import React from 'react';
import './App.css';
import Home from './home';
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import Users from './Users';
import About from './About';
// import './fixtures.js';

export default function App() {
  return (
    //http://localhost:3000/#
    <HashRouter>
      <div>
        <nav>
          <ul>
            <li>
              {/* http://localhost:3000/# */}
              <Link to='/'>Accueil</Link>
            </li>
            <li>
              {/* http://localhost:3000/#/users */}
              <Link to='/users'>Utilisateurs</Link>
              <li>
                {/* http://localhost:3000/#/about */}
                <Link to='/about'>A propos</Link>
              </li>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/users' component={Users} />
          <Route path='/' component={Home} />
        </Switch>
        <footer>&copy; Valarep</footer>
      </div>
    </HashRouter>

  );
}
