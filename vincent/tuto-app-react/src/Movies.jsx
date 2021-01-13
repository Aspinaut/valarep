import { HashRouter, Switch, Route, Link } from 'react-router-dom'

const moviesList = require('./movies.json');

const Movies = () => {
  return (
    <div class="row">
      {moviesList.map(movie => (
        <div class="card col-sm-3">
          <div class="card-body">
          <img src={movie.Poster} class="card-img-top"></img>

            <h5 class="card-title">{movie.Title}</h5>
            <p class="card-text">{movie.Plot}</p>
            {/* http://localhost:3000/movie/{id} */}
            <Link class="btn btn-primary" to=''>Voir plus</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Movies;
