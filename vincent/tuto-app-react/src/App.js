import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';

const movies = require('./movies.json');

function App() {
  const state = useState(0)
  return (
    <div className="App">
      <ul className="movie-list">
        movies.map(movie => {
          `<li>${movie.Title}</li>`
        })

      </ul>
    </div>
  );
}

export default App;
