// carré du nombre

// let nb = prompt("Entrer un nombre");
// let carre = nb*nb;
// console.log(carre);
//
// // demande le prénom, répond par Bonjour prenom
//
// let prenom = prompt("Entrer un prénom");
// console.log(`Bonjour ${prenom}`)
//
// lit le prix d'un article hors taxe,
// nb d'articles, taux de TVA,
// et fournit le prix total TTC
// augmentation = (prix hors taxe * TVA) / 100
// prix_ttc = prix_hors_taxe + augmentation + nb d'articles
//
// let prix_ht = Number(prompt("Prix HT :"));
// let nb_articles = Number(prompt("Nb articles :"));
// let taux = Number(prompt("TVA :"));
//
// let augmentation = (prix_ht * taux) / 100;
// let prix_ttc = (prix_ht + augmentation) * nb_articles;
//
// console.log(prix_ttc);

// demande deux nb, et indique le signe de leur
// produit
//
// let nb1 = Number(prompt("Rentrer le nombre 1"));
// let nb2 = Number(prompt("Rentrer le nombre 2"));
// let positif = "Le produit est positif";
// let nul = "Le produit est nul";
// let negatif = "Le produit est négatif";
//
// if ((nb1 > 0 && nb2 > 0) || (nb1 < 0 && nb2 < 0)) {
//   console.log(positif);
// }
// else if (nb1 < 0 || nb2 < 0) {
//   console.log(negatif);
// }
// else if (nb1 === 0 || nb2 === 0) {
//   console.log(nul);
// }

// 3 noms : rangés par ordre alphabétique ou non ?

// let name1 = prompt("Entrer le nom 1");
// let name2 = prompt("Entrer le nom 2");
// let name3 = prompt("Entrer le nom 3");
//
// name1 < name2 && name2 < name3 ? console.log("Oui") : console.log("Non");

// age d'un enfant :
// poussin : 6 a 7
// pupille : 8 a 9
// minime 10 a 11
// cadet : 12 +

// let age = Number(prompt("Rentrer l'age"));
// if (age >= 6 && age <= 7) {
//   console.log("Poussin");
// } else if (age >= 8 && age <= 9) {
//   console.log("Pupille");
// } else if (age >= 10 && age <= 11) {
//   console.log("Minime");
// } else if (age >= 12) {
//   console.log("Cadet");
// }

// magasin de reprographie
// 0,10 E les 10e photos
// 0,09 E les 20e d'après
// 0,08 E au delà
// demande le nb
// affiche la facture

// let nb = Number(prompt("Entrer le nb de photocopies"));
// let prix = 0;
// if (nb <= 10) {
//   prix = nb * 0.1;
// } else if (nb > 10 && nb <= 30) {
//   prix = nb * 0.09;
// } else {
//   prix = nb * 0.08;
// }
// console.log("Vous payez" + prix + "euros.");

// hommes 20 + paient
// femmes 18  - 35 paient
// les autres ne paient pas

// let sexe = prompt("Entrez votre sexe : H | F");
// let age = Number(prompt("Entrez votre age"));
//
// if (sexe === "H" && age > 20) {
//   console.log("Vous payez l'impôt");
// } else if (sexe === "F" && (age >= 18 && age <= 35) ) {
//   console.log("Vous payez l'impôt");
// }
// else {
//   console.log("Vous ne payez pas l'impôt");
// }


// 4 familles de tarifs selon une situation

// - 25 ans, permis - 2ans et jamais accident => rouge
// - 25 ans, permis + 2ans ou + 25 ans permis -2 ans => orange
// si jamais accident, rouge si accident, sinon refusé
// + 25 ans, permis + 2ans si aucun accident => vert
// tarif orange si accident, rouge 2 accidents, refusé au delà
// si dans la maison depuis + 5ans, vert => bleu etc..
//
// let age = Number(prompt("Age"));
// let permis_depuis = Number(prompt("Permis depuis"));
// let nb_accidents = Number(prompt("Accident :"));
// let annee_clientele = Number(prompt("Depuis combien de temps client :"));
// let tarif;
//
// if (age > 25 && permis_depuis >= 2 && !nb_accidents)
//   tarif = "vert";
// else if ((age < 25 && permis_depuis >= 2) || (age >= 25 && permis_depuis < 2) || (age > 25 && permis_depuis >= 2 && nb_accidents === 1))
//   tarif = "orange";
// else if ((age < 25 && permis_depuis < 2 && !nb_accidents) || ((age < 25 && permis_depuis >= 2) || (age >= 25 && permis_depuis < 2) && nb_accidents) || (age > 25 && permis_depuis >= 2 && nb_accidents === 2))
//   tarif = "rouge";
// else
//   tarif = "pas de tarif";
//
// if (annee_clientele >= 5)
//   switch (tarif)
//   {
//     case "vert":
//       tarif = "bleu";
//       break;
//     case "orange":
//       tarif = "vert";
//       break;
//     case "rouge":
//       tarif = "orange";
//       break;
//     default:
//       tarif = "pas de tarif";
//   }
//
// console.log("Votre tarif est : " + tarif ".");

