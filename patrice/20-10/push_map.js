// Retourner vs muter

let animaux = [
  {nom: 'Miaou', espece: 'zebre', age: 2},
  {nom: 'Wou', espece: 'chien', age: 1},
  {nom: 'Zzz', espece: 'zebre', age: 5}
];

animaux.push({nom: 'Coco', espece: 'Perroquet', age: 35});
// push renvoie le nb d'éléments du tableau
// ( on peut donc le stocker dans une variable)

function bonjour() {
  return 'bonjour !';
}
let premierTest = animaux.map(bonjour);

// équivalent :
let premierTest = animaux.map() => { return 'bonjour !' };
console.log(premierTest);

let nomsAnimaux = animaux.map(nomSeul);

function nomSeul(animal) {
  return animal.nom;
}

// map construit un nouveau tableau
