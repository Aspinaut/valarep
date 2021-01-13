import { HashRouter, Switch, Route, Link } from 'react-router-dom'
var faker = require('faker');

const cinemasList = require('./cinemas.json');

const Cinemas = () => {
  return (
    <div class="row">
      {cinemasList.map(cinema => (
        <div class="card col-sm-3">
          <div class="card-body">
          <img src={faker.image.nightlife()} class="card-img-top"></img>

            <h5 class="card-title">{cinema.nom}</h5>
            {/* http://localhost:3000/cinema/ */}
            <Link class="btn btn-primary" to=''>Voir plus</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cinemas;
