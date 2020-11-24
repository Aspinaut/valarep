
// liste.forEach((item, i) => {
  //     document.write(`<li>${item}</li>`);
  // });

// patrice

let form = document.getElementById('afaireForm');
let nouvelleChose = document.getElementById('nouvelleChose');
let listeChoses = document.getElementById('listeChoses');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (nouvelleChose.value.trim() !== '') {
    ajouterChose(nouvelleChose.value);
  }
  nouvelleChose.value = '';
  nouvelleChose.focus();
});

function ajouterChose(chose) {
  let htmlAInserer = `<li>${chose}<button type="button" name="button" onclick="supprimerChose(this)">Supprimer</button></li>`;
  listeChoses.insertAdjacentHTML("beforeend", htmlAInserer);
}

function supprimerChose(boutonCorrespondant) {
  boutonCorrespondant.parentElement.remove();
}
