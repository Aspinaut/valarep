import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import React, {useState} from 'react';
import Movies from './Movies';
import Cinemas from './Cinemas';

const Movie = ({match}) => {
  const movie = moviesList.find((movie) => {
    return parseInt(match.params.movieId) === movie.id
  })
  return <>

  </>
};

function App() {
  const state = useState(0);
  return (
    <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to='/movies'>Films</Link>
        </li>
        <li>
          <Link to='/cinemas'>Cinemas</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path={`/movie/:movieId`} component={Movie} />
      <Route path='/cinemas' component={Cinemas} />
      <Route path='/movies' component={Movies} />
      <Route path='/' component={Movies} />
    </Switch>
    </HashRouter>
  );
};

export default App;
