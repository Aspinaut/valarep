let express = require('express');
let mongo = require('mongodb');
let server = express();


// function pageDAccueil(){

// }

// server.get('/', pageDAccueil)
// server.get('/', function (){

// });

let db;
let connectionString = "mongodb+srv://aspinaut:mdp@cluster0.tgbnc.mongodb.net/to_do_app?retryWrites=true&w=majority";
let options = { useNewUrlParser : true, useUnifiedTopology: true};
mongo.connect(connectionString, options, (err, client) => {
  db = client.db();
  let query = {"author":"vincent"};
  db.collection("choses").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    return result;
  });
  server.listen(3000);
});


server.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>A faire</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        />
      </head>
      <body>
        <div class="container">
          <h1 class="py-1 text-center display-4">Choses à faire</h1>

          <div class="p-3 shadow-sm jumbotron">
            <form>
              <div class="d-flex align-items-center">
                <input
                  class="mr-3 form-control"
                  type="text"
                  autofocus
                  autocomplete="off"
                  style="flex: 1"
                />
                <button class="btn btn-primary">Ajouter</button>
              </div>
            </form>
          </div>

          <ul class="pb-5 list-group">
          <li>${result.author}</li>
            <li>${result.comment}</li>
          </ul>
        </div>
      </body>
    </html>`)

});
