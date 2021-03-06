const express = require("express");
let mongo = require("mongodb");
let serveur = express();
let sanitizer = require('sanitize-html');



require('dotenv').config()

serveur.use(express.json()); // Permet d'accepter du JSON

serveur.use(express.urlencoded({ extented: false })); // a ajouter pour recuperer des données dans un formulaire;
serveur.use(express.static('public'));

let db;
let connectionString = `mongodb+srv://aspinaut:${process.env.MONGO_PASS}@cluster0.tgbnc.mongodb.net/to_do_app?retryWrites=true&w=majority`;
let options = { useNewUrlParser: true, useUnifiedTopology: true };

mongo.connect(connectionString, options, (err, client) => {
   /* console.log(err); /*si on veux voir les erreurs */
  db = client.db();
  serveur.listen(3000); // ne le mettre qu'apres une fois que tout est lancé
});

//call back en JS on lance plusieurs chose

// serveur.get('/', (pageDAccueil))

// serveur.get ('/', function()) //fonction anonyme

serveur.get("/", (req, res) => {
  db.collection("choses").find().toArray((err, choses) => {
      // console.log(choses);

    // let lesLIEnConstruction = '';
    //   choses.forEach(objetChose => {
    //     const chose = objetChose.contenu;

    //     const nouveauLI = `<li
    //                           class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
    //                           <span>${chose}</span>
    //                             <div>
    //                               <button class="mr-1 btn btn-secondary btn-sm">Éditer</button>
    //                               <button class="btn btn-danger btn-sm">Supprimer</button>
    //                             </div>
    //                         </li>`

    //     lesLIEnConstruction += nouveauLI;
    //   });

  const htmlAEnvoyer = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title> Bonjour </title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
    />
  </head>
  <body>
    <div class="container">
      <h1 class="py-1 text-center display-4">Choses à faire</h1>

      <div class="p-3 shadow-sm jumbotron">

        <form id="ajout-form" action="/ajouter" method="POST">
          <div class="d-flex align-items-center">
            <input
              class="mr-3 form-control"
              type="text"
              autofocus
              autocomplete="off" id="chose-input"
              style="flex: 1"
              name="chose"
            />
            <button class="btn btn-primary btn-add" id="send">Ajouter</button>
          </div>
        </form>
        </div>

      <ul id="choses-ul" class="pb-5 list-group">

      </ul>
    </div>
    <script>let chosesClient = ${JSON.stringify(choses)}</script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="/client.js"></script>
  </body>
</html>
`;
res.send(htmlAEnvoyer);
  });
});
// Le .join permet de remplacer les crochets, les virgules etc par des espaces dans le cas present

serveur.post("/ajouter", function (req, res) {
  const choseAssainie = sanitizer(req.body.chose, { allowedTags: [], allowedAttributes: {} });
  let nouvelleChose = { contenu: req.body.chose };
  db.collection("choses").insertOne(nouvelleChose,
    (err, info) => {
      res.send(info.ops[0]);
      // res.redirect('/');
    });
});

serveur.post('/editer', (req, res) =>{
  const nouveauContenu = req.body.contenu;
  const idChose = req.body.id;
  let idDocument = new mongo.ObjectId(idChose);

  // findOneAndUpdate (document_a_update, champs_a_updaté + valeur, callback)
  db.collection('choses').findOneAndUpdate({_id: idDocument }, { $set : { contenu: nouveauContenu } }, () => {

   res.send('Element mis à jour');
  });
});

serveur.post('/supprimer', (req, res)=>{
  const idChose = req.body.id;
  let idDocument = new mongo.ObjectId(idChose);
  db.collection('choses').deleteOne({_id: idDocument }, () => {
   res.send('Element supprimé');
  });
});
