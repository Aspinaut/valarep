/*
// exemple de serveur manuel
let http = require('http');

// notation lambda
let server = http.createServer(function (request, response){
  if (request.url === '/') {
    response.end('Bienvenue sur notre site !');
  } else if (request.url === '/contact') {
    response.end("Contactez-nous à l'adresse ... ")
  } else {
    response.end("La page n'existe pas.")
  }
});

server.listen(3000);
console.log("serveur démarré");
*/

let express = require('express');
let server = express();

server.use(express.urlencoded({ extended: false }));
// permet d'accéder aux infos remplies dans les formulaires
// rien à voir avec le DOM => pas de DOM côté serveur !

// GET => info dans URL =/ POST
server.get('/', (req, res) => {
  res.send(`
    <form action="/response" method="POST">
      <p>Combien font 2 - 2 ?</p>
      <input name="givenResponse" autocomplete="off">
      <button>Envoyer</button>
    </form>
  `);
});

server.get('/response', function (req,res) {
  res.send('Refus');
});

server.post('/response', function (req,res) {
  res.send('Bien reçu');
  console.log(req.body);
  // req.body correspond à $_POST
});

// dans ce cas ci, si on répond au formulaire, on accède à POST.
// si on tape dans l'URL avec /response, on accède à GET.

server.listen(3000);
console.log("écoute sur port 3000...");
