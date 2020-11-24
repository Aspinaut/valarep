// fonctions d'ordre supérieur
// => fonction qui accepte une fonction en paramètre et/ou renvoie une fonction

// 1 : addEventListener

document.addEventListener('click', quandOnClique())

function quandOnClique() {
  console.log("...");
}

// Illustration fonction flèche ou lambda function

document.addEventListener('click', () => alert('...'));


// 2 : fonction qui renvoie une fonction

// contre exemple

function doubler(n) {
  return n * 2;
}

console.log(doubler(50));

// fin contre exemple

function creerMultiplicateurPar(multiplicateur) {

  return function (n) {
    return n * multiplicateur;
  }
}

let doubler = creerMultiplicateurPar(2);
console.log(doubler(50));

//  va renvoyer 100
// avec cette méthode, on peut créer des fonctions tripler, quadrupler etc...
// très facilement => il suffit de modifier le multiplicateur

// autre idée : créer une seule fonction avec toutes les fonctions nécessaires
// au programme anonymement ( => ne prenant donc pas de place en mémoire)


// Exemple de fonction d'ordre supérieur définie dans le langage

let expediteurs = ['Roger', 'Francis', 'Jules'];

// contre exemple

for (let i = 0; i < expediteurs.length; i++) {
  document.write(expediteurs[i] + 'vous avez envoyé un message');
}
// magic number = ici si on remplace expediteurs.length par 3

// meme chose avec for each
expediteurs.forEach(exp => document.write(exp + ' vous a envoyé un message.');
// le foreach nourrit exp


// fin contre exemple