// SOLUCE VINCENT

// let age_assure = Number(prompt("Quel âge avez-vous?"));
// let annee_permis = Number(prompt("Depuis combien d'années avez-vous le permis?"));
// let nb_accident = Number(prompt("Combien d'accident avez-vous eu?"));
// let temps_assurance = Number(prompt("Depuis combien de temps êtes vous assuré chez nous?"));
//
// let compteur = 0;
//
// if (age_assure >= 25) {
//     compteur++;
// }
// if (annee_permis >= 2) {
//     compteur++;
// }
//
// compteur = compteur - nb_accident;
//
// if ((compteur === 0 || compteur === 1 || compteur === 2) && temps_assurance >= 5) {
//     compteur++;
// }
//
// if (compteur === 3) {
//     console.log("Vous aurez le tarif bleu.");
// } else if (compteur === 2) {
//     console.log("Vous aurez le tarif vert.");
// } else if (compteur === 1) {
//     console.log("Vous aurez le tarif orange.");
// } else if (compteur === 0) {
//     console.log("Vous aurez le tarif rouge.");
// } else if (compteur < 0) {
//     console.log("Vous ne pouvez pas être assuré chez nous. Désolé.");
// }

// nb => table multiplication
// let nb = Number(prompt("Entrez votre nombre"));
// let i = -1;
//
// while (++i < 10)
//   console.log(nb * i);

// nb => calcule la somme des entiers jusqu'au nb
// let nb = Number(prompt("Entrez votre nombre"));
// let nb_arrivee = 0;
//
// for (let i = 0; i <= nb; i++) {
//     nb_arrivee = nb_arrivee + i;
// }
// console.log(nb_arrivee);

// 10 nb
// plus grand ? plus petit ? + position

// let nb = 0;
// let nb_plus_grand;
// let nb_plus_petit;
// let pos_plus_grand;
// let pos_plus_petit;
//
// for (let i = 0; i < 11; i++)
// {
//   nb = Number(prompt("Entrez votre nombre"));
//   if (nb > nb_plus_grand || i === 0) {
//     nb_plus_grand = nb;
//     pos_plus_grand = i;
//   } else if (nb < nb_plus_petit || i === 0) {
//     nb_plus_petit = nb;
//     pos_plus_petit = i;
//   }
// }
// console.log(nb_plus_grand + " " + pos_plus_grand);
// console.log(nb_plus_petit + " " + pos_plus_petit);

// factorielle

// let nb = Number(prompt("Entrez votre nombre"));
// function fact(nb) {
//   if (nb < 1)
//     return (!nb);
//   return (nb * fact(nb - 1));
// }
// console.log(fact(nb));

// fibonnacci

// let nb = Number(prompt("Entrez votre nombre"));
//
// function fibonacci(nb) {
//   if (nb < 0)
//     return (-1);
//   if (nb < 2)
//     return (nb);
//   return (fibonacci(nb - 1) + fibonacci(nb - 2));
// }

// TABLEAUX

// let tab = new Array();

// [6,8,10,12,14]
// tab[0] + tab_2[0] = tab_3[0]

// let tab = [1,2,3,4,5];
// let tab_2 = [5,6,7,8,9];
// let tab_3 = new Array(5);
//
// for (let i = 0; i < tab.length; i++) {
//   tab_3[i] = tab[i] + tab_2[i];
// }
// console.log(tab_3);
// 
// let tab = [1,2,3,4,5];
// let tab_2 = [5,6,7,8,9];
//
// function schtroumf(tab, tab2) {
//   let tab3 = new Array(5);
//   for (let i = 0; i < tab.length; i++) {
//     for (let j = 0; j < tab.length; j++) {
//       tab3[i] = tab
//     }
//   }
//   return tab3;
// }
