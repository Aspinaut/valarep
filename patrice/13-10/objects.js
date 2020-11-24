// OBJECTS

let nomChien = 'Fifou';
let ageChien = 4;

let chien = {
  nom: 'Fifou',
  age: 4,
  nourriture: {
    aime: 'croquettes',
    deteste: 'carottes'
  }
}

alert(`Mon chien s'appelle ${chien.nom}, il a ${chien.age} ans.\nIl aime les ${chien.nourriture.aime} et déteste les ${chien.nourriture.deteste}.`);

function quandOnClique(){
  alert("Vous avez cliqué !");
}

document.addEventListener("click", quandOnClique);
